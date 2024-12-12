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

    @GetMapping("/turfs")
    public List<turfDto> getTurfs(@RequestParam String location, @RequestParam String sport) {
        return adminser.getTurfsByLocationAndSport(location, sport);
    }
}
