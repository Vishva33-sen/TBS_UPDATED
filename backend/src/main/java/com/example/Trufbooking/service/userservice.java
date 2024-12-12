package com.example.Trufbooking.service;

import com.example.Trufbooking.entity.usertable;
import com.example.Trufbooking.repository.userrepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Slf4j
@Service
public class userservice {
    @Autowired
    private userrepository userrepo;

    @Autowired
    private PasswordEncoder passwordEncoder;


    public String registerUser(usertable user) {
        if (userrepo.existsByEmail(user.getEmail())) {
            return "Email already exists!";
        }
        // Encrypt password before saving
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        log.info(String.valueOf(user.getMobile_number()));
        log.info(String.valueOf(user.getUsername()));
        userrepo.save(user);
        return "Signup successful!";
    }


    public Optional<usertable> authenticateUser(String email, String password) {
        Optional<usertable> user = userrepo.findByEmail(email);
        if (user.isPresent() && passwordEncoder.matches(password, user.get().getPassword())) {
            return user;
        }
//        if (user.isPresent() && password.equals(user.get().getPassword())) {
//            return user;
//        }
        return Optional.empty();
    }
}
