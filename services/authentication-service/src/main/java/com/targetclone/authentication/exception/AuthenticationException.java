package com.targetclone.authentication.exception;

public class AuthenticationException extends RuntimeException {
    public AuthenticationException(String message) {
        super(message);

        if (user == null || !user.getPassword().equals(loginRequest.getPassword())) {
            throw new AuthenticationException("Invalid username or password");
        }

    }
}


