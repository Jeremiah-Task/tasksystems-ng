"use client";

import React from "react";
import Image from "next/image";
import { FaShieldAlt, FaLaptopCode, FaUsers, FaExclamationTriangle } from "react-icons/fa";
import "./About.css";

const features = [
  {
    icon: <FaUsers />,
    title: "Proven Expertise & Experience",
    desc: "Task Systems has over three decades of experience delivering ICT solutions to leading businesses across Nigeria.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Infrastructure & Cloud Integration",
    desc: "We design and implement scalable infrastructure and cloud solutions that optimize business operations and technology adoption.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Cybersecurity & Risk Management",
    desc: "We protect critical systems and data through comprehensive cybersecurity strategies, vulnerability assessments, and penetration testing.",
  },
  {
    icon: <FaExclamationTriangle />,
    title: "Managed IT & Compliance Services",
    desc: "Our managed IT services, security monitoring, and compliance support ensure operational continuity and adherence to global standards.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Left Column */}
        <div className="about-images">
          <div className="about-heading">
            <p className="section-label">About Task</p>
            <h2 className="about-title">
              {`The Digital Frontier: Powering Nigeria’s ICT Evolution`}
            </h2>
          </div>

          <div className="main-image">
            <Image
              src="/main-image.png"
              alt="Main security"
              fill
              style={{ objectFit: "cover", borderRadius: "0 10px 0 10px" }}
            />
          </div>

          <div className="small-image">
            <Image src="/long-term-partnership.jpg" alt="Small image 1" fill />
          </div>

          <div className="small-image-circle">
            <Image src="/small-image.png" alt="Small image 2" fill />
          </div>
        </div>

        {/* Right Column */}
        <div className="about-text">
          <p className="about-description">
            {`In today’s fast-paced digital landscape, organizations rely on Task Systems Limited to deliver secure, reliable, and scalable ICT solutions. From infrastructure and cloud services to cybersecurity and managed support, we help businesses protect their systems, networks, and data while staying ahead of technology trends.`}
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
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
