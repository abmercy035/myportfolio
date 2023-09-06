import React, { useRef } from 'react';
import "./about.css"
import genztechies_icon from "../../assets/genztechies.png"
import scratch_icon from "../../assets/scratch.png"
import I4G_icon from "../../assets/i4g.png"
import gdsc_icon from "../../assets/gdsc.png"
import css_icon from "../../assets/css.svg"
import html_icon from "../../assets/html.svg"
import jwt_icon from "../../assets/jwt.svg"
import js_icon from "../../assets/js-square.svg"
import beautwealt from "../../assets/beautwealt.jpg"
import wikimedia from "../../assets/wikimedia.png"
import mongoose_icon from "../../assets/mongoose.png"
import bcrypt_icon from "../../assets/bcrypt.jpg"
import react_icon from "../../assets/react.svg"
import nodejs_icon from "../../assets/node-js.svg"
import express_icon from "../../assets/express_icon.svg"
import git_icon from "../../assets/git-version.svg"
import mongodb_icon from "../../assets/mongodb.svg"
import GoBackHistoryBar from '../../components/GoBackHistoryBar'

export default function About() {
  return (
    <div className='about-page'>
      <GoBackHistoryBar />
      <div className='about-page-intro'>
        <div className="about-page-intro-header">
          About Me
        </div>
        <div className="about-page-intro-text">
          <p>
            I'm Abraham Samuel Bamidele, a passionate JavaScript Developer with expertise in ReactJs and Nodejs inclusive, driven by a love for continuous learning and sharing knowledge. My journey is defined by a commitment to building a better society through technology. I thrive in the ever-evolving field of software development and believe in the power of ongoing learning to fuel my personal growth and development.
          </p>

          <p>
            With a solid background in software engineering, I bring extensive expertise to develop advanced software solutions. I possess a comprehensive understanding of cutting-edge technologies, frameworks, and methodologies, enabling me to excel in designing and delivering efficient, high-quality software applications. Collaboration is a cornerstone of my approach, as I actively engage with cross-functional teams to ensure seamless integration and successful project outcomes. I'm deeply committed to staying at the forefront of industry trends and continually expanding my skill set through ongoing learning and professional development.
          </p>
          {/* <p>Driven by my love for moral and decent society and generation. I firmly believe that knowledge is most valuable when it's shared and imparted, and I take great joy in helping others understand complex concepts and navigate the world of programming.</p> */ }
          <p>
            <h3>My Interest Includes</h3>
            <div>
              Software Engineering | Complex Problem-solving | Client Satisfaction | Team Collaboration | Continuous Improvement | Knowledge Management/Sharing

            </div>
          </p>
        </div>
      </div>
      <div className="about-sections-wrapper">
        <div className="about-sections-header">TOP EXPERTISE</div>
        <div className="expertise-wrapper">
          <div className="about-sections">
            <div className="sec-title">Frontend Development</div>
            <div className="skills">
              <img src={ html_icon } alt="" />
              <img src={ css_icon } alt="" />
              <img src={ js_icon } alt="" />
              <img src={ react_icon } alt="" />
            </div>
          </div>
          <div className="about-sections">
            <div className="sec-title">Backend Development</div>
            <div className="skills">
              <img src={ nodejs_icon } alt="" />
              <img src={ express_icon } alt="" />
            </div>
          </div>
          <div className="about-sections">
            <div className="sec-title">Database Management</div>
            <div className="skills">
              <img src={ mongoose_icon } alt="" />
              <img src={ mongodb_icon } alt="" />
            </div>
          </div>
          <div className="about-sections">
            <div className="sec-title">Version Control</div>
            <div className="skills">
              <img src={ git_icon } alt="" />
            </div>
          </div>
          <div className="about-sections">
            <div className="sec-title">Security and Authentication</div>
            <div className="skills">
              <img src={ bcrypt_icon } alt="" />
              <img src={ jwt_icon } alt="" />
            </div>
          </div>
          <div className="about-sections">
            <div className="sec-title">Game Development</div>
            <div className="skills">
              <img src={ scratch_icon } alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="about-sections-wrapper">
        <div className="about-sections-header">COMMUNITY CONSTELLATIONS</div>
        <div className="community-wrapper">
          <div className="community">
            <img src={ gdsc_icon } alt="" />
            <img src={ beautwealt } alt="" />
            <img src={ I4G_icon } alt="" />
            <img src={ wikimedia } alt="" />
            <img src={ genztechies_icon } alt="" />
          </div>
        </div>
      </div>
      <a target="_blank" href="https://icons8.com" style={ { color: "#666", padding: "10px" } }>  icons by Icons8</a>
    </div>
  )
}
