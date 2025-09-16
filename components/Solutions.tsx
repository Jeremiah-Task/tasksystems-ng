"use client";
import React, { useEffect } from "react";
import "./Solutions.css";
import { useInView } from "react-intersection-observer";

const solutions = [
  {
    name: "Network Solutions",
    details:
      "Robust, scalable, and secure connectivity infrastructure tailored to meet your organization's specific requirements.",
  },
  {
    name: "Enterprise Mobility",
    details:
      "Secure device management and app deployment that enhances productivity while maintaining compliance.",
  },
  {
    name: "Convergence Solutions",
    details:
      "Unify voice, video, and data communications into streamlined platforms that reduce complexity.",
  },
  {
    name: "Collaboration Solutions",
    details:
      "Video conferencing, unified comms, and collaboration platforms to connect distributed teams.",
  },
];

const Solutions = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div id="solutions" className="section solutions" ref={ref}>
      <div className="container">
        <h2>Our Solutions</h2>
        <div className="solutions-grid">
          {solutions.slice(0, 4).map((solution, index) => (
            <div
              key={solution.name}
              className={`solution-card ${inView ? "visible" : ""}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <h3>{solution.name}</h3>
              <p>{solution.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;
