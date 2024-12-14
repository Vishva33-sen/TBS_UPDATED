// import { useEffect, useState } from "react";
// import "./LocationAndSports.css";
// import Navbar from "../Components/Navbar.jsx";
//
//
//
// const LocationAndSports = () => {
//     const [locations, setLocations] = useState([]);
//     const [selectedLocation, setSelectedLocation] = useState("");
//     const sports = ["cricket", "football", "badminton", "volleyball"];
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
//     }, []);
//
//     const handleSportClick = (sport) => {
//         if (!selectedLocation) {
//             alert("Please select a location first!");
//         } else {
//             window.location.href = `/home/login/locations-sports/${sport}/${selectedLocation}`;
//         }
//     };
//
//     return (
//         <div>
//             <Navbar/>
//             <h2>Select Location and Sport</h2>
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
//             <div className="box-container">
//                 {sports.map((sport, index) => (
//                     <div
//                         key={index}
//                         className="box"
//                         onClick={() => handleSportClick(sport)}
//                     >
//                         <img
//                             src={`/images/${sport}.jpg`}
//                             alt={sport}
//                             className="sport-image"
//                         />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };
//
// export default LocationAndSports;

// import { useEffect, useState } from "react";
// import "./LocationAndSports.css";
// import Navbar from "../Components/Navbar.jsx";
//
// const LocationAndSports = () => {
//     const [locations, setLocations] = useState([]);
//     const [sports, setSports] = useState([]);
//     const [selectedLocation, setSelectedLocation] = useState("");
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
//     const handleSportClick = (sport) => {
//         if (!selectedLocation) {
//             alert("Please select a location first!");
//         } else {
//             window.location.href = `/home/login/locations-sports/${sport}/${selectedLocation}`;
//         }
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
//                                 src={`/images/${sport}.jpg`} // Assuming you have images for sports in the public/images folder
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
//



import { useEffect, useState } from "react";
import "./LocationAndSports.css";


const LocationAndSports = () => {
    const [locations, setLocations] = useState([]);
    const [sports, setSports] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState("");

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

        // Fetch sports from backend
        fetch("http://localhost:8081/home/sports")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => setSports(data))
            .catch((error) => console.error("Error fetching sports:", error));
    }, []);

    const handleSportClick = (sport) => {
        if (!selectedLocation) {
            alert("Please select a location first!");
        } else {
            window.location.href = `/home/login/locations-sports/${sport}/${selectedLocation}`;
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
            Basketball: "basketball.jpeg"
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
                            onClick={() => handleSportClick(sport)}
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
