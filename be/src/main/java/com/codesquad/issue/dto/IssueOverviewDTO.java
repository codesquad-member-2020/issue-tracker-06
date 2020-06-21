package com.codesquad.issue.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class IssueOverviewDTO {

    @JsonProperty(value = "issue_id")
    private Integer issueId;

    private String title;

    @JsonProperty(value = "is_open")
    private boolean isOpen;

    private String created;

    private String writer;

    private String milestone;

    private List<LabelDTO> labels = new ArrayList<>();

    private List<UserDTO> assignees = new ArrayList<>();
}
