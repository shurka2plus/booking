package com.booking.controller;

import com.booking.exceptions.BadRequestException;
import com.booking.model.dto.AppRequest;
import com.booking.model.dto.AppResponse;
import com.booking.model.dto.UserRequest;
import com.booking.model.dto.UserResponse;
import com.booking.service.AppService;
import com.booking.service.UserService;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;


@RestController
@RequestMapping(path = "/api/users")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    private final UserService userService;

    private final AppService appService;

    public UserController(UserService userService, AppService appService) {
        this.userService = userService;
        this.appService = appService;
    }

    @PostMapping
    public ResponseEntity<UserResponse> create(@Validated(UserRequest.New.class) @RequestBody UserRequest user,
                                               HttpServletRequest req) throws URISyntaxException {
        UserResponse newUser = userService.create(user);
        return ResponseEntity
                .created(new URI(req.getRequestURI() + newUser.getId().toString()))
                .body(newUser);
    }

    @PutMapping(path = {"/{id}"})
    public void update(@Validated(UserRequest.Existing.class) @RequestBody UserRequest user,
                       @PathVariable("id") Long id) {
        if(!id.equals(user.getId()))
            throw new BadRequestException("\'id\' value in request path doesn't match to \'id\' field of user object in request body.");
        userService.update(user);
    }

    @DeleteMapping(path = {"/{id}"})
    public void delete(@PathVariable("id") Long id) {
        userService.delete(id);
    }

    @GetMapping(path = {"/{id}"})
    public UserResponse getById(@PathVariable("id") Long id) {
        return userService.findById(id);
    }

    @GetMapping
    public List<UserResponse> getAll() {
        return userService.findAll();
    }

    @GetMapping(params = {"page", "size"})
    public Page<UserResponse> getAllPaged(@RequestParam("page") int page, @RequestParam("size") int size) {
        return userService.findAllPaged(page, size);
    }

    @GetMapping(path = {"/{id}/apps"})
    public List<AppResponse> getApps(@PathVariable("id") Long id) {
        return appService.findUserApps(id);
}

    @PostMapping(path = {"/{id}/apps"})
    public AppResponse createUserApp(@PathVariable("id") Long userId,
                                    @Validated(AppRequest.New.class) @RequestBody AppRequest appRequest) {
        return appService.create(appRequest, userId);
    }

    @PutMapping(path = {"/{id}/apps/{appId}"})
    public void updateUserApp(@PathVariable("id") Long userId, @PathVariable("appId") Long appId,
                                    @Validated(AppRequest.Existing.class) @RequestBody AppRequest appRequest) {
        if(!appId.equals(appRequest.getId()))
            throw new BadRequestException("\'id\' value in request path doesn't match to \'id\' field of app object in request body.");
        appService.update(appRequest, userId);
    }

    @DeleteMapping(path = {"/{id}/apps/{appId}"})
    public void deleteUserApp(@PathVariable("id") Long userId, @PathVariable("appId") Long appId) {
        appService.delete(appId, userId);
    }

}
