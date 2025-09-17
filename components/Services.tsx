"use client";

import React from "react";
import Image from "next/image";
import "./Services.css";
import { FiArrowUpRight } from "react-icons/fi";

const services = [
  {
    img: "/solutions.jpg",
    title: "Product-Driven Solutions",
    desc: "Design and deliver innovative, solutions addressing business challenges, ensuring scalability, security, and long-term value.",
  },
  {
    img: "/infrastructure.jpg",
    title: "Enterprise Infrastructure",
    desc: "Designing and implementing scalable servers, storage, and network solutions for businesses.",
  },
  {
    img: "/cloud.jpg",
    title: "Cloud Solutions",
    desc: "Delivering cloud enablement and migration services to improve agility and efficiency.",
  },
  {
    img: "/cybersecurity.jpg",
    title: "Cybersecurity & Risk Management",
    desc: "Protecting systems, networks, and data through comprehensive security strategies and assessments.",
  },
  {
    img: "/security.jpg",
    title: "Power & Security Systems",
    desc: "Ensuring uninterrupted operations with backup power, access control, and surveillance solutions.",
  },
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-header">
        <div className="services-title">
          <p className="section-label">Our Services</p>
          <h2>
            What We Deliver for You<br />
            Technology in Action.
          </h2>
        </div>
        <a href="#all-services" className="view-all-btn">
          <span className="dot"></span> View Other Services
        </a>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-image">
              <Image
                src={service.img}
                alt={service.title}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <a href="#solutions" className="read-more">
              <span className="read-text">More Services</span>
              <FiArrowUpRight className="read-arrow" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
