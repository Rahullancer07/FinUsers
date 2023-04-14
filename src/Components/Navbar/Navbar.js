import React from "react";
import "./Navbar.css";

const Navbar = ({ setShowUserForm }) => {
  return (
    <div>
      <nav className="navbar">
        <img
          src="https://50fin.in/icons/logo.svg"
          alt="logo_50Fin"
          className="navbar_logo"
        />
        <h1 className="navbar_title">Users List</h1>
        <button
          className="navbar_addUser"
          onClick={() => setShowUserForm((prevValue) => !prevValue)}
        >
          Add User
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
