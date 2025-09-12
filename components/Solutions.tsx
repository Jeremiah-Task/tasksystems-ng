"use client";

import { useState, useEffect } from "react";
import "./Solutions.css";

const solutions = [
  {
    name: "Network Solutions",
    details:
      "Our comprehensive network solutions provide robust, scalable, and secure connectivity infrastructure tailored to meet your organization's specific requirements. From LAN/WAN implementation to advanced routing and switching solutions.",
  },
  {
    name: "Enterprise Mobility",
    details:
      "Enable your workforce with secure mobile device management, application deployment, and enterprise mobility solutions that enhance productivity while maintaining security compliance.",
  },
  {
    name: "Convergence Solutions",
    details:
      "Integrate voice, video, and data communications into unified platforms that streamline operations and reduce infrastructure complexity while improving efficiency.",
  },
  {
    name: "Collaboration Solutions",
    details:
      "Modern collaboration tools including video conferencing, unified communications, and team collaboration platforms that connect your distributed workforce seamlessly.",
  },
  {
    name: "Security Solutions",
    details:
      "Comprehensive cybersecurity solutions including network security, endpoint protection, threat detection, and compliance management to safeguard your digital assets.",
  },
  {
    name: "Enterprise Applications",
    details:
      "Custom enterprise applications and software solutions designed to optimize business processes, improve efficiency, and drive digital transformation initiatives.",
  },
  {
    name: "Managed Support",
    details:
      "24/7 professional support services including system monitoring, maintenance, troubleshooting, and proactive management to ensure optimal system performance.",
  },
  {
    name: "Cloud Solutions",
    details:
      "Scalable cloud infrastructure, migration services, and cloud-native solutions that provide flexibility, cost-efficiency, and enhanced business continuity.",
  },
];

const Solutions = () => {
  const [activeSolution, setActiveSolution] = useState(solutions[0]);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleAccordion = (name: string) => {
    if (isMobile) {
      setActiveAccordion(activeAccordion === name ? null : name);
    }
  };

  return (
    <div id="solutions" className="section solutions">
      <div className="container">
        <h2>Our Solutions</h2>
        <div className="solutions-content">
          <div className="solutions-list">
            {solutions.map((solution) => (
              <div key={solution.name}>
                <div
                  className={`solution-item ${activeSolution.name === solution.name && !isMobile ? "active" : ""
                    }`}
                  onClick={() => {
                    setActiveSolution(solution);
                    handleAccordion(solution.name);
                  }}
                >
                  <span className="solution-title">{solution.name}</span>
                  <span className="solution-icon">
                    {isMobile
                      ? activeAccordion === solution.name
                        ? "−"
                        : "+"
                      : activeSolution.name === solution.name
                        ? "−"
                        : "+"}
                  </span>
                </div>
                {isMobile && (
                  <div
                    className={`solution-details-mobile ${activeAccordion === solution.name ? "open" : ""
                      }`}
                  >
                    <p>{solution.details}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          {!isMobile && (
            <div className="solution-details">
              <h3>{activeSolution.name}</h3>
              <p>{activeSolution.details}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Solutions;
