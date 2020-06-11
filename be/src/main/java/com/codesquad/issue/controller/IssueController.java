package com.codesquad.issue.controller;

import com.codesquad.issue.dto.UserDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/issue")
public class IssueController {

    @GetMapping()
    public ResponseEntity<List<UserDTO>> getAllUser() {
        return ResponseEntity.ok(null);
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> getUser(@PathVariable Long id) {
        return ResponseEntity.ok(null);
    }

    @PostMapping("")
    public ResponseEntity<UserDTO> addUser(@RequestBody UserDTO userDTO) {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }

}
