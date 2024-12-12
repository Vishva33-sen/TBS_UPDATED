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

    @Query("SELECT t.turfname, t.price, t.mobilenumber,t.turfid, t.location " +
            "FROM admintable t WHERE " +
            "((:sport = 'cricket' AND t.cricket = 'yes') OR " +
            "(:sport = 'football' AND t.football = 'yes') OR " +
            "(:sport = 'badminton' AND t.badminton = 'yes') OR " +
            "(:sport = 'volleyball' AND t.volleyball = 'yes')) " +
            "AND (:location IS NULL OR t.location = :location)")
    List<turfDto> findByLocationAndSport(String location, String sport);

}
