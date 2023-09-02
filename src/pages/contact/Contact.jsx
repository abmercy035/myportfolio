import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom'
import "./contact.css"
import GoBackHistoryBar from '../../components/GoBackHistoryBar'

export default function Contact() {
  const form = useRef();
  const formMsg = useRef();
  const submitBtn = useRef();

  const showFormMsg = (msg, error) => {
    formMsg.current.style.display = "flex";
    if (error) formMsg.current.style.color = "tomato"
    else formMsg.current.style.color = "royalblue"
    formMsg.current.textContent = msg
    setTimeout(() => {
      formMsg.current.style.display = "none"
    }, 3000)
  }

  const sendEmail = (e) => {
    submitBtn.current.disabled = "true"
    submitBtn.current.style.backgroundColor = "#666"

    e.preventDefault();
    if (form.current.user_name.value && form.current.user_email.value && form.current.subject.value && form.current.message.value)
      emailjs.sendForm(import.meta.env.VITE_YOUR_SERVICE_ID, import.meta.env.VITE_YOUR_TEMPLATE_ID, form.current, import.meta.env.VITE_YOUR_PUBLIC_KEY)
        .then((result) => {
          result.status === 200 &&
            showFormMsg("Message Sent ✔");
          form.current.user_name.value = "";
          form.current.user_email.value = "";
          form.current.subject.value = ""
          form.current.message.value = ""
          submitBtn.current.disabled = "false"
        }, (error) => {
          if (error === "")
            return showFormMsg("Please check you newtwork connection", true)
          showFormMsg(error.text, true)
          submitBtn.current.disabled = "false"
        })
    else {
      submitBtn.current.disabled = "false"
      showFormMsg("please fill the form completely!", true)
    }
  };

  return (
    <div className='contact-page column gap20'>
      <GoBackHistoryBar />
      <div className="form-message-popup" ref={ formMsg }>
      </div>
      <div className='contact-intro column jcc aic gap10'>
        <div className="intro-header jcc">
          Contact Me
        </div>
        <div className="intro-text jcc aic p10">
          Thank you for reaching out! Feel free to send me a message using the form below. I look forward to connecting with you.
        </div>
      </div>
      <div className="contact-wrapper column jcc aic " >
        <form className='column jcc aic gap10' ref={ form } onSubmit={ sendEmail }>
          <label className='column jcc ais gap5'>
            <span>
              Full name
            </span>
            <input type="text" placeholder="Enter full name" name="user_name" />
          </label>
          <label className='column jcc ais gap5'>
            <span>
              Email
            </span>
            <input type="text" placeholder="Enter Email Address" name="user_email" />
          </label>
          <label className='column jcc ais gap5'>
            <span>
              Subject
            </span>
            <input type="text" placeholder="Subject" name="subject" />
          </label>
          <label className='column jcc ais gap5'>
            <span>
              Message
            </span>
            <textarea placeholder="Message" col="3" name="message" ></textarea>
          </label>
          <input type="submit" value="Send Message" className='submit-form' ref={ submitBtn } />
        </form>
      </div>

    </div>
  )
}
