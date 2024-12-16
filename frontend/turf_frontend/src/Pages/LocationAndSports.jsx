//
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./LocationAndSports.css";
//
//
// const LocationAndSports = () => {
//     const [locations, setLocations] = useState([]);
//     const [sports, setSports] = useState([]);
//     const [selectedLocation, setSelectedLocation] = useState("");
//     const navigate = useNavigate();
//
//     useEffect(() => {
//         // Fetch locations from backend
//         fetch("http://localhost:8081/home/locations")
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! Status: ${response.status}`);
//                 }
//                 return response.json();
//             })
//             .then((data) => setLocations(data))
//             .catch((error) => console.error("Error fetching locations:", error));
//
//         // Fetch sports from backend
//         fetch("http://localhost:8081/home/sports")
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! Status: ${response.status}`);
//                 }
//                 return response.json();
//             })
//             .then((data) => setSports(data))
//             .catch((error) => console.error("Error fetching sports:", error));
//     }, []);
//
//
//     const handleSportClick = (sport) => {
//         if (!selectedLocation) {
//             console.log(`Sport clicked: ${sport}`);
//             console.log(`Selected Location: ${selectedLocation}`);
//             alert("Please select a location first!");
//         } else {
//             // Send the data to the backend
//             fetch("http://localhost:8081/home/filter-turfs", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     sports: sport,
//                     location: selectedLocation,
//                 }),
//                 credentials: "include",
//             })
//                 .then((response) => {
//                     if (!response.ok) {
//                         throw new Error(`HTTP error! Status: ${response.status}`);
//                     }
//                     return response.json();
//                 })
//                 .then((data) => {
//                     console.log("Backend response:", data);
//                     // Navigate to the new page with turf details
//                     navigate(`/turfdetails`, { state: { location: selectedLocation, sport, turfs: data } });
//                 })
//                 .catch((error) => {
//                     console.error("Error sending data to backend:", error);
//                 });
//         }
//     };
//
//
//     // Function to get the image path based on the sport name
//     const getSportImage = (sport) => {
//         const sportImageMap = {
//             Tennis: "tennis.jpeg",
//             Football: "football.jpg",
//             Volleyball: "volleyball.jpg",
//             Badminton: "badminton.jpg",
//             Cricket: "cricket.jpg",
//             Basketball: "basketball.jpeg"
//         };
//
//         // Default image if the sport is not found in the map
//         return `/images/${sportImageMap[sport] || "default.jpg"}`;
//     };
//
//     return (
//         <div>
//             <h2>Select Location and Sport</h2>
//
//             {/* Location Dropdown */}
//             <div className="dropdown-container">
//                 <select
//                     className="dropdown"
//                     value={selectedLocation}
//                     onChange={(e) => setSelectedLocation(e.target.value)}
//                 >
//                     <option value="">Select Location</option>
//                     {locations.map((location, index) => (
//                         <option key={index} value={location}>
//                             {location}
//                         </option>
//                     ))}
//                 </select>
//             </div>
//
//             {/* Sports Grid */}
//             <div className="grid-container">
//                 {sports.length > 0 ? (
//                     sports.map((sport, index) => (
//                         <div
//                             key={index}
//                             className="grid-item"
//                             onClick={() => handleSportClick(sport)}
//                         >
//                             <img
//                                 src={getSportImage(sport)}  // Dynamically set the sport image
//                                 alt={sport}
//                                 className="sport-image"
//                             />
//                             <div>{sport}</div>
//                         </div>
//                     ))
//                 ) : (
//                     <p>Loading sports...</p>
//                 )}
//             </div>
//         </div>
//     );
// };
//
// export default LocationAndSports;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./LocationAndSports.css";

const LocationAndSports = () => {
    const [locations, setLocations] = useState([]);
    const [sports, setSports] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch locations from backend
        axios.get("http://localhost:8081/home/locations")
            .then((response) => setLocations(response.data))
            .catch((error) => console.error("Error fetching locations:", error));

        // Fetch sports from backend
        axios.get("http://localhost:8081/home/sports")
            .then((response) => setSports(response.data))
            .catch((error) => console.error("Error fetching sports:", error));
    }, []);

    const handleSportClick = (location, sport) => {
        // if (!selectedLocation) {
        //     alert("Please select a location first!");
        // } else {
        //     // Send the data to the backend
        //     axios.post("/api/turfs/filter-turfs", {
        //         sports: sport,
        //         location: selectedLocation,
        //     })
        //         .then((response) => {
        //             // Navigate to the new page with turf details
        //             navigate(`/turfdetails`, { state: { location: selectedLocation, sport, turfs: response.data } });
        //         })
        //         .catch((error) => console.error("Error sending data to backend:", error));
        // }
        console.log(location);
        console.log(sport);
        if (location && sport) {
            navigate(`/turfs?location=${location}&sport=${sport}`);
        } else {
            alert("Please select a location first!");
        }
    };

    // Function to get the image path based on the sport name
    const getSportImage = (sport) => {
        const sportImageMap = {
            Tennis: "tennis.jpeg",
            Football: "football.jpg",
            Volleyball: "volleyball.jpg",
            Badminton: "badminton.jpg",
            Cricket: "cricket.jpg",
            Basketball: "basketball.jpeg",
        };

        // Default image if the sport is not found in the map
        return `/images/${sportImageMap[sport] || "default.jpg"}`;
    };

    return (
        <div>
            <h2>Select Location and Sport</h2>

            {/* Location Dropdown */}
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

            {/* Sports Grid */}
            <div className="grid-container">
                {sports.length > 0 ? (
                    sports.map((sport, index) => (
                        <div
                            key={index}
                            className="grid-item"
                            onClick={() => handleSportClick(selectedLocation, sport)}
                        >
                            <img
                                src={getSportImage(sport)}  // Dynamically set the sport image
                                alt={sport}
                                className="sport-image"
                            />
                            <div>{sport}</div>
                        </div>
                    ))
                ) : (
                    <p>Loading sports...</p>
                )}
            </div>
        </div>
    );
};

export default LocationAndSports;
