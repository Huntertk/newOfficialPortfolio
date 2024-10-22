import React from 'react'
import { motion } from 'framer-motion'
import '../styles/porfile.scss'
import DeveloperDetails from '../components/DeveloperDetails'
import {BsFillBriefcaseFill} from 'react-icons/bs'

const Profile = () => {
  return (
    <section className='profileMainContainer'>
        <DeveloperDetails />
        <motion.div
        initial={{
            x:"-100%",
            opacity:0,
        }}
        whileInView={{
            x:0,
            opacity:1,
        }}
        className="experienceMainContainer">
            <div className="experienceHeadingContainer">
                <BsFillBriefcaseFill />
                <p>Experience</p>
            </div>
            <div className="experienceContainer">
                <p className='companySymbol'>E</p>
                <div className="details">
                    <h3>Web Developer Intern</h3>
                    <p className="company">@Engaj Media</p>
                    <p className="date">From <span>July 2023</span> Oct 2023</p>
                </div>
            </div>
            <div className="experienceContainer">
                <p className='companySymbol'>T</p>
                <div className="details">
                    <h3>Frontend Developer / System Developer</h3>
                    <p className="company">@Travelvago</p>
                    <p className="date">From <span>Oct 2023</span> current</p>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Profile