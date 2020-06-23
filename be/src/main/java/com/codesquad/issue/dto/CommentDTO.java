package com.codesquad.issue.dto;

import lombok.*;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class CommentDTO {

    private Integer commentId;

    private String content;

    private String createdAt;

    private UserDTO writer;

}
