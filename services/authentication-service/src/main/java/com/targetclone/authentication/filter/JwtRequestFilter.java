package com.targetclone.authentication.filter;

import com.targetclone.authentication.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

@Component
public abstract class JwtRequestFilter extends OncePerRequestFilter {

    @Autowired
    private JwtUtil jwtUtil;

   @Override
    protected void doFilterInternal(HttpServletRequest request, ServletResponse response, FilterChain chain)
            throws ServletException, IOException {
        String token = request.getHeader("Authorization");

        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7);
            String username = jwtUtil.extractUsername(token);
            if (username != null) {
                // Set the user context or perform authentication check here if needed
            }
        }
        chain.doFilter(request, response);
    }
}
