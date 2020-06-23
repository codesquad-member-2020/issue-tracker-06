package com.codesquad.issue.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class IssueOverviewListDTO {

    @JsonProperty(value = "number_of_label")
    private int numberOfLabel;

    @JsonProperty(value = "number_of_milestone")
    private int numberOfMilestone;

    @JsonProperty(value = "number_of_issue")
    private int numberOfIssue;

    private List<IssueOverviewDTO> overviews = new ArrayList<>();
}
