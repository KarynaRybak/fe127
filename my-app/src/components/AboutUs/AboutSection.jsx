import React from "react";
import { Link } from "react-router-dom";
import "../AboutUs/about.section.scss";

function AboutSection({ activeLink }) {
  return (
    <section className="AboutUs">
      <div className="container">
        <div className="row">
          <h2>About Us</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
              <li className="activeAbout">{activeLink}</li>
          </ul>
        </div>
      </div>
    </section>
    );
  }
  export default AboutSection;
