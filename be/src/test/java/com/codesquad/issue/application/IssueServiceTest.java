package com.codesquad.issue.application;

import com.codesquad.issue.domain.IssueDAO;
import com.codesquad.issue.domain.LabelDAO;
import com.codesquad.issue.domain.MilestoneDAO;
import com.codesquad.issue.domain.UserDAO;
import com.codesquad.issue.dto.*;
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
    private LabelDAO labelDAO;

    @Autowired
    private MilestoneDAO milestoneDAO;

    @Autowired
    private UserDAO userDAO;

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
        List<LabelDTO> labels = labelDAO.getLabels(1);
        assertThat(labels).hasSize(2);
    }

    @Test
    @DisplayName("모든 라벨을 가져온다.")
    void getAllLabel() {
        List<LabelDTO> labels = labelDAO.getAllLabel();

        assertThat(labels).hasSize(5);
        assertThat(labels.get(0).getTitle()).isEqualTo("BE");
    }

    @Test
    @Transactional
    @DisplayName("assignee 리스트를 가져온다.")
    void getAssignees() {
        List<UserDTO> assignees = userDAO.getAssignees(2);
        assertThat(assignees).hasSize(3);
    }

    @Test
    @Transactional
    @DisplayName("라벨 개수를 가져온다.")
    void getLabelCount() {
        int label = labelDAO.getLabelCount();
        assertThat(label).isEqualTo(5);
    }

    @Test
    @Transactional
    @DisplayName("마일스톤 개수를 가져온다.")
    void getMilestoneCount() {
        int milestone = milestoneDAO.getMilestoneCount();
        assertThat(milestone).isEqualTo(3);
    }

    @Test
    @DisplayName("모든 마일스톤을 가져온다.")
    void getAllMilestone() {
        List<MilestoneDTO> milestones = milestoneDAO.getAllMilestone();

        assertThat(milestones).hasSize(3);
        assertThat(milestones.get(0).getTitle()).isEqualTo("[BE] 1주차");
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
        assertThat(issueOverviewListDTO.getAuthor()).hasSize(4);
        assertThat(issueOverviewListDTO.getAssignee()).hasSize(4);
        assertThat(issueOverviewListDTO.getLabel()).hasSize(5);
        assertThat(issueOverviewListDTO.getMilestones()).hasSize(3);
        assertThat(issueOverviewListDTO.getOverviews()).hasSize(7);
    }

}
