package com.example.Trufbooking.controller;

import com.example.Trufbooking.entity.admintable;
import com.example.Trufbooking.entity.turfDto;
import com.example.Trufbooking.service.adminservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

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


    @GetMapping("/turfs")
    public List<admintable> getTurfDetails(@RequestParam String location, @RequestParam String sport) {
        //return adminser.findTurfsByLocationAndSport(location, sport);
        List<admintable> turfs = adminser.findTurfsByLocationAndSport(location, sport);
        turfs.forEach(turf -> System.out.println(turf));
        return turfs;
    }


//    @PostMapping("/filter-turfs")
//    public ResponseEntity<?> filterTurfs(@RequestBody Map<String, Object> requestBody) {
//        // Extract values from the request body
//        String sports = (String) requestBody.get("sports");
//        String location = (String) requestBody.get("location");
//
//        System.out.println(sports);
//        System.out.println(location);
//
//
//        // Fetch filtered turfs from the service
//        List<admintable> filteredTurfs = adminser.getFilteredTurfs(sports, location);
//
//        // Return the filtered turfs as the response
//        return ResponseEntity.ok(filteredTurfs);
//    }
//
//    @GetMapping("/turfs")
//    public ResponseEntity<?> getFilteredTurfs(@RequestParam String sport, @RequestParam String location) {
//        // Fetch filtered turfs from the service
//        List<admintable> filteredTurfs = adminser.getFilteredTurfs(sport, location);
//        for (admintable turf : filteredTurfs) {
//            System.out.println(turf);
//        }
//        // Return the filtered turfs as the response
//        return ResponseEntity.ok(filteredTurfs);
//    }
}


