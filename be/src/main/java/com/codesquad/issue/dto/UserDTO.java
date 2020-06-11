package com.codesquad.issue.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;


@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {

    private Long id;
    private String name;

    @JsonProperty(value = "profile_image")
    private String profileImage;

}
