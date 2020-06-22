package com.codesquad.issue.domain;

import org.springframework.stereotype.Component;

@Component
public class GithubProperties {
    public static final String CLIENT_ID = "9cc7a6b64f872660d2fd";
    public static final String REDIRECT_URL = "http://localhost:8080/api/login/github";
    public static final String LOGIN_URL = "https://github.com/login/oauth/authorize?client_id=";
    public static final String REDIRECT_TO = "&redirect_uri=";
    public static final String REDIRECT_TO_MAIN = "http://localhost:8080/api/issues";
}
