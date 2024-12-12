package com.example.Trufbooking.entity;


import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import java.io.Serializable;

@Data
@Entity
@DynamicUpdate
@DynamicInsert
@Table(name = "admintable")
public class admintable implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="turfid", nullable = false)
    private int turfid;

    @Column(name="turfname",nullable = false)
    private String turfname;

    @Column(name="location",nullable = false)
    private String location;

    @Column(name="mobilenumber", nullable = false)
    private long mobilenumber;

    @Column(name="price", nullable = false)
    private double price;

    @Column(name="cricket", nullable = false)
    private String cricket;

    @Column(name="football", nullable = false)
    private String football;

    @Column(name="badminton", nullable = false)
    private String badminton;

    @Column(name="volleyball", nullable = false)
    private String volleyball;



}
