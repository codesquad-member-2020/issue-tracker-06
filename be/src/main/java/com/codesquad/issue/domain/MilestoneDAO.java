package com.codesquad.issue.domain;

import com.codesquad.issue.dto.MilestoneDTO;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Repository
public class MilestoneDAO {

    private JdbcTemplate jdbcTemplate;

    public MilestoneDAO(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }


    public List<MilestoneDTO> getAllMilestone() {
        String sql = "SELECT milestone_id, title, description, due_by FROM milestone";
        return jdbcTemplate.query(sql, new RowMapper<MilestoneDTO>() {
            @Override
            public MilestoneDTO mapRow(ResultSet rs, int rowNum) throws SQLException {
                return MilestoneDTO.builder()
                        .milestoneId(rs.getInt("milestone_id"))
                        .title(rs.getString("title"))
                        .description(rs.getString("description"))
                        .due_by(rs.getTimestamp("due_by").toLocalDateTime().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")))
                        .build();
            }
        });
    }

    public int getMilestoneCount() {
        return jdbcTemplate.queryForObject("SELECT count(milestone_id) FROM milestone", Integer.class);
    }
}
