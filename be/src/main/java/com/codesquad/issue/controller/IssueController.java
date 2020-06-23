package com.codesquad.issue.controller;

import com.codesquad.issue.application.IssueService;
import com.codesquad.issue.domain.RequestIssue;
import com.codesquad.issue.dto.IssueDetailDTO;
import com.codesquad.issue.dto.IssueOverviewListDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/issues")
public class IssueController {

    private IssueService issueService;

    public IssueController(IssueService issueService) {
        this.issueService = issueService;
    }

    @GetMapping
    public ResponseEntity<IssueOverviewListDTO> getIssues(@RequestParam(required = false, name = "is_open", defaultValue = "")String isOpen,
                                                          @RequestParam(required = false, name = "assignee", defaultValue = "")String assignee,
                                                          @RequestParam(required = false, name = "label", defaultValue = "")String label,
                                                          @RequestParam(required = false, name = "author", defaultValue = "")String author,
                                                          @RequestParam(required = false, name = "milestone", defaultValue = "") String milestone) {
        return ResponseEntity.ok().body(issueService.getIssueOverviewListDTO(isOpen, assignee, label, author, milestone));
    }

    @PostMapping
    public  ResponseEntity<String> addIssue(@RequestBody RequestIssue issue) {
        issueService.addIssue(issue);
        return ResponseEntity.ok().body("성공");
    }

    @GetMapping("/{id}")
    public ResponseEntity<IssueDetailDTO> getIssueDetail(@PathVariable Integer id) {
        return ResponseEntity.ok(issueService.getIssueDetail(id));
    }

}
