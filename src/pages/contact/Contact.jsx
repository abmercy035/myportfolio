import React from 'react'
import back_icon from "../../assets/long_left.svg"
import mail from "../../assets/mail.svg"
import { useNavigate } from 'react-router-dom'
import "./contact.css"
import GoBackHistoryBar from '../../components/GoBackHistoryBar'

export default function Contact() {
  const navigate = useNavigate()
  return (

    <div className='contact-page column gap20'>
      <GoBackHistoryBar />
      <div className='contact-intro column jcc aic gap10'>
        <div className="intro-header jcc">
          Contact Me
        </div>
        <div className="intro-text jcc aic p10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illo, earum cumque modi sapiente ad tenetur minus perferendis placeat molestiae.
        </div>
      </div>
      <div className="contact-wrapper column jcc aic " >
        <form className='column jcc aic gap10'>
          <label className='column jcc ais gap5'>
            <span>
              Full name
            </span>
            <input type="text" placeholder="Enter full name" />
          </label>
          <label className='column jcc ais gap5'>
            <span>
              Email
            </span>
            <input type="text" placeholder="Enter Email Address" />
          </label>
          <label className='column jcc ais gap5'>
            <span>
              Subject
            </span>
            <input type="text" placeholder="Subject" />
          </label>
          <label className='column jcc ais gap5'>
            <span>
              Message
            </span>
            <textarea placeholder="Message" col="3"></textarea>
          </label>
          <input type="submit" value="Send" className='submit-form' />
        </form>
      </div>

    </div>
  )
}
