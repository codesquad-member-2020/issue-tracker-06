package com.codesquad.issue.controller;

import com.codesquad.issue.domain.JwtProperties;
import com.codesquad.issue.dto.LabelDTO;
import com.codesquad.issue.dto.MilestoneDTO;
import com.codesquad.issue.dto.UserDTO;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.ResponseEntity;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.operation.preprocess.Preprocessors.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@WebMvcTest(FilterController.class)
@AutoConfigureRestDocs
@DisplayName("필터 컨트롤러 테스트")
class FilterControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private FilterController filterController;

    @Test
    @DisplayName("라벨 리스트 반환")
    void getAllLabels() throws Exception {
        List<LabelDTO> allLabel = Arrays.asList(
                LabelDTO.builder().labelId(1).title("BE").background("#fcb27e").text("#ffffff").description("백엔드").build(),
                LabelDTO.builder().labelId(1).title("FE").background("#0a2f6b").text("#ffffff").description("프론트엔드").build(),
                LabelDTO.builder().labelId(1).title("scrum").background("#68ff36").text("#ffffff").description("스크럼").build()
        );

        when(filterController.getLabels()).thenReturn(ResponseEntity.ok(allLabel));

        mockMvc.perform(get("/api/labels").header(JwtProperties.HEADER_STRING, JwtProperties.TOKEN_PREFIX + "jwtToken"))
                .andExpect(status().isOk())
                .andDo(document(
                        "{class-name}/{method-name}",
                        preprocessRequest(modifyUris().host("13.209.210.21").port(8080),prettyPrint()),
                        preprocessResponse(prettyPrint())
                ));
    }

    @Test
    @DisplayName("마일스톤 리스트 반환")
    void getAllMilestone() throws Exception {
        List<MilestoneDTO> milestones = Arrays.asList(
                MilestoneDTO.builder().milestoneId(1).title("[BE] 1주차").description("1주차").due_by("2020-06-05").build(),
                MilestoneDTO.builder().milestoneId(2).title("[BE] 2주차").description("2주차").due_by("2020-06-12").build(),
                MilestoneDTO.builder().milestoneId(3).title("[FE] 1주차").description("1주차").due_by("2020-06-06").build()
        );

        when(filterController.getMilestones()).thenReturn(ResponseEntity.ok(milestones));

        mockMvc.perform(get("/api/milestones").header(JwtProperties.HEADER_STRING, JwtProperties.TOKEN_PREFIX + "jwtToken"))
                .andExpect(status().isOk())
                .andDo(document(
                        "{class-name}/{method-name}",
                        preprocessRequest(modifyUris().host("13.209.210.21").port(8080),prettyPrint()),
                        preprocessResponse(prettyPrint())
                ));
    }

    @Test
    @DisplayName("유저 리스트 반환")
    void getAllUser() throws Exception {
        List<UserDTO> users = Arrays.asList(
                UserDTO.builder().userId(1L).name("lynn").profileImage("https://avatars0.githubusercontent.com/u/58145890?v=4").build(),
                UserDTO.builder().userId(2L).name("ari").profileImage("https://avatars0.githubusercontent.com/u/58145890?v=4").build(),
                UserDTO.builder().userId(3L).name("joy").profileImage("https://avatars0.githubusercontent.com/u/58145890?v=4").build()
        );

        when(filterController.getUsers()).thenReturn(ResponseEntity.ok(users));

        mockMvc.perform(get("/api/users").header(JwtProperties.HEADER_STRING, JwtProperties.TOKEN_PREFIX + "jwtToken"))
                .andExpect(status().isOk())
                .andDo(document(
                        "{class-name}/{method-name}",
                        preprocessRequest(modifyUris().host("13.209.210.21").port(8080),prettyPrint()),
                        preprocessResponse(prettyPrint())
                ));
    }

}
