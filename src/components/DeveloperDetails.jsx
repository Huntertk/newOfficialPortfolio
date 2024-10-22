import React from 'react'
import { motion } from 'framer-motion'
import '../styles/developerdetails.scss'
import me from '../assets/developer.png'
import {BiUser} from 'react-icons/bi'

const DeveloperDetails = () => {
    

  return (
    <div className='developerDetailsContainer'>
        <motion.div 
        initial={{
            x:"-100%",
            opacity:0,
        }}
        whileInView={{
            x:0,
            opacity:1,
        }}
        className="introContainer">
            <img src={me} alt="" />
            <div>
                <h1>MD TAUFIK</h1>
                <p>Frontend Developer</p>
            </div>
        </motion.div>
        <div className="developerAbout">
            <div className="icon">
                <motion.p
                initial={{
                    x:"-100%",
                    opacity:0,
                }}
                whileInView={{
                    x:0,
                    opacity:1,
                }}
                ><BiUser />About Me</motion.p>
            </div>
                <motion.p
                initial={{
                    x:"-100%",
                    opacity:0,
                }}
                whileInView={{
                    x:0,
                    opacity:1,
                }}
                >
                     Detail-oriented Full Stack Developer with over one year of experience in designing and
 implementing robust web applications using the MERN stack (MongoDB, Express, React,
 Node.js). Pro cient in developing user-friendly interfaces and RESTful APIs, with a
 strong understanding of both front-end and back-end technologies. Committed to
 optimizing application performance and enhancing user experience, I thrive in
 collaborative environments and continuously seek to expand my skills. Passionate
 about leveraging technology to solve real-world problems and deliver high-quality
 software solutions
                </motion.p>
        </div>
    </div>
  )
}

export default DeveloperDetails