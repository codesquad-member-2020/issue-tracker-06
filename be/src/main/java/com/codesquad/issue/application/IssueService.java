package com.codesquad.issue.application;

import com.codesquad.issue.domain.IssueDAO;
import com.codesquad.issue.domain.LabelDAO;
import com.codesquad.issue.domain.MilestoneDAO;
import com.codesquad.issue.domain.UserDAO;
import com.codesquad.issue.dto.IssueOverviewListDTO;
import com.codesquad.issue.dto.UserDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
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
}
