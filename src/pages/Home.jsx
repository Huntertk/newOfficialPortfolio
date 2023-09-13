import React from 'react'
import '../styles/home.scss'
import Skills from '../components/Skills'
import HomeIntroContainer from '../components/HomeIntroContainer'
import Projects from '../components/Projects'



const Home = () => {

  return (
    <section className='homeMainContainer'>
      <HomeIntroContainer />
      <Skills />
      <Projects />
    </section>
  )
}

export default Home