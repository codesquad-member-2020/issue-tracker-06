package com.codesquad.issue.domain;

import org.springframework.stereotype.Component;

@Component
public class JwtProperties {
    public static final String TOKEN_PREFIX = "Bearer ";
    public static final String HEADER_STRING = "Authorization";
}
