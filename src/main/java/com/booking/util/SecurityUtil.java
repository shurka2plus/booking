package com.booking.util;

import com.booking.exceptions.ResourceForbiddenException;
import com.booking.model.dto.UserResponse;
import com.booking.service.UserService;

import javax.servlet.http.HttpServletRequest;


public class SecurityUtil {

    public static boolean hasAnyRole(HttpServletRequest request, String ... roles) {
        for(String role : roles) {
            if(request.isUserInRole(role))
                return true;
        }
        return false;
    }

    public static void verifyPublisher(Long userId, String userEmail, UserService userService) {
        UserResponse userResponse = userService.findByEmail(userEmail);
        if(!userId.equals(userResponse.getId()))
            throw new ResourceForbiddenException(userEmail);
    }
}
