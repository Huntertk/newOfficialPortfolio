import React from 'react'
import '../styles/footer.scss'
import {BsFillSuitHeartFill,BsGithub,BsLinkedin,BsInstagram} from 'react-icons/bs';
import {motion} from 'framer-motion';

const Footer = () => {
  return (
    <section className='footer'>
      <div className="footerWrapperContainer">
        <div className="footerMainContainer">
          <motion.div className="iconContainer"
          initial={{
            x:"-100%",
            opacity:0
          }}

          whileInView={{
            x:0,
            opacity:1
          }}
          >
            <BsGithub />  
            <BsLinkedin />
            <BsInstagram />
          </motion.div>
          <motion.div
            initial={{
            scale:0.1,
            opacity:0
          }}

          whileInView={{
            scale:1,
            opacity:1
          }}
          className="devDetails">
            <p>Created With <BsFillSuitHeartFill /> by</p>
            <p className='devName'>MD TAUFIK</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Footer