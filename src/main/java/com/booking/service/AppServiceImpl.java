package com.booking.service;

import com.booking.dao.AppRepository;
import com.booking.exceptions.AppNotFoundException;
import com.booking.model.dto.AppRequest;
import com.booking.model.dto.AppResponse;
import com.booking.model.entity.App;
import com.booking.model.entity.User;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class AppServiceImpl implements AppService {

    private final AppRepository appRepository;

    private final UserService userService;

    private final ModelMapper modelMapper;

    public AppServiceImpl(AppRepository appRepository, UserService userService, ModelMapper modelMapper) {
        this.appRepository = appRepository;
        this.userService = userService;
        this.modelMapper = modelMapper;
    }

    @Override
    public AppResponse findById(Long id) {
        App app = getAppById(id);
        return modelMapper.map(app, AppResponse.class);
    }

    @Override
    public List<AppResponse> findAll() {
        List<App> apps = appRepository.findAll();
        return apps.stream()
                .map(app -> modelMapper.map(app, AppResponse.class))
                .collect(Collectors.toList());
    }

    @Override
    public Page<AppResponse> findAllPaged(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<App> apps = appRepository.findAll(pageable);
        return apps.map(app -> modelMapper.map(app, AppResponse.class));
    }

    @Override
    public List<AppResponse> findUserApps(Long userId) {
        User user = userService.getUserById(userId);
        List<App> userApps = appRepository.findAllByUser(user);
        return userApps.stream()
                .map(app -> modelMapper.map(app, AppResponse.class))
                .collect(Collectors.toList());
    }

    @Transactional
    @Override
    public AppResponse create(AppRequest appRequest, Long userId) {
        User user = userService.getUserById(userId);
        App newApp = modelMapper.map(appRequest, App.class);
        newApp.setUser(user);
        return modelMapper.map(appRepository.save(newApp), AppResponse.class);
    }

    @Transactional
    @Override
    public void update(AppRequest appReq, Long userId) {
        App app = getAppById(appReq.getId());
        validateAppByUserId(app, userId);

        app.setName(appReq.getName());
        app.setType(appReq.getType());
        app.setContentTypes(appReq.getContentTypes());
    }

    @Transactional
    @Override
    public void delete(Long appId, Long userId) {
        App app = getAppById(appId);
        validateAppByUserId(app, userId);
        appRepository.deleteById(userId);
    }

    private App getAppById(Long id) {
        return appRepository.findById(id).orElseThrow(() -> new AppNotFoundException(id, null));
    }

    private void validateAppByUserId(App app, Long userId) {
        Long appId = app.getUser().getId();
        if(!userId.equals(appId))
            throw new AppNotFoundException(appId, userId);
    }

    @PostConstruct
    private void init() {
        modelMapper
                .createTypeMap(App.class, AppResponse.class)
                .addMapping(app -> app.getUser().getId(), AppResponse::setUserId);
    }

}
