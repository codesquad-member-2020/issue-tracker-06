package com.codesquad.issue.application;

import com.codesquad.issue.domain.UserDAO;
import com.codesquad.issue.dto.UserDTO;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@DisplayName("유저 서비스 테스트")
class UserServiceTest {

    @Autowired
    private UserDAO userDAO;

    @Test
    @Transactional
    @DisplayName("모든 유저를 가져온다")
    void getAllUser() {
        List<UserDTO> users = userDAO.getAllUser();

        assertThat(users).hasSize(4);
        assertThat(users.get(0).getName()).isEqualTo("lynn");
    }

}
