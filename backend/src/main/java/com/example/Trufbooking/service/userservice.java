package com.example.Trufbooking.service;

import com.example.Trufbooking.entity.usertable;
import com.example.Trufbooking.repository.userrepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Slf4j
@Service
public class userservice {

    @Autowired
    private userrepository userrepo;

    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public userservice(BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    public usertable registerUser(usertable user) {
//        if (userrepo.existsByEmail(user.getEmail())) {
//            return "Email already exists!";
//        }
        // Encrypt password before saving
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        log.info(String.valueOf(user.getMobile_number()));
        log.info(String.valueOf(user.getUsername()));


        return userrepo.save(user);
        //return "Signup successful!";
    }


    public Optional<usertable> authenticateUser(String email, String password) {
        Optional<usertable> user = userrepo.findByEmail(email);
        if (user.isPresent() && bCryptPasswordEncoder.matches(password, user.get().getPassword())) {
            return user;
        }
//        if (user.isPresent() && password.equals(user.get().getPassword())) {
//            return user;
//        }
        return Optional.empty();
    }

    public boolean authenticate(String email, String password) {
        usertable user = userrepo.findByUsername(email);
        if(!user.getEmail().equals(email)) {
            throw new UsernameNotFoundException("Invalid email");
        }
        if(!user.getPassword().equals(bCryptPasswordEncoder.encode(password))) {
            throw new BadCredentialsException("Invalid password");
        }
        return true;
    }

    public Optional<usertable> findUserByEmail(String email) {
        // Assuming you have a UserRepository or some data source for users
        return userrepo.findByEmail(email); // Replace with the actual implementation
    }



}

/*
public String registerUser(usertable user) {
        if (userrepo.existsByEmail(user.getEmail())) {
            return "Email already exists!";
        }
        // Encrypt password before saving
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        userrepo.save(user);
        return "Signup successful!";
    }
 */