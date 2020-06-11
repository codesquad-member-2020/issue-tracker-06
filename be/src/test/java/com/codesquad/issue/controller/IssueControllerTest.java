package com.codesquad.issue.controller;

import com.codesquad.issue.dto.UserDTO;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Description;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;
import java.util.List;

import static org.hamcrest.CoreMatchers.is;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.operation.preprocess.Preprocessors.*;
import static org.springframework.restdocs.payload.PayloadDocumentation.*;
import static org.springframework.restdocs.request.RequestDocumentation.parameterWithName;
import static org.springframework.restdocs.request.RequestDocumentation.pathParameters;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(IssueController.class)
@AutoConfigureRestDocs
class IssueControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private IssueController issueController;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    @Description("모든 회원 가져오기")
    void getAllUser() throws Exception {
        List<UserDTO> userDTOS = Arrays.asList(
                new UserDTO(1L, "ari", "11"),
                new UserDTO(2L, "joy", "22"),
                new UserDTO(3L, "lynn", "33")
        );

        when(issueController.getAllUser()).thenReturn(ResponseEntity.ok(userDTOS));

        mockMvc.perform(get("/api/issue"))
                .andExpect(status().isOk())
                .andDo(document("{class-name}/{method-name}",
                        preprocessRequest(modifyUris()
                                .host("13.209.210.21")
                                .port(8080),
                                prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        responseFields(
                                fieldWithPath("[].id").description("회원의 id").type(Long.class),
                                fieldWithPath("[].name").description("Member's name"),
                                fieldWithPath("[].profile_image").description("Member's age")
                        )
                ));
    }

    @Test
    @Description("회원 하나 가져오기")
    void getUser() throws Exception {
        UserDTO userDTO = UserDTO.builder().id(1L)
                .name("TEST")
                .profileImage("1234")
                .build();

        when(issueController.getUser(any())).thenReturn(ResponseEntity.status(HttpStatus.OK).body(userDTO));

        mockMvc.perform(RestDocumentationRequestBuilders.get("/api/issue/{id}", userDTO.getId()))
                .andExpect(status().isOk())
                .andDo(document("{class-name}/{method-name}",
                        preprocessRequest(modifyUris()
                                        .host("13.209.210.21")
                                        .port(8080),
                                prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("id").description("회원 id")
                        ),
                        responseFields(
                                fieldWithPath("id").description("회원 id").type(Long.class),
                                fieldWithPath("name").description("회원 이름"),
                                fieldWithPath("profile_image").description("회원 이미지")
                        )
                ));
    }

    @Test
    @Description("회원 등록")
    void addUser() throws Exception {
        UserDTO newUserDTO = UserDTO.builder().id(1L)
                .name("lynn")
                .profileImage("image")
                .build();

        when(issueController.addUser(any())).thenReturn(ResponseEntity.ok().body(newUserDTO));

        mockMvc.perform(post("/api/issue")
                    .content(objectMapper.writeValueAsString(newUserDTO))
                    .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content().json("{\"id\": 1, \"name\": \"lynn\"}"))
                .andExpect(content().json("{\"id\": 1, \"name\": \"lynn\", \"profile_image\": \"image\"}"))
                .andExpect(jsonPath("$.name", is("lynn")))
                .andDo(document(
                        "{class-name}/{method-name}",
                        preprocessRequest(modifyUris()
                                        .host("13.209.210.21")
                                        .port(8080),
                                prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        responseFields(
                                fieldWithPath("id").description("회원 id").type(Long.class),
                                fieldWithPath("name").description("회원 이름"),
                                fieldWithPath("profile_image").description("회원 이미지")
                        ),
                        requestFields(
                                fieldWithPath("id").description("회원 id").type(Long.class),
                                fieldWithPath("name").description("회원 이름"),
                                fieldWithPath("profile_image").description("회원 이미지")
                        )
                ));
    }

}
