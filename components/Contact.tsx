"use client";
import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <div id="contact" className="section contact">
      <div className="container contact-content">
        <h2>Contact Us</h2>
        <div className="contact-flex">
          <div className="contact-image">
            <Image
              src="/contact.png"
              alt="Contact Us"
              width={500}
              height={500}
              className="responsive-image"
            />
          </div>
          <div className="contact-info">
            <h3>Lagos</h3>
            <p>Yudala Heights Building, 13 Idowu Martins Street, Victoria Island, Lagos.</p>
            <h3>Port Harcourt</h3>
            <p>146 Trans Amadi Industrial Layout, Port Harcourt, Rivers State.</p>
            <h3>Abuja</h3>
            <p>20 Port Harcourt Crescent, off Gimbiya Street, Area 11 Garki District, Abuja.</p>
            <h3>Email</h3>
            <p>engage@tasksystems.com</p>
            <h3>Call</h3>
            <p>+234 911 080 8619</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
