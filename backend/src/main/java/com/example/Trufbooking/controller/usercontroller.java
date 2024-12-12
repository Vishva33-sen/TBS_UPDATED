package com.example.Trufbooking.controller;

import com.example.Trufbooking.entity.usertable;
import com.example.Trufbooking.service.userservice;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/home")
public class usercontroller {
    @Autowired
    userservice userser;

    @PostMapping("/signup")
    public ResponseEntity<String> signup(@RequestBody usertable user) {
        String result = userser.registerUser(user);
        if ("Email already exists!".equals(result)) {
            return ResponseEntity.status(409).body(result);
        }
        return ResponseEntity.status(201).body(result);
    }


    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Map<String, String> requestMap) {
        String email = requestMap.get("email");
        String password = requestMap.get("password");

        Optional<usertable> user = userser.authenticateUser(email, password);
        if (user.isPresent()) {

            return ResponseEntity.ok("Login Successful");
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
    }
}
