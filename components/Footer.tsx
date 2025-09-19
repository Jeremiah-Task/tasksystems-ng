import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import Image from "next/image";
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
            <a href="#home"><Image src="/logo.png" alt="Logo" width={100} height={70} /></a>
            <p className="footer-description">
             Task Systems Limited delivers trusted ICT solutions that empower businesses to stay secure, connected, and future-ready.
            </p>
          </div>

          <div id="contact" className="footerSection">
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
              <li><a href="#solutions">Solutions</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#why">Why Us</a></li>
              <li><a href="#team">Team</a></li>
            </ul>
          </div>
        </div>

        <div className="copyright">
          <p>Copyright © 2024 <strong>Task Systems</strong>, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
