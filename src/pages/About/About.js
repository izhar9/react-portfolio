import React from "react";
import "./About.css";

import profile from "../../assets/images/my_photo.jpg";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img src={profile} alt="Profile_Pic" />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About Me</h1>
              <p>
                As a beginner MERN stack developer, I'm enthusiastic about
                full-stack web development using MongoDB, Express, React, and
                Node.js. I have a solid foundation in HTML, CSS, and JavaScript,
                enabling me to create dynamic and responsive user interfaces.
                I'm comfortable with handling data in MongoDB and have
                experience in building RESTful APIs with Express. Additionally,
                I'm also know React, allowing me to craft interactive front-end
                components and manage state efficiently. I'm eager to expand my
                skills in handling authentication, routing, and integrating
                third-party libraries. I'm committed to continuous learning and
                excited about contributing to innovative web applications with
                the MERN stack.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
