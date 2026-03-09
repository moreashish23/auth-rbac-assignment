package com.product.system.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Email
    @NotBlank(message = "Email is required")
    @Column(unique = true)
    private String email;


    @NotBlank(message = "Password is required")
    @Size(min = 6)
    private String password;

    @Enumerated(EnumType.STRING)
    private Role role;
}
