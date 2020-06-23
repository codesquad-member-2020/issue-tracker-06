package com.codesquad.issue.application;

import com.codesquad.issue.domain.GithubProperties;
import com.codesquad.issue.domain.JwtProperties;
import com.codesquad.issue.domain.User;
import com.codesquad.issue.domain.UserDAO;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

@Service
public class LoginService {

    private UserDAO userDAO;

    private ObjectMapper objectMapper;

    public LoginService(UserDAO userDAO, ObjectMapper objectMapper) {
        this.userDAO = userDAO;
        this.objectMapper = objectMapper;
    }

    public String getAccessToken(String code) throws JsonProcessingException {
        MultiValueMap<String ,String> headers = new LinkedMultiValueMap<>();
        headers.add("Accept", "application/json");

        MultiValueMap<String, String> requestPayloads = new LinkedMultiValueMap<>();
        requestPayloads.add("client_id", GithubProperties.CLIENT_ID);
        requestPayloads.add("client_secret", GithubProperties.CLIENT_SECRETE);
        requestPayloads.add("code", code);

        HttpEntity<?> request = new HttpEntity<>(requestPayloads, headers);
        String response = new RestTemplate().postForObject(GithubProperties.GITHUB_ACCESS_TOKEN_URL, request, String.class);

        JsonNode node = objectMapper.readTree(response);
        return node.get("access_token").asText();
    }

    public User getUserInfo(String accessToken) throws JsonProcessingException {
        HttpHeaders headers = new HttpHeaders();
        headers.set(JwtProperties.HEADER_STRING, "token " + accessToken);

        HttpEntity<?> request = new HttpEntity<>(headers);
        ResponseEntity<String> response  = new RestTemplate().exchange(GithubProperties.GITHUB_USER_INFO_URL, HttpMethod.GET, request, String.class);

        JsonNode node = objectMapper.readTree(response.getBody());
        return User.builder()
                .name(node.get("login").asText())
                .profileImage(node.get("avatar_url").asText())
                .build();
    }

    public void addUser(User user) {
        userDAO.addUser(user);
    }

    public String getUserId(String name) {
        return userDAO.getUserIdWithName(name).toString();
    }
}
