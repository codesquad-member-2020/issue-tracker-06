package com.codesquad.issue.domain;

import lombok.*;

import java.util.List;
import java.util.UUID;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class RequestIssue {
    private Integer writer;
    private String title;
    private String content;
    private Integer milestone;
    private final String issueUUID = UUID.randomUUID().toString();
    private List<Integer> assignees;
    private List<Integer> labels;
}
