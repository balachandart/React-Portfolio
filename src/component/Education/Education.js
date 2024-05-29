import React from 'react'
import './Education.css'
import { education } from '../../data'
import { FaGraduationCap } from "react-icons/fa";
const Education = () => {
  return (
    <section id='education'>
      <div className="container">
        <h1 className='title'>
          <span className='text__gradient'>Education</span>
        </h1>
        <div className="education__container">
          {
            education.map((data,index)=>(
              <div className="education__card" key={index}>
                <div className="icon__container">
                <FaGraduationCap />
                </div>
                <div className="details">
                  <p className='text__muted data'>{data.dateRange}</p>
                  <h1 className='text__gradient certificate'>{data.certification}</h1>
                  <h3 className='name'>{data.schoolName}</h3>
                </div>
              </div>
            ))
          }
        </div>
      </div>

    </section>
  )
}

export default Education