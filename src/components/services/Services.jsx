import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            </ul>
            </article>

            {/* END OF OI/UX */}

            <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Development and creation of websites using technologies as HTML, CSS, JS</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Single page aplication creation</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>React Apps</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Ecommerce websites using CMS as WordPress, Laravel, etc. </p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Friednly user interfaces implementing Bootstrap. </p>
            </li>
            </ul>
            </article>

            {/* END OF WEB DEVELOPMENT */}


            <article className="service">
          <div className="service_head">
            <h3>Cloud hosting</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Deployment and creation of Azure Web Apps, Function Apps and Static Web Apps</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Continuos deployment using GitHub actions and Azure DevOps, Zip Deployment, FTP deployment, MS deploy.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Hosting WordPress websites on Azure</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>React Apps using Static Web Apps as host product.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Troubleshooting skills</p>
            </li>
            </ul>
            </article>
            

            {/* END OF CONTENT CREATION*/}
        
      </div>
    </section>
  )
}

export default services