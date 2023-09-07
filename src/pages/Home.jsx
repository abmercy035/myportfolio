import React, { useEffect, useState } from 'react'
import profile_img from "../assets/myprofile.jpg"
import linkedin_icon from "../assets/linkedin-in.svg"
import twitter_icon from "../assets/twitter.svg"
import instagram_icon from "../assets/instagram.svg"
import git_icon from "../assets/github.svg"
import bulb_icon from "../assets/bulb.svg"
import projects_icon from "../assets/project-diagram.svg"
import link_icon from "../assets/link_02.svg"
import mail from "../assets/mail.svg"
import about_icon from "../assets/user.svg"
import briefcase_icon from "../assets/briefcase.svg"
import background_icon from "../assets/backgrounds.png"
import { Link, useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar'
import curriculum_vitae from "/files/Samuel Abraham curriculum vitae.docx"

export default function HomePage() {
  const randomQuotes = () => {
    fetch('/files/quotes.json').then(res => res.json()).then((data) => {
      const quote = data[ Math.floor(Math.random() * data.length) ]
      document.querySelector("#quote-text").textContent = quote.text
      document.querySelector("#quote-author").textContent = quote.author
      document.querySelector(".quotes").style.display = "flex"
    })
  }

  function download() {
    var element = document.createElement('a');
    element.setAttribute('href', curriculum_vitae);
    element.setAttribute('download', "Samuel_Abraham_CV");
    element.setAttribute('rel', "noreferrer");
    element.style.display = 'none';
    document.body.appendChild(element);
    document.querySelector("#pop-alert").style.display = "flex"
    document.querySelector("#pop-alert").textContent = "downloading should start in 3secs"
    element.click();
    setTimeout(() => {
      document.querySelector("#pop-alert").style.display = "none"
    }, 4000)
    document.body.removeChild(element);
  }
  function setClipboard(text) {

    const type = "text/plain";
    const blob = new Blob([ text ], { type });
    const data = [ new ClipboardItem({ [ type ]: blob }) ];
    navigator.clipboard.write(data).then(
      () => {
        document.querySelector("#pop-alert").style.display = "flex"
        document.querySelector("#pop-alert").textContent = "Link Copied"
        setTimeout(() => {
          document.querySelector("#pop-alert").style.display = "none"
        }, 1000)
      },
      () => {
        setTimeout(() => {
          document.querySelector("#pop-alert").style.display = "none"
          document.querySelector("#pop-alert").textContent = "Sorry Link was unable Copied https://javascript-enthusiast.onrender.com/"
        }, 7000)
      }
    );
  }

  const navigate = useNavigate();
  return (
    <div className='home-page'>
      <div className="left-nav">
        <NavBar icon_1={ about_icon }
          action_1={ () => navigate("/about-me") }
          action_2={ () => navigate("/projects") }
          action_3={ () => randomQuotes("/projects") }
          icon_2={ projects_icon } icon_3={ bulb_icon } />
      </div>
      <div className="right-nav">
        <NavBar icon_1={ briefcase_icon }
          action_3={ () => navigate("/contact-me") }
          action_2={ () => navigate("/background") }
          action_1={ () => navigate("/experince") }
          icon_2={ background_icon } icon_3={ mail } />
      </div>
      <div id="pop-alert">
        Link Copied
      </div>
      <div className="quotes timing">
        <span className='close' onClick={ () => document.querySelector(".quotes").style.display = "none" }>X</span>
        <h5>
          <q id='quote-text'>The best way to predict the future is to create it.</q>
        </h5>

        <span id='quote-author'>Learnard</span>
      </div>
      <div className="center">
        <div className="my-profile-wrapper">
          <div className="profile-img-wrapper">
            <img src={ profile_img } alt="" className='profile-img' />
          </div>
          <div className="profile-name-wrapper">
            <span className="profile-name">Samuel Abraham</span>
            <span className="profile-bio">React Developer | Innovator | Engineer{/* | <span className="focus">Founder@Learnard</span>*/ } | Wiki-Editor</span>
            <span className="profile-bio"> abmercy035@gmail.com | +2347026889064</span>
          </div>
          <div className="profile-social-wrapper">
            <div className="profile-social-accounts">
              <Link to="https://www.linkedin.com/in/javascriptenthusiat/" target="_blank">
                <img src={ linkedin_icon } alt="" className="social-account-icon" />
              </Link>
              <Link to="https://twitter.com/DevAbraham035" target="_blank">
                <img src={ twitter_icon } alt="" className="social-account-icon" />
              </Link>
              <Link to="https://www.instagram.com/developer_abraham/" target="_blank">
                <img src={ instagram_icon } alt="" className="social-account-icon" />
              </Link>
              <Link to="https://github.com/abmercy035/" target="_blank">
                <img src={ git_icon } alt="" className="social-account-icon" />
              </Link>
            </div>
          </div>
          <div className="profile-action-btns-wrapper">
            <div className="profile-action-btns">
              <div className="action-btns" onClick={ () => setClipboard("https://javascript-enthusiast.onrender.com/") }>
                Portifolio Link
                <img src={ link_icon } alt="" />
              </div>
              <div className="action-btns" onClick={ download }>

                Download CV
                <img src="" alt="" />

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
