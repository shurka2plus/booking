package com.booking.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping({
        "/userlist",
        "/applist",
        "/user",
        "/application"
})
public class RedirectController {

    @GetMapping("/**")
    public String performRedirect() {
        return "redirect:/";
    }

}
