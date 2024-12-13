package com.example.Trufbooking.repository;

import com.example.Trufbooking.entity.admintable;
import com.example.Trufbooking.entity.turfDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


public interface admintable_repo extends JpaRepository<admintable, Integer> {
    @Query("select distinct a1.location from admintable a1")
    List<String> findDistinctLocations();



}
