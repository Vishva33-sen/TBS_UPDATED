package com.example.Trufbooking.controller;

import com.example.Trufbooking.entity.turfDto;
import com.example.Trufbooking.service.adminservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/home")
@CrossOrigin(origins = "http://localhost:5173")
public class admincontroller {

    @Autowired
    adminservice adminser;

    @GetMapping("/locations")
    public List<String> getDistinctLocations() {
        return adminser.getDistinctLocations();
    }

    @GetMapping("/sports")
    public List<String> getDistinctSports() {
        System.out.println(adminser.getDistinctSports());
        return adminser.getDistinctSports();
    }

}
