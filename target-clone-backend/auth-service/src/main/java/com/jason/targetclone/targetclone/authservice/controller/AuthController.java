package com.jason.targetclone.targetclone.authservice.controller;


import com.jason.targetclone.targetclone.authservice.dto.AuthRequest;
import com.jason.targetclone.targetclone.authservice.dto.AuthResponse;
import com.jason.targetclone.targetclone.authservice.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody AuthRequest request) {
        return ResponseEntity.ok(authService.login(request));
    }
}
