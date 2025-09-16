// components/Footer.js
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="contactSection">
          <h2 className="sectionTitle">Give Us A Call</h2>
          <p className="phoneNumber">+319-490-4589</p>
        </div>
        
        <div className="newsletterSection">
          <h2 className="sectionTitle">Join Our Newsletter</h2>
          <input 
            type="email" 
            placeholder="Enter Your Email"
            className="emailInput"
          />
        </div>
        
        <hr className="divider" />
        
        <div className="footerContent">
          <div className="footerSection">
            <h3 className="brandName">Paneli</h3>
            <p className="description">
              Cybersecurity is crucial in today's digital age, where many individuals 
              and organizations store a significant amount of sensitive data on computers...
            </p>
          </div>
          
          <div className="footerSection">
            <h4 className="subtitle">Contact Us</h4>
            <p className="contactInfo">
              <strong>Address:</strong> 521684 Majadra Street Victoria Road, New York.<br />
              <strong>Email:</strong> Pahell@gmail.com<br />
              <strong>Phone:</strong> +5-547-254-3526
            </p>
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
          
          <div className="footerSection">
            <h4 className="subtitle">Resources</h4>
            <ul className="linkList">
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Contact Us</li>
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
