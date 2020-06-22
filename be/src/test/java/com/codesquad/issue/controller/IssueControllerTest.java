package com.codesquad.issue.controller;

import com.codesquad.issue.dto.IssueOverviewDTO;
import com.codesquad.issue.dto.IssueOverviewListDTO;
import com.codesquad.issue.dto.LabelDTO;
import com.codesquad.issue.dto.UserDTO;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.ResponseEntity;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import static org.hamcrest.CoreMatchers.is;
import static org.mockito.Mockito.when;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.operation.preprocess.Preprocessors.*;
import static org.springframework.restdocs.request.RequestDocumentation.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(IssueController.class)
@AutoConfigureRestDocs
class IssueControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private IssueController issueController;

    @Test
    @DisplayName("이슈 DTO 리스트를 반환한다.")
    void getIssueList() throws Exception {

        List<LabelDTO> labels = Arrays.asList(
                LabelDTO.builder().labelId(1).title("BE").background("#fcb27e").text("#ffffff").description("백엔드").build()
        );

        List<UserDTO> assignees = Arrays.asList(
            UserDTO.builder().userId(1L).name("lynn").profileImage("https://avatars0.githubusercontent.com/u/58145890?v=4").build(),
            UserDTO.builder().userId(2L).name("ari").profileImage("").build(),
            UserDTO.builder().userId(3L).name("joy").profileImage("").build()
        );

        List<IssueOverviewDTO> issueOverviewDTOS = Arrays.asList(
                IssueOverviewDTO.builder().issueId(1).title("제목1").isOpen(true).assignees(assignees).created("2020-06-08").labels(labels).milestone("[BE]").writer("lynn").build(),
                IssueOverviewDTO.builder().issueId(2).title("제목2").isOpen(true).assignees(Collections.EMPTY_LIST).created("2020-06-09").labels(Collections.EMPTY_LIST).milestone(null).writer("ari").build(),
                IssueOverviewDTO.builder().issueId(3).title("제목3").isOpen(false).assignees(Collections.EMPTY_LIST).created("2020-06-10").labels(Collections.EMPTY_LIST).milestone(null).writer("joy").build()
        );

        IssueOverviewListDTO issueOverviewListDTO = IssueOverviewListDTO.builder()
                                                                        .numberOfIssue(1)
                                                                        .numberOfLabel(2)
                                                                        .numberOfMilestone(3)
                                                                        .overviews(issueOverviewDTOS).build();

        MultiValueMap<String, String> requestParams = new LinkedMultiValueMap<>();
        requestParams.add("is_open", "");
        requestParams.add("assignee", "");
        requestParams.add("label", "");
        requestParams.add("author", "");
        requestParams.add("milestone", "");

        when(issueController.getIssues("", "", "", "", "")).thenReturn(ResponseEntity.ok().body(issueOverviewListDTO));

        mockMvc.perform(get("/api/issues")
                        .params(requestParams))
                .andExpect(status().isOk())
                .andExpect(jsonPath("number_of_label", is(2)))
                .andExpect(jsonPath("overviews[0].milestone", is("[BE]")))
                .andExpect(jsonPath("overviews[0].issue_id", is(1)))
                .andExpect(jsonPath("overviews[0].title", is("제목1")))
                .andExpect(jsonPath("overviews[0].is_open", is(true)))
                .andExpect(jsonPath("overviews[0].assignees[0].user_id", is(1)))
                .andExpect(jsonPath("overviews[0].assignees[0].name", is("lynn")))
                .andExpect(jsonPath("overviews[0].labels[0].background", is("#fcb27e")))
                .andDo(document(
                        "{class-name}/{method-name}",
                        preprocessRequest(modifyUris().host("13.209.210.21").port(8080),prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        requestParameters(
                                parameterWithName("is_open").description("open 여부"),
                                parameterWithName("assignee").description("assignee 이름"),
                                parameterWithName("label").description("label 이름"),
                                parameterWithName("author").description("author 이름"),
                                parameterWithName("milestone").description("milestone 이름")
                        )
                ));
    }

}
