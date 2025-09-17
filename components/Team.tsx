"use client";

import React from "react";
import Image from "next/image";
import "./Team.css";

const directors = [
  { name: "Leo-Stan Ekeh", title: "Chairman", image: "/team/leo-stan.png" },
  { name: "Chioma Ekeh", title: "Director", image: "/team/chioma.jpg" },
  { name: "Agatha Ukoha", title: "Director", image: "/team/agatha.jpg" },
];

const management = [
  { name: "Gozy Ijogun", title: "CEO", image: "/team/gozy.png" },
  { name: "Eky Ovie-Fidelis", title: "General Manager", image: "/team/eky.png" },
  { name: "Charles Adigwe", title: "Executive Director", image: "/team/charles.png" },
  { name: "Henrietta Onyebuchi-Akobi", title: "CFO", image: "/team/henrietta.png" },
  { name: "Ifeoma Chigbo-Ndukwe", title: "HR Manager", image: "/team/ifeoma.jpg" },
  { name: "Ugonna Onyido-Okoro", title: "Compliance Manager", image: "/team/ugonna.png" },
];

const Team = () => {
  return (
    <div id="team" className="section team">
      <div className="container">
        {/* Removed <h2>Directors and Management</h2> */}

        <h2>Directors</h2>
        <div className="team-grid">
          {directors.map((person) => (
            <div key={person.name} className="profile-card">
              <Image
                src={person.image}
                alt={person.name}
                width={250}
                height={400}
                className="profile-img"
              />
              <h4>{person.name}</h4>
              <p>{person.title}</p>
            </div>
          ))}
        </div>

        <h2 style={{ marginTop: "4rem" }}>Management</h2>
        <div className="team-grid">
          {management.map((person) => (
            <div key={person.name} className="profile-card">
              <Image
                src={person.image}
                alt={person.name}
                width={250}
                height={400}
                className="profile-img"
              />
              <h4>{person.name}</h4>
              <p>{person.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
