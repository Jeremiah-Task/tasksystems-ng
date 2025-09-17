"use client";

import React from "react";
import Image from "next/image";
import "./Services.css";
import { FiArrowUpRight } from "react-icons/fi";

const services = [
  {
    img: "/contact.png",
    title: "Application Security",
    desc: "The Imperative of Cybersecurity in an Interconnected World.",
    link: "#",
  },
  {
    img: "/contact.png",
    title: "Infrastructure Security",
    desc: "The Imperative of Cybersecurity in an Interconnected World.",
    link: "#",
  },
  {
    img: "/contact.png",
    title: "Cloud-Native Security",
    desc: "The Imperative of Cybersecurity in an Interconnected World.",
    link: "#",
  },
  {
    img: "/contact.png",
    title: "Network Security",
    desc: "The Imperative of Cybersecurity in an Interconnected World.",
    link: "#",
  },
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-header">
        <div className="services-title">
          <p className="section-label">Our Services</p>
          <h2>
            What We Do for Your (SIEM) <br />
            Security in Paheli.
          </h2>
        </div>
        <a href="#all-services" className="view-all-btn">
          <span className="dot"></span> View All Services
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
            <a href={service.link} className="read-more">
              <span className="read-text">Read More</span>
              <FiArrowUpRight className="read-arrow" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
