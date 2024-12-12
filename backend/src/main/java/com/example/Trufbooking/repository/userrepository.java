package com.example.Trufbooking.repository;

import com.example.Trufbooking.entity.usertable;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface userrepository extends JpaRepository<usertable,String> {
    boolean existsByEmail(String email);
    Optional<usertable> findByEmail(String email);
}
