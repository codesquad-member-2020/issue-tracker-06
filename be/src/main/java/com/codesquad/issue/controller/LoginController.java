package com.codesquad.issue.controller;

import com.codesquad.issue.application.LoginService;
import com.codesquad.issue.domain.GithubProperties;
import com.codesquad.issue.domain.User;
import com.codesquad.issue.util.JwtUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;

@RestController
@Slf4j
@RequestMapping("/api/login")
public class LoginController {

    private LoginService loginService;

    public LoginController(LoginService loginService) {
        this.loginService = loginService;
    }

    @GetMapping
    public void getLogin(HttpServletResponse response) throws IOException {
        String url = GithubProperties.GITHUB_LOGIN_URL
                + GithubProperties.CLIENT_ID
                + GithubProperties.REDIRECT_TO
                + GithubProperties.REDIRECT_URL;
        response.sendRedirect(url);
    }

    @GetMapping("/github")
    public ResponseEntity<String> getLoginWithCode(HttpServletResponse response, @RequestParam String code) throws IOException {
        String accessToken = loginService.getAccessToken(code);
        User user = loginService.getUserInfo(accessToken);

        loginService.addUser(user);
        String jwt = JwtUtil.buildJwtToken(user);
        log.info("jwt : {}", jwt);

        List<Cookie> cookies = Arrays.asList(
                new Cookie("jwt", jwt),
                new Cookie("id", user.getName()),
                new Cookie("profile", user.getProfileImage())
        );

        for (Cookie cookie: cookies) {
            cookie.setPath("/");
            response.addCookie(cookie);
        }
        response.sendRedirect(GithubProperties.REDIRECT_TO_ISSUES);
        return ResponseEntity.status(HttpStatus.TEMPORARY_REDIRECT).body("redirect to main");
    }

}

