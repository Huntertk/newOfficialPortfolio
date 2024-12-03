import React from 'react'
import {motion} from 'framer-motion'
import avatar from '../assets/taufik.png'
import { Link } from 'react-router-dom'

const HomeIntroContainer = () => {
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
      x:"-100%",
      opacity:0
    },
    whileInView:{
      x:0,
      opacity: 1
    }
  }

  return (
    <div className="topmainContainer">
        <div className="textContainer">
          <motion.h1 {...easeScaleUp}>Hey, I am MD TAUFIK</motion.h1>
           <motion.img 
          initial={{
            opacity:0
          }}
          whileInView={{
            opacity:1
          }}
          src={avatar} alt="" />
          <motion.p {...easeMoveTop}>I am Full Stack Developer building modern and full stack website using various technology like reactjs and nextjs</motion.p>
         
          <motion.button {...easeMoveTop} className='btn'>
              <Link to="/contact">Let's Connect</Link>
            </motion.button>
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
              <motion.p {...easeMoveTop}> I am Detail-oriented Full Stack Developer with over one year of experience in designing and implementing robust web applications using the MERN stack (MongoDB, Express, React, Node.js). Proficient in developing user-friendly interfaces and RESTful APIs, with a strong understanding of both front-end and back-end technologies. Committed to optimizing application performance and enhancing user experience, I thrive in collaborative environments and continuously seek to expand my skills. Passionate about leveraging technology to solve real-world problems and deliver high-quality software solutions.
              </motion.p>
              <motion.button {...easeScaleUp}>
                <Link to="/profile">Profile</Link>
                </motion.button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default HomeIntroContainer