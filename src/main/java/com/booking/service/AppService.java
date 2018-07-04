package com.booking.service;

import com.booking.model.dto.AppRequest;
import com.booking.model.dto.AppResponse;
import org.springframework.data.domain.Page;

import java.util.List;

public interface AppService {

    AppResponse findById(Long id);

    List<AppResponse> findAll();

    Page<AppResponse> findAllPaged(int page, int size);

    Page<AppResponse> findUserAppsPaged(Long userId, int page, int size);

    AppResponse create(AppRequest app, Long userId);

    void update(AppRequest app, Long userId);

    void delete(Long appId, Long userId);

}
