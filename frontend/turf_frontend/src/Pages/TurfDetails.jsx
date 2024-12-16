import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import "./TurfDetails.css";

function TurfDetails() {
    const [searchParams] = useSearchParams();
    const [turfs, setTurfs] = useState([]);

    useEffect(() => {
        const location = searchParams.get("location");
        const sport = searchParams.get("sport");

        axios
            .get(`http://localhost:8081/home/turfs?location=${location}&sport=${sport}`)
            .then((response) => {
                setTurfs(response.data);
            });
    }, [searchParams]);

    //
    return (
        <div>
            <h1>Turf Details</h1>
            {turfs.length > 0 ? (
                <div className="turf-grid">
                    {turfs.map((turf) => (
                        <div className="turf-card" key={turf.turfid}>
                            <h2>{turf.turfname}</h2>
                            <p>Location: {turf.location}</p>
                            <p>Price: ${turf.price}</p>
                            <p>Contact: {turf.mobilenumber}</p>
                            <button onClick={() => handleSelectSlot(turf.turfid)}>Select Slot</button>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No turfs available for the selected location and sport.</p>
            )}
        </div>
    );
}

export default TurfDetails;
