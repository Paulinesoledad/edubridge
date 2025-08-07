import tutors from "../data/tutors";
import "./Tutors.css";
import { useEffect } from "react";

function Tutors() {
  useEffect(() => {
    document.title = "EduBridge | Tutors";
  }, []);
  return (
    <div className="tutors-page">
      <h2>Meet Our Tutors</h2>
      <div className="tutor-grid fade-in">
        {tutors.map((tutor) => (
          <div key={tutor.id} className="tutor-card">
            <img src={tutor.image} alt={tutor.name} />
            <h3>{tutor.name}</h3>
            <p className="subject">
              {tutor.subject} — {tutor.level}
            </p>
            <p className="bio">{tutor.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tutors;
