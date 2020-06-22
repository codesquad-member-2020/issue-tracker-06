package com.codesquad.issue.domain;

import com.codesquad.issue.dto.LabelDTO;
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
public class LabelDAO {

    private JdbcTemplate jdbcTemplate;

    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    public LabelDAO(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
        this.namedParameterJdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
    }

    public List<LabelDTO> getAllLabel() {
        String sql = "SELECT label_id, title, background_color, text_color, description FROM label";
        return jdbcTemplate.query(sql, new RowMapper<LabelDTO>() {
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

    public int getLabelCount() {
        return jdbcTemplate.queryForObject("SELECT count(label_id) FROM label", Integer.class);
    }

    public void addIssueLabel(Integer labelId, Integer issueId) {
        String sql = "INSERT INTO issue_label (issue, label) VALUES (?, ?)";
        jdbcTemplate.update(sql, issueId, labelId);
    }
}
