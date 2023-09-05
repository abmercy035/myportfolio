import React from 'react'
import link_icon from "../../assets/external_link.svg"
import view_icon from "../../assets/eye.svg"
import { Link, useNavigate } from 'react-router-dom'
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
    <Link to={ liveLink } target="_blank">
     <div className="card-actions" >
      View
      <img src={ view_icon } alt="" />
     </div>
    </Link>
    <Link to={ gitLink } target="_blank">
     <div className="card-actions" >
      source code
      <img src={ link_icon } alt="" />
     </div>
    </Link>
   </div>
  </div>
 )
}

