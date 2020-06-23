package com.codesquad.issue.domain;

import com.codesquad.issue.dto.CommentDTO;
import com.codesquad.issue.dto.UserDTO;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Repository
public class CommentDAO {

    private JdbcTemplate jdbcTemplate;

    public CommentDAO(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    public List<CommentDTO> getCommentsWithIssueId(Integer id) {
        String sql = "SELECT c.comment_id, content, created_at, u.user_id, name, profile_image " +
                "FROM comment c " +
                "JOIN user u " +
                "ON c.writer = u.user_id " +
                "WHERE c.issue = ?";
        return jdbcTemplate.query(sql, new Object[]{id}, new RowMapper<CommentDTO>() {
            @Override
            public CommentDTO mapRow(ResultSet rs, int rowNum) throws SQLException {
                return CommentDTO.builder()
                        .commentId(rs.getInt("comment_id"))
                        .content(rs.getString("content"))
                        .writer(UserDTO.builder()
                                .userId(rs.getLong("user_id"))
                                .name(rs.getString("name"))
                                .profileImage(rs.getString("profile_image")).build())
                        .createdAt(rs.getTimestamp("created_at").toLocalDateTime()
                                .format(DateTimeFormatter.ofPattern("yyyy-MM-dd")))
                        .build();
            }
        });
    }

    public int getNumberOfCommentWithIssueId(Integer id) {
        String sql = "SELECT COUNT(comment_id) COUNT FROM comment WHERE issue = ?";
        return jdbcTemplate.queryForObject(sql, new Object[] {id} ,Integer.class);
    }
}
