import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="logo">EduBridge</div>
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/tutors">Tutors</a></li>
        <li><a href="/faq">FAQ</a></li>
        <li><a href="/request">Request a Tutor</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
