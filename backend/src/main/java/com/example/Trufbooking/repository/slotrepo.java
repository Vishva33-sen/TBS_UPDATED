package com.example.Trufbooking.repository;

import com.example.Trufbooking.entity.admintable;
import com.example.Trufbooking.entity.slot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface slotrepo extends JpaRepository<slot, Integer> {

//    @Query("SELECT t FROM admintable t WHERE t.turfid = :turfid")
//    admintable findTurfDetailsById(@Param("turfid") int turfid);
//
//    @Query("SELECT s FROM slot s WHERE s.turf.turfid = :turfId")
//    List<slot> findSlotsByTurfId(@Param("turfId") int turfId);
}

//@Query(value = "SELECT * FROM slot_detail WHERE turfid = :turfId", nativeQuery = true)

//@Query(value = "SELECT JSON_KEYS(time) AS availableTimeSlots " +
//        "FROM slot_detail " +
//        "WHERE JSON_EXTRACT(time, '$.*.status') LIKE '%\"available\"%' " +
//        "AND turfid = :turfId", nativeQuery = true)
//List<String> findAvailableSlots(int turfId);