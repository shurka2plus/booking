package com.booking.service;

import com.booking.dao.UserRepository;
import com.booking.exceptions.ResourceForbiddenException;
import com.booking.exceptions.UserNotFoundException;
import com.booking.model.dto.UserRequest;
import com.booking.model.dto.UserResponse;
import com.booking.model.entity.User;
import com.booking.model.enums.UserRole;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    private final ModelMapper modelMapper;

    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public UserServiceImpl(UserRepository userRepository, ModelMapper modelMapper, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.userRepository = userRepository;
        this.modelMapper = modelMapper;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @Override
    public UserResponse findById(Long id) {
        return modelMapper.map(getUserById(id), UserResponse.class);
    }

    @Override
    public UserResponse findByEmail(String email) {
        User user = userRepository.findByEmail(email).orElseThrow(() -> new UserNotFoundException(email));
        return modelMapper.map(user, UserResponse.class);
    }

    @Override
    public List<UserResponse> findAll() {
        List<User> users = userRepository.findAll();
        return users.stream()
                .map(user -> modelMapper.map(user, UserResponse.class))
                .collect(Collectors.toList());
    }

    @Override
    public Page<UserResponse> findAllPaged(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<User> users = userRepository.findAll(pageable);
        return users.map(user -> modelMapper.map(user, UserResponse.class));
    }

    @Override
    @Transactional
    public UserResponse create(UserRequest userRequest) {
        userRequest.setPassword(bCryptPasswordEncoder.encode(userRequest.getPassword()));

        User newUser = userRepository.save(
                modelMapper.map(userRequest, User.class)
        );
        return modelMapper.map(newUser, UserResponse.class);
    }

    @Override
    @Transactional
    public void update(UserRequest userRequest) {
        validateUserById(userRequest.getId());
        userRepository.updateUser(
                userRequest.getName(),
                userRequest.getEmail(),
                userRequest.getRole(),
                userRequest.getId()
        );
    }

    @Override
    @Transactional
    public void delete(Long id) {
        validateUserById(id);
        userRepository.deleteById(id);
    }

    @Override
    @Transactional
    public void delete(Long id,  String adOpsName) {
        User user = getUserById(id);

        if(user.getRole() != UserRole.ROLE_PUBLISHER)
            throw new ResourceForbiddenException(adOpsName);

        userRepository.deleteById(id);
    }

    public User getUserById(Long id) {
        return userRepository.findById(id).orElseThrow(() -> new UserNotFoundException(id));
    }

    public void validateUserById(Long id) {
        if(!userRepository.existsById(id))
            throw new UserNotFoundException(id);
    }
}
