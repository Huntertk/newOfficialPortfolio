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
                    I am a skilled Front End Developer with over 6 Months of
                experience in creating responsive and accessible web
                applications. <br /><br />My expertise includes HTML, CSS,
                JavaScript and Advance React framework. I have
                ability to create Modern Responsive UI with Animation.
                As a developer, I am passionate about creating
                intuitive and user-friendly web interfaces that deliver a
                seamless user experience. <br /><br /> I am always eager to learn
                new technologies and techniques to enhance my skills
                and stay up-to-date with industry trends. My attention
                to detail, strong problem-solving skills, and ability to
                work well in a team make me an ideal candidate for
                any Front End Developer role.<br /> <br />
                Current i am learning backend technology in nodejs and try to understand how backend works. Currently i created more than 3 M E R N Stack Web Apps that user can create, read, update and delete data using frontend.
                </motion.p>
        </div>
    </div>
  )
}

export default DeveloperDetails