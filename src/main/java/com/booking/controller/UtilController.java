package com.booking.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.security.Principal;

@RestController
public class UtilController {

    @GetMapping(path ={"/authenticate"})
    public Principal user(Principal user) {
        return user;
    }


    @GetMapping({
            "/userlist/**",
            "/applist/**",
            "/user/**",
            "/application/**",
            "/login/**"
    })
    public void performRedirect(HttpServletResponse resp) throws IOException {
        resp.sendRedirect("/");
    }

}
