package com.codesquad.issue.domain;

import com.codesquad.issue.dto.UserDTO;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class UserDAO {

    private JdbcTemplate jdbcTemplate;

    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    public UserDAO(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
        this.namedParameterJdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
    }

    public void addUser(User user) {
        String sql = "INSERT INTO user (name, profile_image) VALUES (?, ?)";
        jdbcTemplate.update(sql, user.getName(), user.getProfileImage());
    }

    public List<UserDTO> getAllUser() {
        String sql = "SELECT user_id, name, profile_image FROM user";
        return jdbcTemplate.query(sql, new RowMapper<UserDTO>() {
            @Override
            public UserDTO mapRow(ResultSet rs, int rowNum) throws SQLException {
                return UserDTO.builder()
                        .userId(rs.getLong("user_id"))
                        .name(rs.getString("name"))
                        .profileImage(rs.getString("profile_image"))
                        .build();
            }
        });
    }

    public List<UserDTO> getAssignees(Integer issue_id) {
        String sql = "SELECT u.user_id, u.name, u.profile_image " +
                "FROM assignee a " +
                "JOIN user u " +
                "ON a.user = u.user_id " +
                "WHERE a.issue = :issue_id";
        SqlParameterSource sqlParameterSource = new MapSqlParameterSource("issue_id", issue_id);
        return namedParameterJdbcTemplate.query(sql, sqlParameterSource, new RowMapper<UserDTO>() {
            @Override
            public UserDTO mapRow(ResultSet rs, int rowNum) throws SQLException {
                return UserDTO.builder()
                        .userId(rs.getLong("user_id"))
                        .name(rs.getString("name"))
                        .profileImage(rs.getString("profile_image"))
                        .build();
            }
        });
    }

    public void addAssignees(Integer userId, Integer issueId) {
        String sql = "INSERT INTO assignee (issue, user) VALUES (?, ?)";
        jdbcTemplate.update(sql, issueId, userId);
    }

    public Integer getUserIdWithName(String name) {
        String sql = "SELECT user_id FROM user WHERE name = ?";
        return jdbcTemplate.queryForObject(sql, new Object[] {name}, Integer.class);
    }
}
