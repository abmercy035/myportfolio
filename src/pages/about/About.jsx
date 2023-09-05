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
            I'm Abraham Samuel Bamidele, and I'm passionate about the world of technology and programming. As a Fullstack Developer specializing in JavaScript, I thrive on the ever-evolving nature of this field. I believe in the power of continuous learning and have made it my primary focus to acquire the skills necessary for my personal growth and development.
          </p>
          {/* <p>Driven by my love for moral and decent society and generation. I firmly believe that knowledge is most valuable when it's shared and imparted, and I take great joy in helping others understand complex concepts and navigate the world of programming.</p> */ }
          <p>
            In a world that relies on technology more than ever, I am committed to using my skills and passion for programming to create meaningful change and foster a culture of continuous learning and knowledge dissemination. May God help me on this exciting journey of discovery and innovation!
          </p>
          <p>
            <h3>My Interest Includes</h3>
            <div>
              Software Engineering | Complex Problem-solving | Client Satisfaction | Team Collaboration | Continuous Improvement
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
