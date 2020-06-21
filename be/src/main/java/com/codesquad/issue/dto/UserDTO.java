package com.codesquad.issue.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;


@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class UserDTO {

    @JsonProperty(value = "user_id")
    private Long userId;

    private String name;

    @JsonProperty(value = "profile_image")
    private String profileImage;

}
