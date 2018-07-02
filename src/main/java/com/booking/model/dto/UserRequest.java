package com.booking.model.dto;

import com.booking.model.enums.UserRole;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Null;
import java.util.Objects;

public class UserRequest extends BaseRequest {

    public UserRequest() {}

    @Null(groups = New.class)
    @NotNull(groups = Existing.class)
    private Long id;

    @NotBlank(groups = {New.class, Existing.class})
    private String name;

    @NotBlank(groups = {New.class, Existing.class})
    @Email(groups = {New.class, Existing.class})
    private String email;

    @NotBlank(groups = New.class)
    private String password;

    @NotNull(groups = {New.class, Existing.class})
    private UserRole role;

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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public UserRole getRole() {
        return role;
    }

    public void setRole(UserRole role) {
        this.role = role;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserRequest userRequest = (UserRequest) o;
        return Objects.equals(name, userRequest.name) &&
                Objects.equals(email, userRequest.email) &&
                role == userRequest.role;
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, email, role);
    }
}
