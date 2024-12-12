import React, { useEffect, useState } from "react";
import "./LocationAndSports.css";



const LocationAndSports = () => {
    const [locations, setLocations] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState("");
    const sports = ["cricket", "football", "badminton", "volleyball"];

    useEffect(() => {
        // Fetch locations from backend
        fetch("http://localhost:8081/home/locations")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => setLocations(data))
            .catch((error) => console.error("Error fetching locations:", error));
    }, []);

    const handleSportClick = (sport) => {
        if (!selectedLocation) {
            alert("Please select a location first!");
        } else {
            window.location.href = `/home/login/locations-sports/${sport}/${selectedLocation}`;
        }
    };

    return (
        <div>
            <h2>Select Location and Sport</h2>
            <div className="dropdown-container">
                <select
                    className="dropdown"
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                >
                    <option value="">Select Location</option>
                    {locations.map((location, index) => (
                        <option key={index} value={location}>
                            {location}
                        </option>
                    ))}
                </select>
            </div>

            <div className="box-container">
                {sports.map((sport, index) => (
                    <div
                        key={index}
                        className="box"
                        onClick={() => handleSportClick(sport)}
                    >
                        <img
                            src={`/images/${sport}.jpg`}
                            alt={sport}
                            className="sport-image"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LocationAndSports;
