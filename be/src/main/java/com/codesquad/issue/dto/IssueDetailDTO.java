package com.codesquad.issue.dto;

import lombok.*;

import java.util.List;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class IssueDetailDTO {

    private Integer issueId;

    private String title;

    private String content;

    private boolean isOpen;

    private UserDTO writer;

    private String createdAt;

    private int numberOfComment;

    private List<UserDTO> assignees;

    private List<LabelDTO> labels;

    private MilestoneDTO milestone;

    private List<CommentDTO> comments;

}
