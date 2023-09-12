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

    const easeMoveTop = {
    initial:{
      y:"100%",
      opacity:0
    },
    whileInView:{
      y:0,
      opacity: 1
    }
  }

  return (
    <section className='homeMainContainer'>
      <div className="topmainContainer">
        <div className="textContainer">
          <motion.h1 {...easeScaleUp}>Hey, I am MD TAUFIK</motion.h1>
          <motion.p {...easeMoveTop}>I am front end developer build modern and responsive website using various technology like reactjs and nextjs</motion.p>
          <motion.img 
          initial={{
            opacity:0
          }}
          whileInView={{
            opacity:1
          }}
          src={avatar} alt="" />
          <motion.button {...easeMoveTop} className='btn'>Let's Connect</motion.button>
        </div>

        <div className="homeBottomContainer">
          <div className="modalMainContainer">
            <div className="modalTopContainer">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
            <div className="modalBottomContainer">
              <motion.h1 {...easeScaleUp}>An Introduction</motion.h1>
              <motion.p {...easeMoveTop}>I am a skilled Front End Developer with over 6 Months of
                experience in creating responsive and accessible web
                applications. <br /><br />My expertise includes HTML, CSS,
                JavaScript and Advance React framework. I have
                ability to create Modern Responsive UI with Animation.
                As a developer, I am passionate about creating
                intuitive and user-friendly web interfaces that deliver a
                seamless user experience. <br /><br />I am always eager to learn
                new technologies and techniques to enhance my skills
                and stay up-to-date with industry trends. My attention
                to detail, strong problem-solving skills, and ability to
                work well in a team make me an ideal candidate for
                any Front End Developer role.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home