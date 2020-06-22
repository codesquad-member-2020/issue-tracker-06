package com.codesquad.issue.application;

import com.codesquad.issue.domain.*;
import com.codesquad.issue.dto.IssueOverviewListDTO;
import com.codesquad.issue.dto.UserDTO;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class IssueService {

    private IssueDAO issueDAO;

    private LabelDAO labelDAO;

    private MilestoneDAO milestoneDAO;

    private UserDAO userDAO;

    public IssueService(IssueDAO issueDAO, LabelDAO labelDAO, MilestoneDAO milestoneDAO, UserDAO userDAO) {
        this.issueDAO = issueDAO;
        this.labelDAO = labelDAO;
        this.milestoneDAO = milestoneDAO;
        this.userDAO = userDAO;
    }

    public IssueOverviewListDTO getIssueOverviewListDTO(String is_open, String assignee, String label, String author, String milestone) {
        List<UserDTO> allUser = userDAO.getAllUser();

        return IssueOverviewListDTO.builder()
                                    .numberOfLabel(labelDAO.getLabelCount())
                                    .numberOfMilestone(milestoneDAO.getMilestoneCount())
                                    .numberOfIssue(issueDAO.getIssueCount())
                                    .author(allUser)
                                    .label(labelDAO.getAllLabel())
                                    .milestones(milestoneDAO.getAllMilestone())
                                    .assignee(allUser)
                                    .overviews(issueDAO.getIssuesWithFilter(is_open, assignee, label, author, milestone))
                                    .build();
    }

    public void addIssue(RequestIssue requestIssue) {
        //유효한 값인지 확인해야 하는거 아닌지
        issueDAO.addIssue(requestIssue);
        Integer issueId = issueDAO.getIssueWithUUID(requestIssue.getIssueUUID());
        addAssignees(requestIssue, issueId);
        addLabels(requestIssue, issueId);
    }

    private void addLabels(RequestIssue requestIssue, Integer issueId) {
        if(requestIssue.getLabels() == null || requestIssue.getLabels().size() == 0) {
            return;
        }

        requestIssue.getLabels()
                .forEach(labelId -> labelDAO.addIssueLabel(labelId, issueId));
    }

    private void addAssignees(RequestIssue requestIssue, Integer issueId) {
        if(requestIssue.getAssignees() == null || requestIssue.getAssignees().size() == 0) {
            return;
        }

        requestIssue.getAssignees()
                .forEach(userId -> userDAO.addAssignees(userId, issueId));
    }
}
