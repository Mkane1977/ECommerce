package com.targetclone.authentication.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.targetclone.authentication.model.User;

@Repository
public interface AuthenticationRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);  // Custom query method to find a user by username
}
