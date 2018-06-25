package com.booking.model.entity;

import com.booking.model.enums.AppType;
import com.booking.model.enums.ContentType;

import javax.persistence.*;
import java.util.Objects;
import java.util.Set;

@Entity
@NamedEntityGraph(
        name = "appsWithUsersAndContent", attributeNodes = {
        @NamedAttributeNode("contentTypes"),
        @NamedAttributeNode("user")
})
public class App {

    public App() {}

    @Id
    @SequenceGenerator(name="app_sequence", sequenceName="APP_ID_SEQ", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "app_sequence")
    private Long id;

    @Column(nullable = false)
    private String name;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private AppType type;

    @ElementCollection(fetch = FetchType.EAGER)
    @Enumerated(EnumType.STRING)
    private Set<ContentType> contentTypes;

    @ManyToOne(optional = false)
    private User user;

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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof App)) return false;
        App app = (App) o;
        return Objects.equals(name, app.name) &&
                type == app.type &&
                Objects.equals(user, app.user);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, type, user);
    }

    @Override
    public String toString() {
        return "App{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", type=" + type +
                ", contentTypes=" + contentTypes +
                ", user=" + user +
                '}';
    }
}
