package com.codesquad.issue.domain;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;

@Repository
public class UserDAO {

    private JdbcTemplate jdbcTemplate;

    public UserDAO(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    public void addUser(User user) {
        String sql = "INSERT INTO user (name, profile_image) VALUES (?, ?)";
        jdbcTemplate.update(sql, user.getName(), user.getProfileImage());
    }

}
