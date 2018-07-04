package com.booking.dao;

import com.booking.model.entity.App;
import com.booking.model.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AppRepository extends JpaRepository<App, Long> {

    @EntityGraph(attributePaths = { "contentTypes" })
    @Query("select a from App a where a.user = ?1")
    Page<App> findAllByUser(User user, Pageable pageable);

    @EntityGraph(attributePaths = { "contentTypes", "user" })
    @Override
    List<App> findAll();

}
