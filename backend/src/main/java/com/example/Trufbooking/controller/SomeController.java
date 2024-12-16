package com.example.Trufbooking.controller;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;

public class SomeController {
    @GetMapping("/current-user")
    public String getCurrentUser() {
        // Get the currently authenticated user
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        // If the user is authenticated and the principal is an instance of UserDetails
        if (principal instanceof UserDetails) {
            UserDetails userDetails = (UserDetails) principal;
            // Here you can use userDetails to return more user-specific information.
            return "Authenticated user: " + userDetails.getUsername();
        }

        // If no user is authenticated
        return "No authenticated user";
    }

    @GetMapping("/current-user-roles")
    public String getCurrentUserRoles() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if (principal instanceof UserDetails) {
            UserDetails userDetails = (UserDetails) principal;
            // Return the roles/authorities of the user
            return "User roles: " + userDetails.getAuthorities();
        }

        return "No authenticated user or no roles available";
    }
}
