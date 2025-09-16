// app/page.tsx (or pages/index.tsx)
import React from "react";
import "./Why.css";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";

export default function Why() {
    return (
        <section className="whyChoose">
            <div className="whyWrapper">
                {/* Left side: text */}
                <div className="whyText">
                    <p className="title">Why Choose Us?</p>
                    <p className="tagline">
                        <strong>Digital Vigilance: Strengthening Cyber Defenses in the Modern.</strong>
                    </p>

                    <ul className="list">
                        <li>
                            <IoCheckmarkDoneSharp className="checkIcon" />
                            Vulnerability Assessment and Penetration Testing
                        </li>
                        <li>
                            <IoCheckmarkDoneSharp className="checkIcon" />
                            Identity and Access Management (IAM)
                        </li>
                        <li>
                            <IoCheckmarkDoneSharp className="checkIcon" />
                            Security Information and Event Management
                        </li>
                        <li>
                            <IoCheckmarkDoneSharp className="checkIcon" />
                            Security Auditing and Compliance
                        </li>
                        <li>
                            <IoCheckmarkDoneSharp className="checkIcon" />
                            This service involves responding to security
                        </li>
                    </ul>

                    <a href="#learn-more" className="cta">
                        <span className="ctaIconWrapper">
                            <FaArrowRight className="ctaIcon" />
                        </span>
                        Learn More
                    </a>
                </div>

                {/* Right side: images */}
                <div className="whyImages">
                    <div className="imgContainer">
                        <img src="/contact.png" className="img" alt="Image 1" />
                        <img src="/contact.png" className="img" alt="Image 2" />
                        <img src="/contact.png" alt="Circle" className="circleOverlay" />
                    </div>
                </div>
            </div>
        </section>
    );
}
