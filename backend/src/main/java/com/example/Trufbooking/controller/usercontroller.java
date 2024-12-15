package com.example.Trufbooking.controller;

import com.example.Trufbooking.entity.usertable;
import com.example.Trufbooking.service.userservice;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.json.jackson2.JacksonFactory;
import jakarta.servlet.http.HttpSession;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.Collections;
import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/home")
public class usercontroller {
    @Autowired
    userservice userser;

    @PostMapping("/signup")
    public ResponseEntity<usertable> signup(@RequestBody usertable user) {
        usertable result = userser.registerUser(user);
//        if ("Email already exists!".equals(result)) {
//            return ResponseEntity.status(409).body(result);
//        }
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

    public ResponseEntity<String> login(@RequestBody usertable loginRequest, HttpSession session){
        try{
            boolean isAuthenticated = userser.authenticate(loginRequest.getEmail(), loginRequest.getPassword());
            if(isAuthenticated){
                session.setAttribute("user", loginRequest.getEmail());
                return ResponseEntity.ok("Login Successful");
            }
            else{
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
            }
        }
        catch(Exception e){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
        }
    }

}

/*
public ResponseEntity<String> signup(@RequestBody usertable user) {
        String result = userser.registerUser(user);
        if ("Email already exists!".equals(result)) {
            return ResponseEntity.status(409).body(result);
        }
        return ResponseEntity.status(201).body(result);
    }
 */