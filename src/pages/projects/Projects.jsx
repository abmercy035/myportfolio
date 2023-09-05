import React from 'react'
import back_icon from "../../assets/long_left.svg"
import link_icon from "../../assets/external_link.svg"
import view_icon from "../../assets/eye.svg"
import img1 from "../../assets/web-todoapp.png"
import img2 from "../../assets/img2.png"
import img3 from "../../assets/img3.webp"
import nodejs_icon from "../../assets/node-js.svg"
import react_icon from "../../assets/react.svg"
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
        <div className="right-nav">
          <NavBar
            icon_1={ javascript_icon }
            action_1={ () => scroller("#js") }
            action_2={ () => scroller("#react") }
            action_3={ () => scroller("#fullstack") }
            icon_2={ react_icon } icon_3={ nodejs_icon } />
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
              JAVASCRIPT
            </div>
            <div className="project-details" id="js">
              Projects built using HTML, CSS, and Vanilla Javascript.
            </div>
            <div className="projects">
              <ProjectCard img={ img2 } text={ "A simple Web Todo App (CRUD), with a persistent memeory using LocalStorage" } />
              <ProjectCard img={ img2 } text={ "A simple Web Todo App (CRUD), with a persistent memeory using LocalStorage" } />
              <ProjectCard img={ img2 } text={ "A simple Web Todo App (CRUD), with a persistent memeory using LocalStorage" } />

            </div>
          </div>
          <div className="projects-section" >
            <div className="project-header">
              REACT
            </div>
            <div className="project-details" id="react">
              Projects built using HTML, CSS, and React.Js.
            </div>
            <div className="projects">
              <ProjectCard img={ img1 } liveLink={ "http://localhost:5173/" } text={ "A simple responsive Web Todo App with CRUD operations and a persistent storage using LocalStorage" } />
            </div>
          </div>
          <div className="projects-section" >
            <div className="project-header">
              FULLSTACK(NODE)
            </div>
            <div className="project-details" id="fullstack">
              Projects are built using HTML, CSS, React.js and Node (Express, Mongodb incusive).
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
