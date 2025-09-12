"use client";

import React from "react";
import Image from "next/image";
import "./Footer.css";

import { useState, useEffect } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">
          <Image src="/logo.png" alt="Logo" width="70" height="50" />
        </div>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#partners">Partners</a>
          <a href="#contact">Contact</a>
        </div>
        <p>&copy; {new Date().getFullYear()} Task Systems Ltd. All rights reserved.</p>
      </div>
      {isVisible && (
        <button className="go-to-top" onClick={scrollToTop}>
          &uarr;
        </button>
      )}
    </footer>
  );
};

export default Footer;
