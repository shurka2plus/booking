package com.booking.controller;

import com.booking.model.dto.AppResponse;
import com.booking.service.AppService;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/apps")
public class AppController {

    private final AppService appService;

    public AppController(AppService appService) {
        this.appService = appService;
    }

    @GetMapping
    public List<AppResponse> getAll() {
        return appService.findAll();
    }

    @GetMapping(params = {"page", "size"})
    public Page<AppResponse> getAllPaged(@RequestParam("page") int page, @RequestParam("size") int size) {
        return appService.findAllPaged(page, size);
    }

    @GetMapping("/{id}")
    public AppResponse getById(@PathVariable("id") Long id) {
        return appService.findById(id);
    }

}