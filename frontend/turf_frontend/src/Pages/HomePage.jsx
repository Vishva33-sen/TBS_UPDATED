import './HomePage.css';

const HomePage = () => {
  return (
    <>
      <div className="video-container">
        <video autoPlay loop muted>
          <source src="/src/assets/videos/home_background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="landing">
        <h1>Welcome to TurfBooking System!</h1>
        <p>Your Ultimate Sports Destination</p>
        <p>
          Whether you're a casual player or a pro athlete, we make booking your favorite sports turf simple, fast, and hassle-free.
        </p>
      </div>
      <div className="cta">
        <h2>Get Started Today!</h2>
        <a href="/signup">Sign Up Now</a>
      </div>
    </>
  );
};

export default HomePage;
