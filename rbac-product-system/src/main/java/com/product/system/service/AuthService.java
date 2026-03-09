package com.product.system.service;

import com.product.system.dto.AuthResponse;
import com.product.system.dto.LoginRequest;
import com.product.system.dto.RegisterRequest;

public interface AuthService {

    void register(RegisterRequest request);

    AuthResponse login(LoginRequest request);

}
