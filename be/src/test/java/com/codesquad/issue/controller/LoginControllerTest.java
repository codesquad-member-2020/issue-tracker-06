package com.codesquad.issue.controller;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mock.web.MockHttpSession;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import javax.servlet.http.Cookie;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.operation.preprocess.Preprocessors.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(LoginController.class)
@AutoConfigureRestDocs
class LoginControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private LoginController loginController;

    @Test
    @DisplayName("깃헙 로그인 페이지로 리다이렉트")
    void redirectToGithub() throws Exception {
        when(loginController.getLogin(any())).thenReturn(ResponseEntity.status(HttpStatus.TEMPORARY_REDIRECT).body("redirect to github login"));

        mockMvc.perform(get("/api/login"))
                .andExpect(status().is3xxRedirection())
                .andDo(document(
                        "{class-name}/{method-name}",
                        preprocessRequest(modifyUris().host("13.209.210.21").port(8080), prettyPrint()),
                        preprocessResponse(prettyPrint())
                ));
    }

}
