import React from "react";

const About = () => {
  return (
    <div id="about" className="section about">
      <div className="about-content container">
        <h2>About Us</h2>
        <p>
          Founded in 1987, Task Systems Ltd has evolved from a pioneering IT firm into one of Africa’s foremost System Integrators, driving digital transformation, intelligent automation, and AI-powered innovation across the continent. With nearly four decades of unwavering excellence, Task has become a trusted name in delivering impactful, scalable, and future-ready technology solutions to businesses in multiple sectors.
        </p>
        <div className="mission-vision-cards">
          <div className="card">
            <h3>Our Mission</h3>
            <p>
              &quot;To sustain a best-in-class technology solutions company that anticipates the future and delivers value to our customers, through a highly motivated and professional team.&quot;
            </p>
          </div>
          <div className="card">
            <h3>Our Vision</h3>
            <p>
              &quot;To be the leading and preferred technology solution provider in Africa, as adjudged by our customers and stakeholders, by the year 2030.&quot;
            </p>
          </div>
        </div>
        <div className="core-values-card card">
          <h3>Our Core Values</h3>
          <div className="mini-cards-grid">
            <div className="mini-card">
              <h4>Professionalism</h4>
              <p>in our staff, in our procedures and processes and in our services.</p>
            </div>
            <div className="mini-card">
              <h4>Responsiveness</h4>
              <p>to any and all factors that can affect our clients’ business productivity.</p>
            </div>
            <div className="mini-card">
              <h4>Integrity</h4>
              <p>we honestly and ethically take responsibility in order to earn the trust of our clients.</p>
            </div>
            <div className="mini-card">
              <h4>Dynamism</h4>
              <p>to deliver best value each time Excellence; to stand out from the competition.</p>
            </div>
            <div className="mini-card">
              <h4>Excellence</h4>
              <p>to stand out from competition.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
