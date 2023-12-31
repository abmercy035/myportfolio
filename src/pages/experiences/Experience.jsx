import React from 'react'
import GoBackHistoryBar from '../../components/GoBackHistoryBar'
import {
 VerticalTimeline,
 VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import "./experience.css"
import chainnewz_icon from "../../assets/Ellipse 1.png"
import tiffany_icon from "../../assets/tiffany.jpg"
import giggles_icon from "../../assets/giggles.jpg"
export default function Experience() {
 return (
  <div className='experience-page'>
   <GoBackHistoryBar />
   <div className="experience-page-intro">
    <div className="experience-page-intro-header">
     Work Experiences
    </div>
    <div className="experience-page-intro-text">
     <p>
      A passionate JavaScript Developer with expertise in ReactJs and Nodejs inclusive, driven by a love for continuous learning and sharing knowledge. My journey is defined by a commitment to building a better society through technology. I thrive in the ever-evolving field of software development and believe in the power of ongoing learning to fuel my personal growth and development.
     </p>
    </div>
   </div>
   <div className="experience-wrapper">
    <VerticalTimeline lineColor="white">
     <VerticalTimelineElement
      className="vertical-timeline-element--education"
      date="Aug 2023 - Present"
      iconStyle={ { background: 'royalblue', color: '#000' } }
      icon={ <img src={ chainnewz_icon } className="vertical-timeline-element-icon" /> }
     >
      <h3 className="vertical-timeline-element-title" style={ { color: 'royalblue' } }>
       React Frontend Developer
      </h3>
      <h5 className="company-name p5">Chainewz - TechDiet</h5>
      <p>
       Responsible for developing the user interface and client-side functionality. Creates intuitive
       and visually appealing web3 interfaces. Collaborates with the backend team for data
       integration and implementation.
      </p>
     </VerticalTimelineElement>

     <VerticalTimelineElement
      className="vertical-timeline-element--education"
      date="May 2023 - Aug 2023"
      iconStyle={ { background: 'skyblue' } }
      icon={ <img src={ tiffany_icon } className="vertical-timeline-element-icon" /> }
     >
      <h3 className="vertical-timeline-element-title" style={ { color: 'skyblue' } }>
       React Frontend Developer
      </h3>
      <h5 className="company-name p5">Tiffany E-commerce Website</h5>
      <p>
       As a frontend designer for the Tiffany e-commerce website, I played a pivotal role in creating an engaging and user-friendly online shopping platform. Working collaboratively within a team, I contributed to various aspects of the project, including the product page, dashboard, API integration and data display, file module structuring, and overall project layout structure.
      </p>
     </VerticalTimelineElement>

     <VerticalTimelineElement
      className="vertical-timeline-element--education"
      date="Mar 2022 - Apr 2022"
      iconStyle={ { background: '#efca65' } }
      icon={ <img src={ giggles_icon } className="vertical-timeline-element-icon" /> }
     >

      <h3 className="vertical-timeline-element-title" style={ { color: '#efca65' } }>
       Programming Teacher
      </h3>
      <h5 className="company-name p5">Giggles montessori, Lagos Nigeria</h5>
      <p>
       Introduced students to the fundamentals of Scratch programming, enabling them to create interactive and engaging multimedia projects.
       <br />
       Guided students in the step-by-step process of designing and building their own interactive games, from concept to completion.
       Taught students how to use Scratch's visual programming blocks to create game mechanics, control characters, and manage game events.
       <br />
       Introduced students to Microsoft Word and Microsoft PowerPoint, ensuring they gained proficiency in these essential office productivity tools.
       Conducted hands-on lessons covering document creation, formatting, and effective presentation design.
      </p>
     </VerticalTimelineElement>
    </VerticalTimeline>
   </div>
  </div>
 )
}

