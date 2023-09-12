import React from 'react'
import {motion} from 'framer-motion'
import avatar from '../assets/taufik.png'
import '../styles/home.scss'



const Home = () => {
  const easeScaleUp = {
    initial:{
      scale:0.1,
      opacity:0
    },
    whileInView:{
      scale:1,
      opacity: 1
    }
  }

  return (
    <section className='homeMainContainer'>
      <div className="topmainContainer">
        <div className="textContainer">
          <motion.h1 {...easeScaleUp}>Hey, I am MD TAUFIK</motion.h1>
          <p>I build modern and responsive website using various technology like reactjs and nextjs</p>
          <img src={avatar} alt="" />
          <button className='btn'>Let's Connect</button>
        </div>
      </div>
    </section>
  )
}

export default Home