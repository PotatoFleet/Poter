import { Link } from "react-router-dom";

export default function IndexNav() {
  return (
    <div className="index-nav-container">
      <nav className="index-nav">
        <div className="left">
          <Link to="/" className="logo"></Link>
        </div>
        <div className="right">
          <Link to="/about" className="nav-item">
            About
          </Link>
          <Link to="/login" className="nav-item">
            Login
          </Link>
          <Link to="/signup" className="nav-btn">
            Sign Up
          </Link>
        </div>
      </nav>
    </div>
  );
}
