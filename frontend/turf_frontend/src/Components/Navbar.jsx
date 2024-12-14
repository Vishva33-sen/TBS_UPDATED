import './Navbar.css'; // Add a separate CSS file for this component

const Navbar = () => {
    const email = localStorage.getItem("email");
    const firstLetter = email ? email.charAt(0).toUpperCase() : ""; // Get the first letter of the email

    return (
        <div className="navbar">
            <div className="logo">TurfBooking System</div>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
                {email ? (
                    <>
                        <li>
                            <button
                                onClick={() => {
                                    localStorage.clear();
                                    window.location.reload();
                                }} className="logout-btn">
                                <li><a href="/home">Logout</a></li>
                            </button>
                        </li>
                    </>) : (
                    <>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/signup">Signup</a></li>
                    </>
                )}
            </ul>
        </div>
    );
};

export default Navbar;
