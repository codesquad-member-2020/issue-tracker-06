package com.codesquad.issue.domain;

import org.springframework.stereotype.Component;

@Component
public class GithubProperties {
    public static final String CLIENT_ID = "9cc7a6b64f872660d2fd";
    public static final String CLIENT_SECRETE = "cf999c7f99a15d9775705a0616fc49043c10a892";
    public static final String REDIRECT_URL = "http://13.209.210.21:8080/api/login/github";
    public static final String GITHUB_LOGIN_URL = "https://github.com/login/oauth/authorize?client_id=";
    public static final String GITHUB_ACCESS_TOKEN_URL = "https://github.com/login/oauth/access_token";
    public static final String GITHUB_USER_INFO_URL = "https://api.github.com/user";
    public static final String REDIRECT_TO = "&redirect_uri=";
    public static final String REDIRECT_TO_MAIN = "/api/issues";
}
