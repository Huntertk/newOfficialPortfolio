import React from 'react'
import '../styles/home.scss'
import Skills from '../components/Skills'
import HomeIntroContainer from '../components/HomeIntroContainer'
import Projects from '../components/Projects'
import Services from '../components/Services'



const Home = () => {

  return (
    <section className='homeMainContainer'>
      <HomeIntroContainer />
      <Skills />
      <Projects />
      <Services />
    </section>
  )
}

export default Home