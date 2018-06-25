package com.booking.dao;

import com.booking.model.entity.User;
import com.booking.model.enums.UserRole;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {

    @Modifying
    @Query("update User u set " +
            "u.name = ?1, " +
            "u.email = ?2, " +
            "u.role = ?3 " +
            "where u.id = ?4")
    int updateUser(String name, String email, UserRole role, Long id);

}
