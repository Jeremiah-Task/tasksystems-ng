"use client";

import React from "react";
import Image from "next/image";
import "./Partners.css";

const Partners = () => {
  const partners = [
    { name: "APC", logo: "/partners/apc.png" },
    { name: "Apple", logo: "/partners/apple.png" },
    { name: "ASUS", logo: "/partners/asus.png" },
    { name: "AWS", logo: "/partners/aws.png" },
    { name: "Cisco", logo: "/partners/cisco.png" },
    { name: "CheckPoint", logo: "/partners/cp.png" },
    { name: "D-Link", logo: "/partners/d-link.jpeg" },
    { name: "Dell", logo: "/partners/dell.png" },
    { name: "EMC", logo: "/partners/emc.png" },
    { name: "HP", logo: "/partners/hp.png" },
    { name: "HPE", logo: "/partners/hpe.png" },
    { name: "Huawei", logo: "/partners/huawei.png" },
    { name: "IBM", logo: "/partners/ibm.png" },
    { name: "Kaspersky", logo: "/partners/kaspersky.png" },
    { name: "Lenovo", logo: "/partners/lenovo.png" },
    { name: "LogiTech", logo: "/partners/logitech.png" },
    { name: "Microsoft", logo: "/partners/microsoft.png" },
    { name: "NetApp", logo: "/partners/netapp.webp" },
    { name: "NeverFail", logo: "/partners/Nf.jpg" },
    { name: "Nokia", logo: "/partners/nokia_new.png" },
    { name: "Oracle", logo: "/partners/oracle.png" },
    { name: "Schneider Electric", logo: "/partners/Sch-ele.png" },
    { name: "Starlink", logo: "/partners/starlink.svg" },
    { name: "Zebra", logo: "/partners/zebra.png" },
  ];

  return (
    <div id="partners" className="section partners">
      <h2>Our Partners</h2>
      <div className="partners-wrapper">
        <div className="partners-slider">
          {partners.map((partner, index) => (
            <div key={index} className="partner">
              <Image src={partner.logo} alt={partner.name} width={150} height={100} />
              <p>{partner.name}</p>
            </div>
          ))}
          {/* Duplicate for seamless looping */}
          {partners.map((partner, index) => (
            <div key={index + partners.length} className="partner">
              <Image src={partner.logo} alt={partner.name} width={150} height={100} />
              <p>{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
