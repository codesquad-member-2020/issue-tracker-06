package com.codesquad.issue.domain;

import com.codesquad.issue.dto.IssueOverviewDTO;
import com.codesquad.issue.dto.LabelDTO;
import com.codesquad.issue.dto.UserDTO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Repository
@Slf4j
public class IssueDAO {
    private JdbcTemplate jdbcTemplate;
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    public IssueDAO(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
        this.namedParameterJdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
    }

    public List<IssueOverviewDTO> getIssuesWithFilter(String is_open, String assignee, String label, String author, String milestone) {
        String sql = "SELECT i.issue_id, i.title, i.is_open, i.created_at, w.name AS writer, m.title AS milestone " +
                    "FROM issue i " +
                    "LEFT JOIN " +
                            "(SELECT il.issue, l.title " +
                            "FROM issue_label il " +
                            "JOIN label l " +
                            "ON il.label = l.label_id) AS la " +
                    "ON i.issue_id = la.issue " +
                    "LEFT JOIN " +
                            "(SELECT a.issue, u.name " +
                            "FROM assignee a " +
                            "JOIN user u " +
                            "ON a.user = u.user_id) AS au " +
                    "ON i.issue_id = au.issue " +
                    "LEFT JOIN milestone m " +
                    "ON i.milestone = m.milestone_id " +
                    "LEFT JOIN user w " +
                    "ON i.writer = w.user_id " +
                    "WHERE " +
                        "CASE " +
                            "WHEN :is_open = 'true' " +
                                "THEN i.is_open = true " +
                            "WHEN :is_open = 'false' " +
                                "THEN i.is_open = false " +
                            "ELSE (i.is_open = true) OR (i.is_open = false) END " +
                    "AND IF(:assignee = '', (au.name LIKE '%%') OR (au.name is null), au.name = :assignee) " +
                    "AND IF(:label = '', (la.title LIKE '%%') OR (la.title is null), la.title = :label) " +
                    "AND IF(:author = '', (w.name LIKE '%%') OR (w.name is null), w.name = :author) " +
                    "AND IF(:milestone = '', (m.title LIKE '%%') OR (m.title is null), m.title = :milestone) " +
                    "GROUP BY i.issue_id " +
                    "ORDER BY i.issue_id";

        SqlParameterSource sqlParameterSource = new MapSqlParameterSource("is_open", is_open)
                                                                .addValue("author", author)
                                                                .addValue("label", label)
                                                                .addValue("assignee", assignee)
                                                                .addValue("milestone", milestone);


        return namedParameterJdbcTemplate.query(sql, sqlParameterSource, new RowMapper<IssueOverviewDTO>() {
            @Override
            public IssueOverviewDTO mapRow(ResultSet rs, int rowNum) throws SQLException {
                return IssueOverviewDTO.builder()
                                        .issueId(rs.getInt("issue_id"))
                                        .title(rs.getString("title"))
                                        .isOpen(rs.getBoolean("is_open"))
                                        .created(rs.getTimestamp("created_at").toLocalDateTime().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")))
                                        .writer(rs.getString("writer"))
                                        .milestone(rs.getString("milestone"))
                                        .labels(getLabels(rs.getInt("issue_id")))
                                        .assignees(getAssignees(rs.getInt("issue_id")))
                                        .build();
            }
        });
    }

    public List<LabelDTO> getLabels(Integer issue_id) {
        String sql = "SELECT l.label_id, title, background_color, text_color, description " +
                    "FROM issue_label il " +
                    "JOIN label l " +
                    "ON il.label = l.label_id " +
                    "WHERE il.issue = :issue_id";
        SqlParameterSource sqlParameterSource = new MapSqlParameterSource("issue_id", issue_id);
        return namedParameterJdbcTemplate.query(sql, sqlParameterSource, new RowMapper<LabelDTO>() {
            @Override
            public LabelDTO mapRow(ResultSet rs, int rowNum) throws SQLException {
                return LabelDTO.builder()
                        .labelId(rs.getInt("label_id"))
                        .title(rs.getString("title"))
                        .background(rs.getString("background_color"))
                        .text(rs.getString("text_color"))
                        .description(rs.getString("description"))
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

    public int getLabelCount() {
        return jdbcTemplate.queryForObject("SELECT count(label_id) FROM label", Integer.class);
    }

    public int getMilestoneCount() {
        return jdbcTemplate.queryForObject("SELECT count(milestone_id) FROM milestone", Integer.class);
    }

    public int getIssueCount() {
        return jdbcTemplate.queryForObject("SELECT count(issue_id) FROM issue", Integer.class);
    }

}