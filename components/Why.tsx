import React from "react";
import Image from "next/image";
import "./Why.css";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";

export default function Why() {
    return (
        <section id="why" className="whyChoose">
            <div className="whyWrapper">
                {/* Left side: text */}
                <div className="whyText">
                    <p className="title">Why Choose Us?</p>
                    <p className="tagline">
                        <strong>Empowering Businesses Through Trusted ICT Solutions</strong>
                    </p>

                    <ul className="list">
                        <li>
                            <IoCheckmarkDoneSharp className="checkIcon" />
                            {`Proven expertise in ICT solutions`}
                        </li>
                        <li>
                            <IoCheckmarkDoneSharp className="checkIcon" />
                            {`Trusted partnerships with global leaders`}
                        </li>
                        <li>
                            <IoCheckmarkDoneSharp className="checkIcon" />
                            {`End-to-end ICT service delivery`}
                        </li>
                        <li>
                            <IoCheckmarkDoneSharp className="checkIcon" />
                            {`Quality assurance with ISO standards`}
                        </li>
                        <li>
                            <IoCheckmarkDoneSharp className="checkIcon" />
                            {`Local commitment to talent growth`}
                        </li>
                    </ul>

                    <a href="#services" className="cta">
                        <span className="ctaIconWrapper">
                            <FaArrowRight className="ctaIcon" />
                        </span>
                        Explore Services
                    </a>
                </div>

                {/* Right side: images */}
                <div className="whyImages">
                    <div className="imgContainer">
                        <Image src="/left-image.png" className="img" alt="Image 1" width={300} height={200} />
                        <Image src="/right-image.png" className="img" alt="Image 2" width={300} height={200} />
                        <Image src="/center-image.png" alt="Circle" className="circleOverlay" width={100} height={100} />
                    </div>
                </div>
            </div>
        </section>
    );
}
