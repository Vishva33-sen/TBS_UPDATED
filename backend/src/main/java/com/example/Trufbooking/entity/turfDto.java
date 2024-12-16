package com.example.Trufbooking.entity;



public class turfDto {
        private String turfname;
        private Double price;
        private Long mobilenumber;
        private Integer turfid;
        private String location;
        private String sport;


    public turfDto(String turfname, Double price, Long mobilenumber, Integer turfid, String location, String sport) {
        this.turfname = turfname;
        this.price = price;
        this.mobilenumber = mobilenumber;
        this.turfid = turfid;
        this.location = location;
        this.sport = sport;
    }

    public String getSport() {
        return sport;
    }

    public void setSport(String sport) {
        this.sport = sport;
    }

    public String getTurfname() {
        return turfname;
    }

    public void setTurfname(String turfname) {
        this.turfname = turfname;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Long getMobilenumber() {
        return mobilenumber;
    }

    public void setMobilenumber(Long mobilenumber) {
        this.mobilenumber = mobilenumber;
    }

    public Integer getTurfid() {
        return turfid;
    }

    public void setTurfid(Integer turfid) {
        this.turfid = turfid;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }



    @Override
    public String toString() {
        return "turfDto{" +
                "turfname='" + turfname + '\'' +
                ", price=" + price +
                ", mobilenumber=" + mobilenumber +
                ", turfid=" + turfid +
                ", location='" + location + '\'' +
                '}';
    }
}
