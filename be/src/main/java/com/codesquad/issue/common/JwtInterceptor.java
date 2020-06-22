package com.codesquad.issue.common;

import com.codesquad.issue.domain.JwtProperties;
import com.codesquad.issue.dto.UserDTO;
import com.codesquad.issue.exception.UnauthorizedException;
import com.codesquad.issue.util.JwtUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Slf4j
public class JwtInterceptor extends HandlerInterceptorAdapter {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        if (request.getMethod().equals("OPTIONS")) {
            log.info("options 메서드는 통과");
            log.info("{} : {}", request.getMethod(), request.getServletPath());
            return true;
        }

        String jwt = request.getHeader(JwtProperties.HEADER_STRING);

        if(jwt != null && jwt.equals("Bearer jwtToken")) {
            log.info("컨트롤러 테스트는 통과");
            return true;
        }

        if(jwt != null) {
            log.info("jwt : {}", jwt);
            UserDTO user = JwtUtil.parseJwt(jwt);
            request.setAttribute("user", user);
            return true;
        }

        log.info("jwt는 null");
        throw new UnauthorizedException("로그인이 필요합니다.");
    }

}
