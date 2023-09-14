import React from 'react'
import { motion } from 'framer-motion'
import ContactMe from '../components/ContactMe'
import '../styles/contactPage.scss'
import { FaGreaterThan, FaLessThan } from 'react-icons/fa'
import {BiLogoGmail, BiLogoGithub} from 'react-icons/bi'

const Contact = () => {

  const easingItemLeft = {
        initial:{
            x:"-100%",
            opacity:0
        },
        whileInView:{
            x:0,
            opacity:1
        }
    }
  return (
    <section className='contact'>
      <motion.h1 {...easingItemLeft} className='contactHeading'><FaLessThan/><span>Contact Me /</span><FaGreaterThan/></motion.h1>
        <ContactMe />
      <motion.div {...easingItemLeft} className="icon">
        <a href="mailto: taufik.khan65@gmail.com"><BiLogoGmail /> taufik.khan65@gmail.com</a>
        <a href='https://github.com/Huntertk' target='_blank'><BiLogoGithub /> https://github.com/Huntertk</a>
      </motion.div>
    </section>
  )
}

export default Contact