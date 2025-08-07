
import { Link } from "react-router-dom";
import "./NotFound.css";
import { useEffect } from "react";

function NotFound() {
    useEffect(() => {
     document.title = "EduBridge | NotFound";
    }, []);
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="back-home">
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
