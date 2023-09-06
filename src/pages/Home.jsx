import React from 'react'
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
import curriculum_vitae from "../assets/files/Samuel Abraham curriculum vitae.docx"
export default function HomePage() {
  function setClipboard(text) {
    const type = "text/plain";
    const blob = new Blob([ text ], { type });
    const data = [ new ClipboardItem({ [ type ]: blob }) ];
    navigator.clipboard.write(data).then(
      () => {
        // /* success */
      },
      () => {
        /* failure */
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
        hello
      </div>
      <div className="center">
        <div className="my-profile-wrapper">
          <div className="profile-img-wrapper">
            <img src={ profile_img } alt="" className='profile-img' />
          </div>
          <div className="profile-name-wrapper">
            <span className="profile-name">Samuel Abraham</span>
            <span className="profile-bio"> Mern-stack | Developer | Innovator | Engineer{/* | <span className="focus">Founder@Learnard</span>*/ } | Wiki-Editor | Scratch</span>
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
              <div className="action-btns">
                Portifolio Link
                <img src={ link_icon } alt="" />
              </div>
              <div className="action-btns">
                <Link to={ "../assets/files/Samuel Abraham curriculum vitae.docx" } download="Samuel_Abraham_CV" target="_blank" rel="noreferrer"
                >
                  Download CV
                  <img src="" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
