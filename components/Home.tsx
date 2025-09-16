"use client";

import React from "react";
import Image from "next/image";
import { FaArrowRight, FaPlayCircle } from "react-icons/fa6";
import "./Home.css";

const Home = () => {
  return (
    <div id="home" className="section hero">
      <Image
        src="/images/placeholder1.png"
        alt="Hero Image"
        fill
        className="hero-image"
        priority
      />
      <div className="hero-overlay"></div>

      <div className="hero-text-container">
        <div className="hero-text">
          <p className="cyber-hygiene">Cyber Hygiene:</p>
          <h1>A Proactive Approach to Digital Security.</h1>
          <p className="description">
            In today's increasingly digital world, cybersecurity has become
            paramount. With the rapid expansion of online activities, the threat
            landscape...
          </p>
          <div className="hero-buttons">
            <button className="btn-request-demo">
              Request A Demo <FaArrowRight />
            </button>
            <button className="btn-watch-video">
              <FaPlayCircle /> Watch Intro Video
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
