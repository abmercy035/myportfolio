import React from 'react'
import tick_tack_toe_img from "../../assets/tick-tack-toe.png"
import signup_page from "../../assets/sign-page.png"
import rock_paper_scissors_img from "../../assets/rock-paper-scissors.png"
import img1 from "../../assets/web-todoapp.png"
import img2 from "../../assets/img2.png"
import img3 from "../../assets/img3.webp"
import fullstack_icon from "../../assets/fullstack.svg"
import fromtend_icon from "../../assets/frontend.svg"
import javascript_icon from "../../assets/js-square.svg"
import "./projects.css"
import { useNavigate } from 'react-router-dom'
import GoBackHistoryBar from '../../components/GoBackHistoryBar'
import NavBar from '../../components/NavBar'
import ProjectCard from '../../components/projectCard/ProjectCard'
export default function Projects() {
  const scroller = (section) => {
    const scrollele = document.querySelector(section);
    scrollele.scrollIntoView({ block: "center", behavior: "smooth" })
  }
  return (
    <>
      <div className='projects-page'>
        <GoBackHistoryBar />
        <div className="right-nav hide">
          <NavBar
            action_2={ () => scroller("#frontend") }
            action_3={ () => scroller("#fullstack") }
            icon_2={ fromtend_icon } icon_3={ fullstack_icon } />
        </div>
        <div className="projects-page-intro">
          <div className="projects-page-intro-header">My Projects</div>
          <div className="projects-page-intro-text">
            <p>
              My true passion lies in programming, where I see it as a means to create innovative applications that can contribute to a morally upright, decent society, and a better generation. I have undertaken several projects that reflect my dedication to this cause. While I've worked on numerous initiatives, I want to emphasize that my practical experience extends beyond the projects listed here.
            </p>
            <p>
              I find immense satisfaction in building software solutions that make a significant impact, especially through knowledge management and sharing. My goal is to ensure that appropriate and valuable information reaches the right people, ultimately enhancing the lives of those who benefit from it, and also helping others grasp complex concepts and navigate the programming world.        </p>
          </div>
        </div>
        <div className="projects-wrapper">
          <div className="projects-section" >
            <div className="project-header" >
              FRONTEND
            </div>
            <div className="project-details" id="frontend">
              Projects built using HTML, CSS, and  Vanilla Javascript || React.Js.
            </div>
            <div className="projects">
              <ProjectCard img={ tick_tack_toe_img }
                liveLink={ "https://abmercy035.github.io/Tick-Tack-Toe-Game/" }
                gitink={ "https://github.com/abmercy035/Tick-Tack-Toe-Game" }
                text={ "A Responsive Rock Paper Scissors Game using HTML, CSS and Javascript " } />
              <ProjectCard img={ signup_page }
                liveLink={ "https://abmercy035.github.io/formValidation/" }
                gitink={ "https://github.com/abmercy035/formValidation" }
                text={ "A Responsive Odin Sign up page, Validates Email adress and password length, built using  HTML, CSS and Javascript" } />
              <ProjectCard img={ rock_paper_scissors_img }
                liveLink={ "https://abmercy035.github.io/rock-paper-scissors-master/" }
                gitink={ "https://github.com/abmercy035/rock-paper-scissors-master" }
                text={ "A Responsive Rock Paper Scissors Game using HTML, CSS and Javascript " } />
              <ProjectCard img={ img1 }
                liveLink={ "https://web-todoapp.netlify.app/" }
                gitLink={ "https://github.com/abmercy035/web-todo-app" }
                text={ "A simple responsive Web Todo App with CRUD operations and a persistent storage using LocalStorage" } />
            </div>
          </div>
          <div className="projects-section hide" >
            <div className="project-header">
              FULLSTACK (MERN)
            </div>
            <div className="project-details" id="fullstack">
              Projects are built using React.js and Node (Express, Mongodb incusive).
            </div>
            <div className="projects">
              <ProjectCard img={ img2 } text={ "Lorem ipsum dolor sit amet consectetur.." } />
              <ProjectCard img={ img3 } text={ "Lorem ipsum dolor sit amet consectetur.." } />
              <ProjectCard img={ img1 } text={ "Lorem ipsum dolor sit amet consectetur.." } />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
