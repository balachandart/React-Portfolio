import React from 'react'
import './Points.css'
const Points = () => {
  return (
    <div className='points__container'>
        <article className='points__card'>
          <h1 className='title'>180+</h1>
          <small>CodeChef</small>
          <h5>Problem Solved</h5>
        </article>

        <article className='points__card'>
          <h1 className='title'>15+</h1>
          <small>Completed</small>
          <h5>Projects</h5>
        </article>

        <article className='points__card'>
          <h1 className='title'>3+</h1>
          <small>Deployments in</small>
          <h5>AWS</h5>
        </article>

    </div>
  )
}

export default Points