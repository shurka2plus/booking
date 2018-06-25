package com.booking.model.dto;

import com.booking.model.enums.AppType;
import com.booking.model.enums.ContentType;

import java.util.Objects;
import java.util.Set;

public class AppResponse {

    public AppResponse() {}

    private Long id;

    private String name;

    private AppType type;

    private Set<ContentType> contentTypes;

    private Long userId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public AppType getType() {
        return type;
    }

    public void setType(AppType type) {
        this.type = type;
    }

    public Set<ContentType> getContentTypes() {
        return contentTypes;
    }

    public void setContentTypes(Set<ContentType> contentTypes) {
        this.contentTypes = contentTypes;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        AppResponse that = (AppResponse) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(name, that.name) &&
                type == that.type &&
                Objects.equals(userId, that.userId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, type, userId);
    }
}
