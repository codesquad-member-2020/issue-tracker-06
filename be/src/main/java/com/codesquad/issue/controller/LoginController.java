package com.codesquad.issue.controller;

import com.codesquad.issue.domain.GithubProperties;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
@RequestMapping("/api/login")
public class LoginController {

    @GetMapping
    public void getLogin(HttpServletResponse response) throws IOException {
        String url = GithubProperties.GITHUB_LOGIN_URL
                + GithubProperties.CLIENT_ID
                + GithubProperties.REDIRECT_TO
                + GithubProperties.REDIRECT_URL;
        response.sendRedirect(url);
    }

}
