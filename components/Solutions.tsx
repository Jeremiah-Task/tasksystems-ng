"use client";
import React from "react";
import "./Solutions.css";
import { useInView } from "react-intersection-observer";
import { FiArrowUpRight } from "react-icons/fi"; // arrow icon

const solutions = [
  { name: "Enterprise Infrastructure & Cloud", details: "Building scalable systems with reliable servers, storage, and cloud solutions." },
  { name: "Cybersecurity & Data Protection", details: "Protecting businesses with secure, compliant, and resilient IT systems." },
  { name: "Managed IT Support", details: "Delivering responsive support and maintenance to keep operations running smoothly." },
  { name: "Power & Security Systems", details: "Ensuring business continuity with stable power and advanced security solutions." },

];

const Solutions = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div id="solutions" className="solutions" ref={ref}>
      <div className="container">
        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <div
              key={solution.name}
              className={`solution-card ${inView ? "visible" : ""}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="solution-number">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3>{solution.name}</h3>
              <p>{solution.details}</p>
              <a href="#services" className="read-more">
                <span className="read-text">More Solutions</span>
                <FiArrowUpRight className="read-arrow" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;
