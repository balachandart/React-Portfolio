import React from 'react'
import "./Hero.css"
import { profile1 } from '../../assets/images'
import Points from './Points/Points'
const Hero = () => {
  return (
    <section id='home'>
      <div className="stroke__text intro__text">Hello</div>
      <div className="container full__height blur-effect">
        <div className="info__container"> 
          <div className='details__container'>
            <h3>Hello there! I'm <span className='color__primary'>Balachandar</span></h3>
            <h1 className='title'>
              <span className='text__gradient'>Web Developer</span>
            </h1>
            <h3>From India</h3>
            <div className="text__muted description">
              <p>A dedicated Web Developer committed to constant improvement. Eager to apply my skills and innovate, I'm seeking dynamic career opportunities for growth and contribution in the tech industry.</p>
              <Points />
            </div>
          </div>
          <div className="user__profile">
            <div className="primary__effect photo__container">
              <img src={profile1} alt="" />
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Hero