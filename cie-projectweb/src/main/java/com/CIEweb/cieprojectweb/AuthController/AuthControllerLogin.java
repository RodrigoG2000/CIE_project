package com.CIEweb.cieprojectweb.AuthController;


import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginForm loginRequest) {
        // Implementa la lógica de autenticación aquí
        // Retorna un token de autenticación u otra respuesta apropiada
    }
}
