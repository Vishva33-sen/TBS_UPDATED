package com.example.Trufbooking.repository;

import com.example.Trufbooking.entity.admintable;
import com.example.Trufbooking.entity.turfDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface admintable_repo extends JpaRepository<admintable, Integer> {
    @Query("select distinct a1.location from admintable a1")
    List<String> findDistinctLocations();

    @Query(value = "SELECT DISTINCT JSON_UNQUOTE(JSON_EXTRACT(sports, CONCAT('$[', n.n, ']'))) AS sport " +
            "FROM admintable a " +
            "CROSS JOIN (SELECT 0 AS n UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) n " +
            "WHERE JSON_UNQUOTE(JSON_EXTRACT(sports, CONCAT('$[', n.n, ']'))) IS NOT NULL", nativeQuery = true)
    List<String> findDistinctSports();


    //@Query("select a from admintable a where (a.sports = :sport) and a.location = :location")
    @Query("SELECT a FROM admintable a WHERE :sport IN (SELECT JSON_UNQUOTE(JSON_EXTRACT(a.sports, CONCAT('$[', n.n, ']'))) FROM (SELECT 0 AS n UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) n) AND a.location = :location")
    List<admintable> findByLocationAndSport(@Param("location") String location, @Param("sport") String sport);

}



//    @Query("select a from admintable a where (a.sports = :sports) and a.location = :location")
//    List<admintable> findBySportsAndLocation(@Param("sports") String sports, @Param("location") String location);
//
//    @Query("SELECT a FROM admintable a WHERE :sport IN (SELECT JSON_UNQUOTE(JSON_EXTRACT(a.sports, CONCAT('$[', n.n, ']'))) FROM (SELECT 0 AS n UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) n) AND a.location = :location")
//    List<admintable> findBySportsAndLocation(@Param("sport") String sport, @Param("location") String location);




//    @Query(value = "SELECT t.turfname, t.price, t.mobilenumber, t.turfid, t.location " +
//            "FROM admintable t " +
//            "WHERE JSON_CONTAINS(t.sports, :sport) " +  // Check if sport is in the JSON array
//            "AND (:location IS NULL OR t.location = :location)",nativeQuery = true)
//    List<Object[]>findallLocationBySport(String sport, String location);