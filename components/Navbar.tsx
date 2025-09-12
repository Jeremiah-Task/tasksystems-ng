"use client";

import React, { useState } from "react";
import Image from "next/image";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="nav-logo">
          <Image src="/logo.png" alt="Logo" width={70} height={50} />
        </div>
        <div className="nav-links-container">
          <div className={`nav-links ${isOpen ? "open" : ""}`}>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#partners">Partners</a>
            <a href="#solutions">Solutions</a>
            <a href="#team">Team</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;
