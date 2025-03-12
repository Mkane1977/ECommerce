package com.jason.targetclone.targetclone.authservice.entity;




import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String username;

    @Column(nullable = true) // Allow NULL values initially
    private String password;

    private String role;  // e.g., USER, ADMIN
}
