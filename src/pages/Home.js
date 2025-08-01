import { Link } from "react-router-dom";
import "./Home.css"; // You'll create this next

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to <span>EduBridge</span></h1>
        <p>Your micro-tutoring companion — personalized academic help at your fingertips.</p>
        <div className="cta-buttons">
          <Link to="/request" className="btn">Request a Tutor</Link>
          <Link to="/tutors" className="btn secondary">Browse Tutors</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

