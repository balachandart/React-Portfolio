import React from 'react'
import './Projects.css'
import { Swiper,SwiperSlide } from 'swiper/react'
import {  Pagination,Autoplay} from 'swiper/modules'
import "swiper/css"
import "swiper/css/pagination"
import { projects } from '../../data'
import { FaExternalLinkAlt } from 'react-icons/fa'
const Projects = () => {
  return (
    <section id='projects'>
        <div className="container">
          <h1 className='title'>
            My <span className='text__gradient'>Projects</span>
          </h1>
          <Swiper
          className='projects__container'
          spaceBetween={40}
          autoplay={{
            delay:4000,
            disableOnInteraction:false,
            pauseOnMouseEnter:true,}}
          loop={true}
          pagination={{clickable:true}}
          modules={[Pagination,Autoplay]}
          slidesPerView={1}
          breakpoints={{
            700:{
              slidesPerView:2,
            },
            900:{
              slidesPerView:3,
            }    
          }}
          >
            { projects.map((projects,index)=>(
                   <SwiperSlide className='project' key={index}>
                        <a href={projects.url} target='_blank' rel='noopener noreferrer' className='image__container'>
                          <img src={projects.image} alt="" />
                        </a>
                        <div className="details">
                          <h2 className='name'>{projects.name}</h2>
                          <p className='text__muted description'>{projects.description}</p>
                        </div>
                        <a href={projects.url} target='_blank' rel='noopener noreferrer' className='icon__container'>
                          <FaExternalLinkAlt />
                        </a>
                   </SwiperSlide> 
            ))}
          </Swiper>
        </div>
    </section>
  )
}

export default Projects