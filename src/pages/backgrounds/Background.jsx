import React from 'react'
import GoBackHistoryBar from '../../components/GoBackHistoryBar'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import "./background.css"
import chainnewz_icon from "../../assets/Ellipse 1.png"
import tiffany_icon from "../../assets/tiffany.jpg"
import gdsc_logo from "../../assets/gdsc.png"
import giggles_icon from "../../assets/giggles.jpg"
export default function Background() {
  return (
    <div className='background- column gap20'>
      <GoBackHistoryBar />
      <div className="background-intro column jcc aic gap50 ">
        <div className="intro-heading">
          Background Timeline
        </div>
        <div className="intro-text">
          My background details, alongside my achievements and services over the years as a programmer, reflect a journey marked by a relentless pursuit of excellence and a deep commitment to contributing to the betterment of society.
          <br />
          Beyond my technical accomplishments, I have actively sought opportunities to give back to society through volunteer work, mentorship, and collaborative initiatives that leverage technology to address pressing societal challenges.</div>
      </div>
      <div className="experience-wrapper">
        <VerticalTimeline lineColor="white">
          <VerticalTimelineElement
            className="vertical-timeline-element--background"
            date="July 2023"
            iconStyle={ { background: '#ff4f4f', color: '#e79595' } }
            icon={ <img src={ gdsc_logo } className="vertical-timeline-element-icon" /> }
          >
            <h3 className="vertical-timeline-element-title" style={ { color: '#ff4f4f' } }>
              GDSC Co-Lead Leadership Award.
            </h3>
            <h5 className="company-name p5">
              Google Developer Student Clubs, Global Program Lead
            </h5>
            <p>
              Earned a Certificate of Achievement for Leadership and Contributions as a Google Developer Student CLubs Co-Lead.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--background"
            date="July 2022 - July 2023"
            iconStyle={ { background: '#2640b7', color: "#2640b7" } }
            icon={ <img src={ gdsc_logo } className="vertical-timeline-element-icon" /> }
          >
            <h3 className="vertical-timeline-element-title" style={ { color: '#2640b7' } }>
              GDSC Co-Lead
            </h3>
            <h5 className="company-name p5">
              Google Developer Student CLubs (Core Team Member)
            </h5>
            <p>
              Led a team of enthusiastic student developers, fostering a collaborative and innovative environment within the club.
              <br />
              Join the core members in organizing tech online workshops event, and networking events for students interested in web and mobile development. Collaborating with industry professionals to provide valuable insights to club members.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--background"
            date="2022 - 2023"
            iconStyle={ { background: '#c0bd09', color: '#000' } }
            icon={ <img src={ giggles_icon } className="vertical-timeline-element-icon" /> }
          >
            <h3 className="vertical-timeline-element-title" style={ { color: '#c0bd09' } }>Hive Mind</h3>
            <h5>Fullstack Software Engineering Immersive</h5>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--background"
            date="2020 - Present"
            iconStyle={ { background: '#c0bd09', color: '#000' } }
            icon={ <img src={ giggles_icon } className="vertical-timeline-element-icon" /> }
          >
            <h3 className="vertical-timeline-element-title" style={ { color: '#c0bd09' } }>Bachelor's Degree in Chemical and Polymer Engineering</h3>
            <h5>Lagos State University (LASU, EPE CAMPUS)</h5>
            <p>Currently studing CHemical and Plolymer Enginerring in Lagos State University (LASU)
              <br />
              Enrolled at Lagos State University (LASU, EPE CAMPUS), specializing in Chemical and Polymer Engineering. Engaging in hands-on practicals to learn the production of useful materials for creative and productive purposes.
              <br />
              Passionate about advancing the durability and functionality of raw materials. Actively involved in optimizing processes to enhance material properties.
              <br />
              Conducting research on materials in need of advancement and exploring new methods and alternatives for producing reliable technologies with minimal defects or adverse effects on society and the economy. Emphasizing cost-effectiveness and accessibility in research endeavors.
            </p>

          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  )
}

