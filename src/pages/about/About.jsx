import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom'
import "./about.css"
import genztechies_icon from "../../assets/genztechies.png"
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
    <div className='about-page column gap20'>
      <GoBackHistoryBar />
      <div className='about-intro column jcc aic gap30'>
        <div className="intro-header jcc">
          About Me
        </div>
        <div className="intro-text column jcic gap10 p10">
          <p>
            My name is Abraham Samuel Bamidele, A Fullstack Developer with Javascript.
            A strong desire to learn new things and a primary focus on acquiring necessary skills for personal
            development. an avid reader who spends a lot of time reading self-help, career, financial development, and
            spiritual book collections, Furthermore, very enthusiastic about working out and maintaining my fitness.
          </p>
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
          </div>
        </div>
        <div className="about-sections-wrapper">
          <div className="about-sections-header">SOFT SKILLS</div>
          <div className="expertise-wrapper">
            <div className="about-sections">
              <div className="skills">

              </div>
            </div>
          </div>
        </div>
        <div className="about-sections-wrapper">
          <div className="about-sections-header">ACTIVE COMMUNITIES</div>
          <div className="expertise-wrapper">
            <div className="about-sections">
              <div className="skills">
                <img src={ gdsc_icon } alt="" />
                <img src={ beautwealt } alt="" />
                <img src={ I4G_icon } alt="" />
                <img src={ wikimedia } alt="" />
                <img src={ genztechies_icon } alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <a target="_blank" href="https://icons8.com" style={ { color: "#666", padding: "10px" } }>  icons by Icons8</a>
    </div>
  )
}
