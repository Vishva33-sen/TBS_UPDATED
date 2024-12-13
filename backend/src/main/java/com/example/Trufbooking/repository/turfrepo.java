package com.example.Trufbooking.repository;

import com.example.Trufbooking.entity.admintable;
import com.example.Trufbooking.entity.turfDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface turfrepo extends JpaRepository<admintable, Integer> {
//    @Query("select distinct t.location from admintable t")
//    List<String> findallLocation();
//
//    @Query("SELECT t.turfname, t.price, t.mobilenumber,t.turfid, t.location " +
//            "FROM admintable t WHERE " +
//            "((:sport = 'cricket' AND t.cricket = 'yes') OR " +
//            "(:sport = 'football' AND t.football = 'yes') OR " +
//            "(:sport = 'badminton' AND t.badminton = 'yes') OR " +
//            "(:sport = 'volleyball' AND t.volleyball = 'yes')) " +
//            "AND (:location IS NULL OR t.location = :location)")
//    List<Object[]>findallLocationBySport(String sport, String location);

}
