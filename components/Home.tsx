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
          <p className="cyber-hygiene">Cyber Hygiene:</p>
          <h1>A Proactive Approach to Digital Security.</h1>
          <p className="description">
            In today's increasingly digital world, cybersecurity has become
            paramount. With the rapid expansion of online activities, the threat
            landscape...
          </p>
          <div className="hero-buttons">
            <button className="btn-request-demo">Request A Demo</button>
            <button className="btn-watch-video">Watch Intro Video</button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Home;
