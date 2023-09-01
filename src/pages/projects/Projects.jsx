import React from 'react'
import back_icon from "../../assets/long_left.svg"
import link_icon from "../../assets/external_link.svg"
import view_icon from "../../assets/eye.svg"
import img1 from "../../assets/img1.png"
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
  return (
    <>
      <div className='projects-page'>
        <div className="project-page-under-cover">
          <GoBackHistoryBar />
          <div className="right-nav">
            <NavBar icon_1={ javascript_icon }
              icon_2={ react_icon } icon_3={ nodejs_icon } />
          </div>
          <div className="project-intro">
            <div className="page-title">My Projects</div>
            <div>
              <span>
                Hello, glad you are here to see the projects i built.
              </span>
              <span>
                Projects have built are more than the list shown here but to just let you know I have a good concept and hands on practical on the  title I claimed to be.
                <br /> Project showing private are either a start-up or a client's project, I have decided to keep its' source code private
                <br />
              </span>
            </div>
          </div>
          <div className="projects-wrapper">
            <div className="projects-section">
              <div className="project-header">
                JAVASCRIPT
              </div>
              <div className="project-details">
                Projects built using HTML, CSS, and Vanilla Javascript.
              </div>
              <div className="projects">
                <ProjectCard img={ img1 } text={ "Lorem ipsum dolor sit amet consectetur.." } />

              </div>
            </div>
            <div className="projects-section" id="react">
              <div className="project-header">
                REACT
              </div>
              <div className="project-details">
                Projects built using HTML, CSS, and React.Js.
              </div>
              <div className="projects">

                <ProjectCard img={ img2 } text={ "Lorem ipsum dolor sit amet consectetur.." } />
                <ProjectCard img={ img1 } text={ "Lorem ipsum dolor sit amet consectetur.." } />
                <ProjectCard img={ img3 } text={ "Lorem ipsum dolor sit amet consectetur.." } />
                <ProjectCard img={ img1 } text={ "Lorem ipsum dolor sit amet consectetur.." } />
              </div>
            </div>
            <div className="projects-section">
              <div className="project-header">
                FULLSTACK(NODE)
              </div>
              <div className="project-details">
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
      </div>
    </>
  )
}
