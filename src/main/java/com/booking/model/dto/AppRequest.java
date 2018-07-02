package com.booking.model.dto;

import com.booking.model.enums.AppType;
import com.booking.model.enums.ContentType;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Null;
import java.util.Objects;
import java.util.Set;

public class AppRequest extends BaseRequest {

    public AppRequest() {}

    @Null(groups = New.class)
    @NotNull(groups = Existing.class)
    private Long id;

    @NotBlank(groups = {New.class, Existing.class})
    private String name;

    @NotNull(groups = {New.class, Existing.class})
    private AppType type;

    private Set<ContentType> contentTypes;

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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        AppRequest that = (AppRequest) o;
        return Objects.equals(name, that.name) &&
                type == that.type;
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, type);
    }
}
