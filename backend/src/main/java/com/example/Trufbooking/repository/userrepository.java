package com.example.Trufbooking.repository;

import com.example.Trufbooking.entity.usertable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface userrepository extends JpaRepository<usertable,String> {
    //boolean existsByEmail(String email);
    Optional<usertable> findByEmail(String email);
    usertable findByUsername(String username);
}
