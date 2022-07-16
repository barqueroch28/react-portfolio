import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
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
              <h5>Clients</h5>
              <small>200+ Worlwide</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className='about_icon'/>
              <h5>Experience</h5>
              <small>80+ Completed</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus inventore distinctio ipsum possimus facere officia odit dolor commodi velit doloremque pariatur consequuntur, assumenda corporis optio voluptatum iste vel eveniet laborum.

          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          
        </div>
      </div>
    </section>
  )
}

export default About