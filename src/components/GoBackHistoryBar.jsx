import React from 'react'
import back_icon from "../assets/long_left.svg"
import { useNavigate } from 'react-router-dom'

export default function GoBackHistoryBar() {
 const navigate = useNavigate()
 return (
  <div className="back-nav" onClick={ () => navigate('/') } style={ {
   height: "40px",
   width: "100%",
   display: "flex",
   zIndex: "199",
   cursor: "pointer",
   alignItems: "center",
   backgroundColor: "#121212",
   padding: "10px 20px",
   position: "sticky",
   top: "0px"
  } }>
   <img src={ back_icon } alt="" className="back-icon" style={ {
    width: "40px",
    height: " 40px"
   } } />
  </div >
 )
}
