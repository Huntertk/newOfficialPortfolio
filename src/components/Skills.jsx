import React from 'react'
import {FaGreaterThan} from 'react-icons/fa'
import {FaLessThan} from 'react-icons/fa'
import '../styles/skills.scss'
import {motion} from 'framer-motion'

import {
    BiLogoJavascript, 
    BiLogoHtml5,
    BiLogoCss3,
    BiLogoReact,
    BiLogoMongodb,
    BiLogoNetlify,
    BiLogoGit
} from 'react-icons/bi'
import {
    FaSass,
    FaBootstrap,
    FaNode,
    FaGithub
} from 'react-icons/fa'

import {SiExpress} from 'react-icons/si'

const Skills = () => {


  const easingItemBottom={
    initial:{
      y:"100%",
      opacity:0
    },
    whileInView:{
      y:0,
      opacity:1
    },
  }

  const easingItemRight={
    initial:{
      x:"-100%",
      opacity:0
    },
    whileInView:{
      x:0,
      opacity:1
    },
    transition:{duration:0.5}
  }

  const easingItemLeft={
    initial:{
      x:"-100%",
      opacity:0
    },
    whileInView:{
      x:0,
      opacity:1
    },
    transition:{duration:0.5}
  }




  return (
    <section className='skillsMainContainer'>
      <motion.h1 {...easingItemBottom}><FaLessThan/><span>Skills /</span><FaGreaterThan/></motion.h1>
      <div className="skillsIconsMainContainer">
        <motion.div 
        {...easingItemLeft}
        className="iconContainer"
        >
          <BiLogoReact />
          <span>React Js</span>
        </motion.div>

         <motion.div 
        {...easingItemRight} className="iconContainer">
          <SiExpress />
          <span>Express Js</span>
        </motion.div>

        <motion.div 
        {...easingItemRight} className="iconContainer">
          <FaNode />
          <span>Node Js</span>
        </motion.div>

        <motion.div 
        {...easingItemLeft} className="iconContainer">
          <BiLogoMongodb />
          <span>MongoDB</span>
        </motion.div>

        <motion.div 
        {...easingItemLeft}
        className="iconContainer">
          <BiLogoJavascript />
          <span>JavaScript</span>
        </motion.div>

        <motion.div 
        {...easingItemRight} 
        className="iconContainer">
          <FaSass />
          <span>Sass</span>
        </motion.div>
        

        <motion.div 
        {...easingItemRight}  
        className="iconContainer">
          <FaBootstrap />
          <span>Bootstrap</span>
        </motion.div>

        <motion.div 
        {...easingItemLeft} 
         className="iconContainer">
          <BiLogoHtml5 />
          <span>HTML</span>
        </motion.div>

        <motion.div 
        {...easingItemRight}  
        className="iconContainer">
          <BiLogoCss3 />
          <span>CSS</span>
        </motion.div>

        <motion.div 
        {...easingItemLeft} 
         className="iconContainer">
          <FaGithub />
          <span>GitHub</span>
        </motion.div>

        <motion.div 
        {...easingItemRight}  
        className="iconContainer">
          <BiLogoGit />
          <span>Git</span>
        </motion.div>

        <motion.div 
        {...easingItemLeft} 
         className="iconContainer">
          <BiLogoNetlify />
          <span>Netlify</span>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills