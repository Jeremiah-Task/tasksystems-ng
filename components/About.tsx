"use client";

import React from "react";
import Image from "next/image";
import { FaShieldAlt, FaLaptopCode, FaUsers, FaExclamationTriangle } from "react-icons/fa";
import "./About.css";

const features = [
  {
    icon: <FaUsers />,
    title: "Highly Professional Members",
    desc: "Organizations are now forced to implement comprehensive cyber security strategies to protect their systems,",
  },
  {
    icon: <FaLaptopCode />,
    title: "Infrastructure Integration Technology",
    desc: "Organizations are now forced to implement comprehensive cyber security strategies to protect their systems,",
  },
  {
    icon: <FaShieldAlt />,
    title: "Vulnerability Assessment & Penetration Testing",
    desc: "Organizations are now forced to implement comprehensive cyber security strategies to protect their systems,",
  },
  {
    icon: <FaExclamationTriangle />,
    title: "Security Information & Event Management",
    desc: "Organizations are now forced to implement comprehensive cyber security strategies to protect their systems,",
  },
];

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Left Column */}
        <div className="about-images">
          <div className="about-heading">
            <p className="section-label">About Paheli</p>
            <h2 className="about-title">
              The Virtual Realm: An Expansive Guide to Cybersecurity.
            </h2>
          </div>

          <div className="main-image">
            <Image
              src="/contact.png"
              alt="Main security"
              fill
              style={{ objectFit: "cover", borderRadius: "0 10px 0 10px" }}
            />
          </div>

          <div className="small-image">
            <Image src="/contact.png" alt="Small image 1" fill />
          </div>

          <div className="small-image-circle">
            <Image src="/contact.png" alt="Small image 2" fill />
          </div>
        </div>

        {/* Right Column */}
        <div className="about-text">
          <p className="about-description">
            Organizations are now compelled to complete comprehensive cybersecurity
            strategies to safeguard their systems, networks, and data...
          </p>

          <div className="features-list">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon-wrapper">
                  <div className="feature-icon">{feature.icon}</div>
                </div>
                <div>
                  <h4>{feature.title}</h4>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <a href="#contact" className="cta-button">
            Know More About
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
