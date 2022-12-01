import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import { Animator, batch, Fade, FadeIn, MoveIn, MoveOut, ScrollContainer, ScrollPage, Sticky, StickyIn, Zoom, ZoomIn , Move} from 'react-scroll-motion'



const About = () => {
  return (
    <section>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src="" alt="" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>1.5+ Years Working</small>
            </article>

            <article className="about_card">
              <FiUsers className='about_icon'/>
              <h5>Tek Experts</h5>
              <small>working at</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className='about_icon'/>
              <h5></h5>
              <small>80+ Completed</small>
            </article>
          </div>

          <p>I am a advanced student systems engineer from ULACIT, which works at Tek Experts as a support engineer to Microsoft Azure in the department of App Services, specifically in development and open source software area.

          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          
        </div>
      </div>
    </section>
  )
}

export default About