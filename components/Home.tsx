"use client";

import React from "react";
import Image from "next/image";
import "./Home.css";

const Home = () => {
  return (
    <div id="home" className="section hero">
      <Image
        src="/contact.png"
        alt="Hero Image"
        fill
        className="hero-image"
        priority
      />
      <div className="hero-overlay"></div>

      <div className="container">
        <div className="hero-text-container">
          <p className="cyber-hygiene">Task Systems Limited</p>
          <h1>Innovative IT Solutions for Your Business</h1>
          <p className="description">
            In today&apos;s increasingly digital world, cybersecurity has become
            paramount. With the rapid expansion of online activities, the threat
            landscape...
          </p>
          <div className="hero-buttons">
            <a href="#about"><button className="btn-request-demo">
              <span className="btn-circle"></span>About Us</button></a>
            <a href="#services"><button className="btn-watch-video">Our Services</button></a>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Home;
