package com.codesquad.issue.application;

import com.codesquad.issue.domain.IssueDAO;
import com.codesquad.issue.dto.IssueOverviewListDTO;
import org.springframework.stereotype.Service;

@Service
public class IssueService {

    private IssueDAO issueDAO;

    public IssueService(IssueDAO issueDAO) {
        this.issueDAO = issueDAO;
    }

    public IssueOverviewListDTO getIssueOverviewListDTO(String is_open, String assignee, String label, String author, String milestone) {
        return IssueOverviewListDTO.builder()
                                    .numberOfLabel(issueDAO.getLabelCount())
                                    .numberOfMilestone(issueDAO.getMilestoneCount())
                                    .numberOfIssue(issueDAO.getIssueCount())
                                    .overviews(issueDAO.getIssuesWithFilter(is_open, assignee, label, author, milestone))
                                    .build();
    }
}
