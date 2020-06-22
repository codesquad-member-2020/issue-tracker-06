package com.codesquad.issue.domain;

import com.codesquad.issue.dto.IssueOverviewDTO;
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

    private LabelDAO labelDAO;

    private UserDAO userDAO;

    public IssueDAO(DataSource dataSource, LabelDAO labelDAO, UserDAO userDAO) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
        this.namedParameterJdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
        this.labelDAO = labelDAO;
        this.userDAO = userDAO;
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
                                        .labels(labelDAO.getLabels(rs.getInt("issue_id")))
                                        .assignees(userDAO.getAssignees(rs.getInt("issue_id")))
                                        .build();
            }
        });
    }

    public int getIssueCount() {
        return jdbcTemplate.queryForObject("SELECT count(issue_id) FROM issue", Integer.class);
    }

}
