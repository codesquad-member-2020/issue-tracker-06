package com.codesquad.issue.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class LabelDTO {

    @JsonProperty(value = "label_id")
    private Integer labelId;

    private String title;

    private String background;

    private String text;

    private String description;
}
