import React from 'react'
import './About.css'
import { profile10 } from '../../assets/images'
const About = () => {
  return (
    <section id='about'>
      <div className="container">
        <div className='photo__container'>
          <div className="primary__effect picture">
            <img src={profile10} alt="" />
          </div>
        </div>
        <div className='details'>
          <h3><span className='text__gradient'>About </span>Me</h3>
          <h1>I am <span className='color__primary'>Balachandar</span></h1>
          <h2>An Enthusiastic Web Developer</h2>
          <p className="text__muted description">
          Welcome to my corner of the digital world! I'm a passionate web developer with a knack for crafting innovative web solutions that blend seamless functionality with stunning design. With a strong foundation in both front-end technologies, I thrive on turning ideas into reality through clean code and intuitive user experiences.
          </p>
          <a href="#contact" className='btn btn__primary'>Contact Me</a>
        </div>
      </div>

    </section>
  )
}

export default About