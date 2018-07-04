package com.booking.controller;

import com.booking.exceptions.BadRequestException;
import com.booking.exceptions.ResourceForbiddenException;
import com.booking.model.dto.AppRequest;
import com.booking.model.dto.AppResponse;
import com.booking.model.dto.UserRequest;
import com.booking.model.dto.UserResponse;
import com.booking.model.enums.UserRole;
import com.booking.service.AppService;
import com.booking.service.UserService;
import com.booking.util.SecurityUtil;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;


@RestController
@RequestMapping(path = "/api/users")
public class UserController {

    private final UserService userService;

    private final AppService appService;

    public UserController(UserService userService, AppService appService) {
        this.userService = userService;
        this.appService = appService;
    }

    @Secured({ "ROLE_ADMIN", "ROLE_ADOPS" })
    @PostMapping
    public ResponseEntity<UserResponse> create(@Validated(UserRequest.New.class) @RequestBody UserRequest user,
                                               HttpServletRequest request) throws URISyntaxException {
        if(request.isUserInRole("ROLE_ADOPS") && (user.getRole() != UserRole.ROLE_PUBLISHER))
            throw new ResourceForbiddenException(request.getUserPrincipal().getName());

        UserResponse newUser = userService.create(user);
        return ResponseEntity
                .created(new URI(request.getRequestURI() + newUser.getId().toString()))
                .body(newUser);
    }

    @Secured({ "ROLE_ADMIN", "ROLE_ADOPS" })
    @PutMapping(path = {"/{id}"})
    public void update(@Validated(UserRequest.Existing.class) @RequestBody UserRequest user,
                       @PathVariable("id") Long id,
                       HttpServletRequest request) {
        if(!id.equals(user.getId()))
            throw new BadRequestException("\'id\' value in request path doesn't match to \'id\' field of user object in request body.");

        if(request.isUserInRole("ROLE_ADOPS") && (user.getRole() != UserRole.ROLE_PUBLISHER))
            throw new ResourceForbiddenException(request.getUserPrincipal().getName());

        userService.update(user);
    }

    @Secured({ "ROLE_ADMIN", "ROLE_ADOPS" })
    @DeleteMapping(path = {"/{id}"})
    public void delete(@PathVariable("id") Long id, HttpServletRequest req) {
        if(req.isUserInRole("ROLE_ADOPS"))
            userService.delete(id, req.getUserPrincipal().getName());
        else
            userService.delete(id);
    }

    @GetMapping(path = {"/{id}"})
    public UserResponse getById(@PathVariable("id") Long id, HttpServletRequest request) {
        UserResponse userResponse = userService.findById(id);
        String username = request.getUserPrincipal().getName();

        if(!SecurityUtil.hasAnyRole(request, "ROLE_ADMIN", "ROLE_ADOPS")
                && !username.equalsIgnoreCase( userResponse.getEmail() ))
            throw new ResourceForbiddenException(username);
        return userResponse;
    }

    @GetMapping(path = {"/email/{email}"})
    public UserResponse getById(@PathVariable("email") String email, HttpServletRequest request) {
        UserResponse userResponse = userService.findByEmail(email);
        String username = request.getUserPrincipal().getName();

        if(!SecurityUtil.hasAnyRole(request, "ROLE_ADMIN", "ROLE_ADOPS")
            && !username.equalsIgnoreCase( userResponse.getEmail() ))
            throw new ResourceForbiddenException(username);
        return userResponse;
    }

    @Secured({ "ROLE_ADMIN", "ROLE_ADOPS" })
    @GetMapping
    public List<UserResponse> getAll() {
        return userService.findAll();
    }

    @Secured({ "ROLE_ADMIN", "ROLE_ADOPS" })
    @GetMapping(params = {"page", "size"})
    public Page<UserResponse> getAllPaged(@RequestParam("page") int page, @RequestParam("size") int size) {
        return userService.findAllPaged(page, size);
    }

    @GetMapping(path = {"/{id}/apps"})
    public Page<AppResponse> getApps(@RequestParam("page") int page, @RequestParam("size") int size,
                                     @PathVariable("id") Long id,
                                     HttpServletRequest request) {
        if(request.isUserInRole("ROLE_PUBLISHER"))
            SecurityUtil.verifyPublisher(id, request.getUserPrincipal().getName(), this.userService);
        return appService.findUserAppsPaged(id, page, size);
}

    @Secured({ "ROLE_PUBLISHER", "ROLE_ADOPS" })
    @PostMapping(path = {"/{id}/apps"})
    public AppResponse createUserApp(@PathVariable("id") Long userId,
                                    @Validated(AppRequest.New.class) @RequestBody AppRequest appRequest,
                                     HttpServletRequest request) {

        if(request.isUserInRole("ROLE_PUBLISHER"))
            SecurityUtil.verifyPublisher(userId, request.getUserPrincipal().getName(), this.userService);

        return appService.create(appRequest, userId);
    }

    @Secured({ "ROLE_PUBLISHER", "ROLE_ADOPS" })
    @PutMapping(path = {"/{id}/apps/{appId}"})
    public void updateUserApp(@PathVariable("id") Long userId, @PathVariable("appId") Long appId,
                                @Validated(AppRequest.Existing.class) @RequestBody AppRequest appRequest,
                                HttpServletRequest request) {
        if(!appId.equals(appRequest.getId()))
            throw new BadRequestException("\'id\' value in request path doesn't match to \'id\' field of app object in request body.");

        if(request.isUserInRole("ROLE_PUBLISHER"))
            SecurityUtil.verifyPublisher(userId, request.getUserPrincipal().getName(), this.userService);

        appService.update(appRequest, userId);
    }

    @Secured({ "ROLE_PUBLISHER", "ROLE_ADOPS" })
    @DeleteMapping(path = {"/{id}/apps/{appId}"})
    public void deleteUserApp(@PathVariable("id") Long userId, @PathVariable("appId") Long appId,
                              HttpServletRequest request) {

        if(request.isUserInRole("ROLE_PUBLISHER"))
            SecurityUtil.verifyPublisher(userId, request.getUserPrincipal().getName(), this.userService);

        appService.delete(appId, userId);
    }

}
