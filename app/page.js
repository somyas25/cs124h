import React from "react";
import "../styles/global.css";
import "../styles/Homepage.css";
import dynamic from "next/dynamic";

import NavbarWrapper from "../components/navbarWrapper";

export default function Home() {
  return (
    <div>
      <NavbarWrapper />
      <main className="main-container">
        <div className="text-wrapper">
          <h1 className="home-title">CS124Honors@Illinois</h1>
          <p className="subtitle">
            Illinois' premier freshman honors class run by students, for
            students.
          </p>
        </div>
      </main>

      <section className="about-section">
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            CS124 Honors is an add-on to CS 124 that lets you blend creativity
            and learning through a hands-on, project-based experience. You will
            work under the support of Project Managers and collaborate closely
            with other students.
            <br />
            <br />
            You will be a part of a welcoming community and expand your network
            and expertise through workshops, events, and other enriching
            opportunities. At the end of this journey, you will have brought a
            project to life from start to finish!
          </p>

          <div className="video-wrapper">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/eIJvoSkfCGc"
              title="CS124 Honors Overview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
