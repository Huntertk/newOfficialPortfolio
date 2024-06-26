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
          <motion.p {...easeMoveTop}>I am mern stack developer building modern and full stack website using various technology like reactjs and nextjs</motion.p>
         
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
              <motion.p {...easeMoveTop}>I am a skilled MERN Stack Developer with over 8 Months of
                experience in creating responsive and accessible web
                applications. <br /><br />My expertise includes HTML, CSS,
                JavaScript, Nodejs, ExpressJs, Mongoose and Advance React framework. I have
                ability to create Modern Responsive UI.
                As a developer, I am passionate about creating
                intuitive and full stack web applicaztions that deliver a
                seamless user experience. <br /><br />I am always eager to learn
                new technologies and techniques to enhance my skills
                and stay up-to-date with industry trends. My attention
                to detail, strong problem-solving skills, and ability to
                work well in a team make me an ideal candidate for
                any MERN STACK Developer role.
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