import React from 'react'
import './Footer.css'
import Logo from '../../Commons/Logo/Logo'
import SocialHandles from '../../Commons/SocialHandles/SocialHandles'
import { footer } from '../../data'
const Footer = () => {
  const year=new Date();
  const value=year.getFullYear();
  return (
    <section id='footer'>
      <div className="container">
        <div className="row">
          <div className="column">
            <Logo />
            <p className="text__muted description">
            I am web developer doing all things creative to make the web a more unique and awesome place.
            </p>
           <SocialHandles/>
          </div>
          {footer.map((list,index)=>(
            <div className="column" key={index}>
                <h3 className='group__name'>{list.group}</h3>
                <div className="routes__container">
                  {list.routes.map((route,i)=>(
                    <a href={`#${route.name.toLowerCase()}`} className='route__item' key={i}>
                      {
                        route.icon? <div className='icon__container'>{route.icon}</div>:""}
                        <p className="name">{route.name}</p>                      
                      </a>
                  ))

                  }
                </div>
                
            </div>
          ))}
        </div>
        <article className="copyright__container">
          <h3>Copyright &copy; All Rights Reserved - {value}</h3>
          <p className='text__muted'>Built with love by Balachandar.</p>
          <p className='text__muted'>Thanks For Visiting</p>
        </article>
       
      </div>
    </section>
  )
}

export default Footer