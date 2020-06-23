package com.codesquad.issue.application;

import com.codesquad.issue.domain.LabelDAO;
import com.codesquad.issue.domain.MilestoneDAO;
import com.codesquad.issue.domain.UserDAO;
import com.codesquad.issue.dto.LabelDTO;
import com.codesquad.issue.dto.MilestoneDTO;
import com.codesquad.issue.dto.UserDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FilterService {

    private LabelDAO labelDAO;

    private MilestoneDAO milestoneDAO;

    private UserDAO userDAO;

    public FilterService(LabelDAO labelDAO, MilestoneDAO milestoneDAO, UserDAO userDAO) {
        this.labelDAO = labelDAO;
        this.milestoneDAO = milestoneDAO;
        this.userDAO = userDAO;
    }

    public List<LabelDTO> getLabels() {
        return labelDAO.getAllLabel();
    }

    public List<MilestoneDTO> getMilestones() {
        return milestoneDAO.getAllMilestone();
    }

    public List<UserDTO> getUsers() {
        return userDAO.getAllUser();
    }
}
