import { Link } from "react-router-dom";
import "./Home.css";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
   document.title = "EduBridge | Home";
  }, []);
  
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to EduBridge</h1>
          <p>Your micro-tutoring companion , personalized academic help at your fingertips anytime, anywhere.</p>
          <div className="cta-buttons">
            <Link to="/request" className="btn">Request a Tutor</Link>
            <Link to="/tutors" className="btn secondary">Browse Tutors</Link>
          </div>
        </div>
      </section>

      <section className="why-edubridge">
        <h2>Why EduBridge?</h2>
        <ul>
          <li>⏱️ Quick access to expert tutors</li>
          <li>🎯 Personalized support tailored to your needs</li>
          <li>💡 Easy and intuitive platform</li>
        </ul>
      </section>
    </div>
  );
}

export default Home;


