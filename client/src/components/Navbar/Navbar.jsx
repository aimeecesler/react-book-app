import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <Link to="/" className="navbar-brand">
        Book Badger
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <NavLink to="/" className="nav-link">
            Search
          </NavLink>
          <NavLink to="/books" className="nav-link">
            Saved Books
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
