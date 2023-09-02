import React from 'react'
import profile_img from "../assets/myprofile.jpg"
import linkedin_icon from "../assets/linkedin-in.svg"
import twitter_icon from "../assets/twitter.svg"
import instagram_icon from "../assets/instagram.svg"
import git_icon from "../assets/github.svg"
import home_icon from "../assets/home.svg"
import projects_icon from "../assets/project-diagram.svg"
import link_icon from "../assets/link_02.svg"
import mail from "../assets/mail.svg"
import skills_icon from "../assets/user.svg"
import briefcase_icon from "../assets/briefcase.svg"
import background_icon from "../assets/backgrounds.png"
import { useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar'
export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className='home-page'>
      <div className="left-nav">
        <NavBar icon_1={ skills_icon }
          action_1={ () => navigate("/about-me") }
          action_2={ () => navigate("/projects") }
          icon_2={ projects_icon } icon_3={ skills_icon } />
      </div>
      <div className="right-nav">
        <NavBar icon_1={ briefcase_icon }
          action_3={ () => navigate("/contact-me") }
          action_2={ () => navigate("/background") }
          action_1={ () => navigate("/experince") }
          icon_2={ background_icon } icon_3={ mail } />
      </div>
      <div className="center">
        <div className="my-profile-wrapper">
          <div className="profile-img-wrapper">
            <img src={ profile_img } alt="" className='profile-img' />
          </div>
          <div className="profile-name-wrapper">
            <span className="profile-name">Samuel Abraham</span>
            <span className="profile-bio">Mern | Frontend | Backend | React | Node | Express</span>
          </div>
          <div className="profile-social-wrapper">
            <div className="profile-social-accounts">
              <img src={ linkedin_icon } alt="" className="social-account-icon" />
              <img src={ twitter_icon } alt="" className="social-account-icon" />
              <img src={ instagram_icon } alt="" className="social-account-icon" />
              <img src={ git_icon } alt="" className="social-account-icon" />
            </div>
          </div>
          <div className="profile-action-btns-wrapper">
            <div className="profile-action-btns">
              <div className="action-btns">
                Portifolio Link
                <img src={ link_icon } alt="" />
              </div>
              <div className="action-btns">
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
