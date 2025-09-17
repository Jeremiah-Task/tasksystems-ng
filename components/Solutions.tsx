"use client";
import React from "react";
import "./Solutions.css";
import { useInView } from "react-intersection-observer";
import { FiArrowUpRight } from "react-icons/fi"; // arrow icon

const solutions = [
  { name: "Security Management", details: "The Imperative of Cybersecurity in an Interconnected World." },
  { name: "Data Privacy", details: "The Imperative of Cybersecurity in an Interconnected World." },
  { name: "Network Security", details: "The Imperative of Cybersecurity in an Interconnected World." },
  { name: "DDOS Protection", details: "The Imperative of Cybersecurity in an Interconnected World." },
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
              <a href="#" className="read-more">
                <span className="read-text">Read More</span>
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
