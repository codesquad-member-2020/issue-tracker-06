package com.codesquad.issue.domain;

import lombok.*;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class User {

    private Integer userId;
    private String name;
    private String password;
    private String profileImage = "";

}
