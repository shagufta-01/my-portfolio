import React from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";

const App = () => {
  return (
    <div className="landing-page" id="home">
      <Navbar />
      <header className="hero">
        <div className="intro">
          <h1>Hi, I'm Defne</h1>
          <h2>Frontend Developer & AI Enthusiast</h2>
          <p>
            I build clean, modern, and responsive web applications. Passionate
            about AI, tech, and creating solutions that matter.
          </p>
          <a href="#contact" className="hire-me-btn">
            Hire Me
          </a>
        </div>
      </header>

      {/* Add other sections */}
      {/* <section id="about">
        <h2>About Me</h2>
        <p>Here goes about me section...</p>
      </section>

      <section id="services">
        <h2>Services</h2>
        <p>Here goes services section...</p>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Contact form will go here...</p>
      </section> */}
    </div>
  );
};

export default App;
