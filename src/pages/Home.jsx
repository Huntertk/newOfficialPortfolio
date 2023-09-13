import React from 'react'
import '../styles/home.scss'
import Skills from './Skills'
import HomeIntroContainer from '../components/HomeIntroContainer'



const Home = () => {

  return (
    <section className='homeMainContainer'>
      <HomeIntroContainer />
      <Skills />
    </section>
  )
}

export default Home