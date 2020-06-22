package com.codesquad.issue.util;

import com.codesquad.issue.domain.JwtProperties;
import com.codesquad.issue.domain.User;
import com.codesquad.issue.dto.UserDTO;
import com.codesquad.issue.exception.UnauthorizedException;
import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import lombok.extern.slf4j.Slf4j;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Slf4j
public class JwtUtil {

    private static SecretKey key = Keys.secretKeyFor(SignatureAlgorithm.HS256);

    public static String buildJwtToken(User user) {
        Map<String, Object> headers = new HashMap<>();
        headers.put("typ", "JWT");
        headers.put("alg", "HS256");

        Map<String, Object> payloads = new HashMap<>();
        payloads.put("exp", new Date(System.currentTimeMillis() + (1000 * 60 * 3000)));
        payloads.put("user_name", user.getName());
        payloads.put("profile_url", user.getProfileImage());

        return Jwts.builder()
                .setHeader(headers)
                .setClaims(payloads)
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();
    }

    public static UserDTO parseJwt(String jwt) {
        jwt = jwt.replace(JwtProperties.TOKEN_PREFIX, "");

        try {
            Claims claims = Jwts.parserBuilder()
                    .setSigningKey(key)
                    .build()
                    .parseClaimsJws(jwt)
                    .getBody();

            log.info("name : {}", claims.get("user_name", String.class));

            return UserDTO.builder()
                    .name(claims.get("user_name", String.class))
                    .profileImage(claims.get("profile_url", String.class))
                    .build();
        } catch (ExpiredJwtException e) {
            log.info("토큰 만료");
            throw new UnauthorizedException("만료된 토큰입니다.");
        } catch (JwtException e) {
            log.info("유효하지 않은 토큰");
            throw new UnauthorizedException("유효하지 않은 토큰입니다.");
        }
    }
}
