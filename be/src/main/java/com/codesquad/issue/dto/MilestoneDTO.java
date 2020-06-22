package com.codesquad.issue.dto;

import lombok.*;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class MilestoneDTO {

    private Integer milestoneId;

    private String title;

    private String description;

    private String due_by;

}
