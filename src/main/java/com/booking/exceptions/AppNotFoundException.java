package com.booking.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class AppNotFoundException extends RuntimeException {

    public AppNotFoundException(Long appId, Long userId) {
        super("App with ID " + appId + " does not exist"
                + (userId != null ? " for user " + userId : "")
        );
    }

}
