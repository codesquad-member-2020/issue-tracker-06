package com.codesquad.issue.controller;

import com.codesquad.issue.application.FilterService;
import com.codesquad.issue.dto.LabelDTO;
import com.codesquad.issue.dto.MilestoneDTO;
import com.codesquad.issue.dto.UserDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class FilterController {

    private FilterService filterService;

    public FilterController(FilterService filterService) {
        this.filterService = filterService;
    }

    @GetMapping("/labels")
    public ResponseEntity<List<LabelDTO>> getLabels() {
        return ResponseEntity.ok().body(filterService.getLabels());
    }

    @GetMapping("/milestones")
    public ResponseEntity<List<MilestoneDTO>> getMilestones() {
        return ResponseEntity.ok().body(filterService.getMilestones());
    }

    @GetMapping("/users")
    public ResponseEntity<List<UserDTO>> getUsers() {
        return ResponseEntity.ok().body(filterService.getUsers());
    }
}
