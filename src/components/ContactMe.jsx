import React from 'react'
import '../styles/contactme.scss'
import {BsLinkedin,BsGithub} from 'react-icons/bs'
import {motion} from 'framer-motion'

const ContactMe = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <motion.section className='contactMeContainer'
    initial={{
        scale:0.1,
        opacity:0
    }}
    whileInView={{
        scale:1,
        opacity:1
    }}
    transition={{delay:0.3}}
    >
        <div className="contactTextContainer">
            <h1>Contact Me</h1>
            <p>Sending an email is the easiest way to connect with me. <br />Or follow me on social media!</p>
            <div className="iconContainer">
                <BsLinkedin />
                <BsGithub />
            </div>
        </div>
        <form className="formContainer" onSubmit={handleSubmit}>
            <input type="text" placeholder='your email' required/>
            <textarea cols="30" rows="5" placeholder='your message.....' required></textarea>
            <button>Send</button>
        </form>
    </motion.section>
  )
}

export default ContactMe