import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa"; // import arrow
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Top row: Call & Newsletter */}
        <div className="topRow">
          <div className="contactSection">
            <div className="iconCircle">
              <FaPhoneAlt />
            </div>
            <div className="contactText">
              <p className="sectionTitle">Give Us A Call</p>
              <p className="phoneNumber">+234 911 080 8619</p>
            </div>
          </div>

          <div className="newsletterSection">
            <p className="sectionTitle">Join Our Newsletter</p>
            <div className="newsletterInputWrapper">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="emailInput"
              />
              <button className="newsletterBtn">
                <span className="iconCircleBtn">
                  <FaLocationArrow />
                </span>
                <span>Subscribe</span>
              </button>
            </div>
          </div>
        </div>

        <hr className="divider" />

        <div className="footerContent">
          <div className="footerSection">
            <h3 className="brandName">Pahell</h3>
            <p className="footer-description">
              Cybersecurity is crucial in today&apos;s digital age, where many individuals
              and organizations store a significant amount of sensitive data on computers...
            </p>
          </div>

          <div className="footerSection">
            <h4 className="subtitle">Contact Us</h4>
            <div className="contactInfo">
              <p><strong>Lagos:</strong> Yudala Heights Building, 13 Idowu Martins Street, Victoria Island, Lagos.</p>
              <p><strong>Port Harcourt:</strong> 146 Trans Amadi Industrial Layout, Port Harcourt, Rivers State.</p>
              <p><strong>Abuja:</strong> 20 Port Harcourt Crescent, off Gimbiya Street, Area 11 Garki District, Abuja.</p>
              <p><strong>Email:</strong> engage@tasksystems.com</p>
            </div>
          </div>

          <div className="footerSection">
            <h4 className="subtitle">Quick Links</h4>
            <ul className="linkList">
              <li>About</li>
              <li>Services</li>
              <li>Testimonial</li>
              <li>Our Blog</li>
            </ul>
          </div>
        </div>


        <div className="copyright">
          <p>Copyright © 2024 <strong>Pahell</strong>, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
