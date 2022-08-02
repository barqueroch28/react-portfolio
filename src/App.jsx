import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import { Animator, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, ScrollContainer, ScrollPage, Sticky, StickyIn, Zoom, ZoomIn, ZoomOut } from 'react-scroll-motion'

const ZoomIncrollout1 = batch(StickyIn(), MoveIn(),FadeIn());
const ZoomIncrollin1 = batch(StickyIn(), MoveIn(),FadeIn());
const ZoomIncrollout2 = batch(StickyIn(), MoveIn(),FadeIn());
const ZoomIncrollin2 = batch(StickyIn(), MoveIn(),FadeIn());

const App = () => {
  return (
    
    <>
    <ScrollContainer>
    <section id='header' className='root-section'>
    <ScrollPage page={0}>
      <Animator animation={batch(Fade(), MoveOut(0, 300))}>   
      <Header />
    </Animator>
    </ScrollPage>
    </section>
    <section id='about' className='root-section'>
      <ScrollPage page={1}>
      <Animator animation={batch(FadeIn(), Move(0, -200))}>
      <About />
      </Animator>
      </ScrollPage>
      </section>
      <section id='experience' className='root-section'>
      <ScrollPage  page={2}>
      <Animator animation={batch(Fade(), Move(0, -400))}>
      <Experience />
      </Animator>
      </ScrollPage>
      </section>
      <section id='services' className='root-section'>
      <ScrollPage page={3}>
      <Animator animation={batch(Fade(), Move(0, -500))}>
      <Services />
      </Animator>
      </ScrollPage>
      </section>
      <section id='contact' className='root-section'>
      <ScrollPage page={4}>
      <Animator animation={batch(Fade(), Move(0, -400))}>
      <Contact />
      </Animator>
      </ScrollPage>
      </section>
      <Footer />
      <Nav />
      </ScrollContainer>
    </>
  )
}

export default App