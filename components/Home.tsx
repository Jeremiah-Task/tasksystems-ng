"use client";

import React from "react";
import Image from "next/image";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import "./Home.css";

const Home = () => {
  const slides = [
    "Where Innovation Knows No Bounds.",
    "...driving the Future Today.",
    "Contact us to learn more.",
  ];
  const text = useTypingEffect(slides);

  return (
    <div id="home" className="section hero">
      <Image
        src="/images/placeholder1.png"
        alt="Hero Image"
        fill
        className="hero-image"
        priority
      />
      <div className="hero-overlay"></div>

      <div className="hero-text-container">
        <div className="hero-text">
          <h1>
            {text}
            <span className="typing-cursor"></span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
