package com.booking.dao;

import com.booking.model.entity.App;
import com.booking.model.entity.User;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AppRepository extends JpaRepository<App, Long> {

    @EntityGraph(attributePaths = { "contentTypes" })
    List<App> findAllByUser(User user);

    @EntityGraph(attributePaths = { "contentTypes", "user" })
    @Override
    List<App> findAll();

}
