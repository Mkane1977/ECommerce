package com.targetclone.authentication.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.targetclone.authentication.model.User;
import com.targetclone.authentication.repository.AuthenticationRepository;
import com.targetclone.authentication.dto.LoginRequest;
import com.targetclone.authentication.dto.RegisterRequest;
import com.targetclone.authentication.util.JwtUtil;  // Import JwtUtil
import com.targetclone.authentication.exception.AuthenticationException; // For custom exceptions

@Service
public class AuthenticationService {

    private final AuthenticationRepository authenticationRepository;

    @Autowired
    private JwtUtil jwtUtil;  // Inject JwtUtil

    public AuthenticationService(AuthenticationRepository authenticationRepository) {
        this.authenticationRepository = authenticationRepository;
    }

    // User registration method (this is already present in your code)
    public User registerUser(RegisterRequest registerRequest) {
        User user = new User();
        user.setUsername(registerRequest.getUsername());
        user.setPassword(registerRequest.getPassword()); // Remember to hash the password in production!
        return authenticationRepository.save(user);
    }

    // User authentication method
    public String authenticateUser(LoginRequest loginRequest) throws AuthenticationException {
        // Find the user by username
        User user = authenticationRepository.findByUsername(loginRequest.getUsername());

        // Check if user exists and password is correct
        if (user != null && user.getPassword().equals(loginRequest.getPassword())) {
            // Generate JWT token if authentication is successful
            return jwtUtil.generateToken(user.getUsername());  // Return the JWT token
        }

        // Throw an exception if authentication fails
        throw new AuthenticationException("Invalid username or password");
    }
}
