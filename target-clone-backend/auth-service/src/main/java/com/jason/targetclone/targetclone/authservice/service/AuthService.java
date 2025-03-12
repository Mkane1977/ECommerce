package com.jason.targetclone.targetclone.authservice.service;


import com.jason.targetclone.targetclone.authservice.dto.AuthRequest;
import com.jason.targetclone.targetclone.authservice.dto.AuthResponse;
import com.jason.targetclone.targetclone.authservice.entity.User;
import com.jason.targetclone.targetclone.authservice.repository.UserRepository;
import com.jason.targetclone.targetclone.authservice.util.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    public AuthResponse login(AuthRequest request) {
        Optional<User> userOptional = userRepository.findByUsername(request.getUsername());

        if (userOptional.isPresent() && passwordEncoder.matches(request.getPassword(), userOptional.get().getPassword())) {
            String token = jwtUtil.generateToken(request.getUsername());
            return new AuthResponse(token);
        } else {
            throw new RuntimeException("Invalid username or password");
        }
    }
}
