import React from 'react'
import {FaGreaterThan} from 'react-icons/fa'
import {FaLessThan} from 'react-icons/fa'
import '../styles/services.scss'
import {motion} from 'framer-motion'

const Services = () => {
  const easeItemFromLeft = {
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
    <section className='servicesMainContainer'>
      <motion.h1
      {...easeItemFromLeft}
      ><FaLessThan/><span>Services /</span><FaGreaterThan/></motion.h1>
      <div className="CardMainContainer">
        <motion.div {...easeItemFromLeft} className="cardContainer">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          <h3>Cool Personal Website</h3>
          <p>I build pleasing and  responsive website using React and other frontend frameworks.</p>
        </motion.div>

        <motion.div {...easeItemFromLeft} className="cardContainer">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <h3>Frontend Development</h3>
          <p>I build modern and responsive website using React.</p>
        </motion.div>

        <motion.div {...easeItemFromLeft} className="cardContainer">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <h3>Web Designing</h3>
          <p>Designing Website with Modern Layout.</p>
        </motion.div>
      </div>
    </section>

  )
}

export default Services