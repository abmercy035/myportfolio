import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '../assets/School.png'
import WorkIcon from '../assets/Work.png'

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="royalblue">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - Present"
          iconStyle={{ background: '#c4c4c4', color: '#000' }}
          icon={
            <img src={SchoolIcon} className="vertical-timeline-element-icon" />
          }
        >
          <h3 className="vertical-timeline-element-title">
            Lagos State University (LASU), Lagos Nigeria
          </h3>
          <h5>Bachelor of Engineering</h5>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date={<em style={{ color: 'royalblue' }}>2021</em>}
          iconStyle={{ background: '#c4c4c4', color: '#000' }}
          icon={
            <img src={WorkIcon} className="vertical-timeline-element-icon" />
          }
        >
          <h3 className="vertical-timeline-element-title">
            Programming Teacher
          </h3>
          <h5>Giggles montessori, Lagos Nigeria</h5>
          <p>
            Taught programming and deskop publishing to students aged 4years and
            above.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 - 2023"
          iconStyle={{ background: '#c4c4c4', color: '#000' }}
          icon={
            <img src={SchoolIcon} className="vertical-timeline-element-icon" />
          }
        >
          <h3 className="vertical-timeline-element-title">Hive Mind</h3>
          <h5>Fullstack Software Engineering Immersive</h5>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date={<em style={{ color: 'royalblue' }}>2022 - Present</em>}
          iconStyle={{ background: '#c4c4c4', color: '#000' }}
          icon={
            <img src={WorkIcon} className="vertical-timeline-element-icon" />
          }
        >
          <h3 className="vertical-timeline-element-title">
            React Frontend Developer
          </h3>
          <h5>Freelancing, Lagos Nigeria</h5>
          <p>
            Freelancing as React frontend developer duties including website
            design and development, Hosting, and Website Management.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience
