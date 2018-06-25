package com.booking.service;

import com.booking.model.dto.UserRequest;
import com.booking.model.dto.UserResponse;
import com.booking.model.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface UserService {

    UserResponse findById(Long id);

    List<UserResponse> findAll();

    Page<UserResponse> findAllPaged(int page, int size);

    UserResponse create(UserRequest userRequest);

    void update(UserRequest userRequest);

    void delete(Long id);

    User getUserById(Long id);

}
