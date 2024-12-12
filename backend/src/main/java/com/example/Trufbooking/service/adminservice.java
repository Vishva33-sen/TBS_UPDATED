package com.example.Trufbooking.service;

import com.example.Trufbooking.entity.admintable;
import com.example.Trufbooking.entity.turfDto;
import com.example.Trufbooking.repository.admintable_repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class adminservice {

    @Autowired
    admintable_repo adminrepo;

//    public List<String> getDistinctLocations() {
//        List<admintable> adminTableList = adminrepo.findDistinctByLocation();
//        return adminTableList
//                .stream()
//                .map(admintable::getLocation)
//                .distinct()
//                .toList();
//    }
    public List<String> getDistinctLocations() {
        return adminrepo.findDistinctLocations();
    }

    public List<turfDto> getTurfsByLocationAndSport(String location, String sport) {
        return adminrepo.findByLocationAndSport(location, sport);
    }

}
