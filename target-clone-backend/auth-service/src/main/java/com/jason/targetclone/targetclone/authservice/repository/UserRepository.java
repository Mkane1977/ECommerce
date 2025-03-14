package com.jason.targetclone.targetclone.authservice.repository;


import com.jason.targetclone.targetclone.authservice.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
}
