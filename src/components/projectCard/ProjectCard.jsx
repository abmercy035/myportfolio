import React from 'react'
import link_icon from "../../assets/external_link.svg"
import view_icon from "../../assets/eye.svg"
import { useNavigate } from 'react-router-dom'
import "./projectcard.css"
export default function ProjectCard({ img, text, gitLink, liveLink }) {
 const navigate = useNavigate()
 return (
  <div className="project-card">
   <img src={ img } alt="" className="card-img" />

   <div className="card-body">
    <div className="card-name">{ text } </div>
   </div>
   <div className="card-action-wrapper">
    <div className="card-actions" onClick={ () => navigate(liveLink) }>
     View
     <img src={ view_icon } alt="" />
    </div>
    <div className="card-actions" onClick={ () => navigate(gitLink) }>
     source code
     <img src={ link_icon } alt="" />

    </div>
   </div>
  </div>
 )
}

