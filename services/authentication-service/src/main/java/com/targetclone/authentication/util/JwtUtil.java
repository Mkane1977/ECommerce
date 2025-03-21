package com.targetclone.authentication.util;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import java.util.Date;

public class JwtUtil {

    private String secretKey = "secret";  // Use a more secure key in production

    // Generate JWT
    public String generateToken(String username) {
        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60))  // 1 hour expiration
                .signWith(SignatureAlgorithm.HS256, secretKey)
                .compact();
    }

    // Validate JWT
    public boolean validateToken(String token, String username) {
        String tokenUsername = extractUsername(token);
        return tokenUsername.equals(username) && !isTokenExpired(token);
    }

    // Extract Username from JWT
    public String extractUsername(String token) {
        return Jwts.parser()
                .setSigningKey(secretKey)
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }

    // Check if the token has expired
    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    // Extract expiration date from token
    private Date extractExpiration(String token) {
        return Jwts.parser()
                .setSigningKey(secretKey)
                .parseClaimsJws(token)
                .getBody()
                .getExpiration();
    }
}
