package com.targetclone.authentication.controller;

import com.targetclone.authentication.dto.LoginRequest;
import com.targetclone.authentication.service.AuthenticationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    // Constructor injection for AuthenticationService
    public AuthenticationController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }


    @PostMapping("/login")
    public ResponseEntity<String> authenticate(@RequestBody LoginRequest loginRequest) {
        String token = authenticationService.authenticateUser(loginRequest);
        return ResponseEntity.ok(token);  // Return JWT token as response
    }

    // Add other API endpoints for registration, logout, etc.
}
