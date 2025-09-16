// components/Footer.js
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contactSection}>
          <h2 className={styles.sectionTitle}>Give Us A Call</h2>
          <p className={styles.phoneNumber}>+319-490-4589</p>
        </div>
        
        <div className={styles.newsletterSection}>
          <h2 className={styles.sectionTitle}>Join Our Newsletter</h2>
          <input 
            type="email" 
            placeholder="Enter Your Email"
            className={styles.emailInput}
          />
        </div>
        
        <hr className={styles.divider} />
        
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.brandName}>Paneli</h3>
            <p className={styles.description}>
              Cybersecurity is crucial in today's digital age, where many individuals 
              and organizations store a significant amount of sensitive data on computers...
            </p>
          </div>
          
          <div className={styles.footerSection}>
            <h4 className={styles.subtitle}>Contact Us</h4>
            <p className={styles.contactInfo}>
              <strong>Address:</strong> 521684 Majadra Street Victoria Road, New York.<br />
              <strong>Email:</strong> Pahell@gmail.com<br />
              <strong>Phone:</strong> +5-547-254-3526
            </p>
          </div>
          
          <div className={styles.footerSection}>
            <h4 className={styles.subtitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              <li>About</li>
              <li>Services</li>
              <li>Testimonial</li>
              <li>Our Blog</li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h4 className={styles.subtitle}>Resources</h4>
            <ul className={styles.linkList}>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        
        <div className={styles.copyright}>
          <p>Copyright © 2024 <strong>Pahell</strong>, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;