package com.codesquad.issue.application;

import com.codesquad.issue.domain.IssueDAO;
import com.codesquad.issue.dto.IssueOverviewDTO;
import com.codesquad.issue.dto.IssueOverviewListDTO;
import com.codesquad.issue.dto.LabelDTO;
import com.codesquad.issue.dto.UserDTO;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@DisplayName("이슈 서비스 테스트")
class IssueServiceTest {

    @Autowired
    private IssueDAO issueDAO;

    @Autowired
    private IssueService issueService;

    @Test
    @Transactional
    @DisplayName("필터를 적용하여 이슈 리스트를 가져온다")
    void getIssuesWithFilter() {
        List<IssueOverviewDTO> issueOverviewDTOS = issueDAO.getIssuesWithFilter("", "", "", "", "");

        assertThat(issueOverviewDTOS).hasSize(7);
        assertThat(issueOverviewDTOS.get(0).getLabels()).hasSize(2);
    }

    @Test
    @Transactional
    @DisplayName("라벨 리스트를 가져온다.")
    void getLabels() {
        List<LabelDTO> labels = issueDAO.getLabels(1);
        assertThat(labels).hasSize(2);
    }

    @Test
    @Transactional
    @DisplayName("assignee 리스트를 가져온다.")
    void getAssignees() {
        List<UserDTO> assignees = issueDAO.getAssignees(2);
        assertThat(assignees).hasSize(3);
    }

    @Test
    @Transactional
    @DisplayName("라벨 개수를 가져온다.")
    void getLabelCount() {
        int label = issueDAO.getLabelCount();
        assertThat(label).isEqualTo(5);
    }

    @Test
    @Transactional
    @DisplayName("마일스톤 개수를 가져온다.")
    void getMilestoneCount() {
        int milestone = issueDAO.getMilestoneCount();
        assertThat(milestone).isEqualTo(3);
    }

    @Test
    @Transactional
    @DisplayName("이슈 개수를 가져온다.")
    void getIssueCount() {
        int issue = issueDAO.getIssueCount();
        assertThat(issue).isEqualTo(7);
    }

    @Test
    @Transactional
    @DisplayName("이슈 DTO 리스트를 가져온다.")
    void getIssueDTOList() {
        IssueOverviewListDTO issueOverviewListDTO = issueService.getIssueOverviewListDTO("", "", "", "", "");
        assertThat(issueOverviewListDTO.getNumberOfLabel()).isEqualTo(5);
        assertThat(issueOverviewListDTO.getNumberOfIssue()).isEqualTo(7);
        assertThat(issueOverviewListDTO.getNumberOfMilestone()).isEqualTo(3);
        assertThat(issueOverviewListDTO.getOverviews()).hasSize(7);
    }

}
