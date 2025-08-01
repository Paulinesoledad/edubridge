import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
        <div className="footer-content">
        <div className="footer-main">
            <span>© {new Date().getFullYear()} EduBridge. </span>
        </div><div className="footer-credits"> All rights reserved </div>
        <div className="footer-credits">Designed by Pauline</div>
        </div>
    </footer>


  );
}

export default Footer;
