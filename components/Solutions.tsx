"use client";

import "./Solutions.css";

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
  {
    name: "Security Solutions",
    details:
      "Cybersecurity including endpoint protection, threat detection, and compliance management.",
  },
  {
    name: "Enterprise Applications",
    details:
      "Custom apps to optimize processes, improve efficiency, and drive digital transformation.",
  },
  {
    name: "Managed Support",
    details:
      "24/7 monitoring, maintenance, and proactive support to ensure optimal performance.",
  },
  {
    name: "Cloud Solutions",
    details:
      "Scalable infrastructure, migration, and cloud-native services for flexibility and continuity.",
  },
];

const Solutions = () => {
  return (
    <div id="solutions" className="section solutions">
      <div className="container">
        <h2>Our Solutions</h2>
        <div className="solutions-grid">
          {solutions.map((solution) => (
            <div key={solution.name} className="solution-card">
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
