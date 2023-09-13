import React, { useState } from 'react'
import '../styles/contactme.scss'
import {BsLinkedin,BsGithub} from 'react-icons/bs'
import {motion} from 'framer-motion'
import {toast} from 'react-hot-toast'

const ContactMe = () => {
    const [email, setEmial] = useState("")
    const [message, setMessgae] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        toast.success("Message Sent")
        setEmial("")
        setMessgae("")
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
            <input value={email} onChange={(e) => setEmial(e.target.value)} type="text" placeholder='your email' required/>
            <textarea value={message} onChange={(e) => setMessgae(e.target.value)} cols="30" rows="5" placeholder='your message.....' required></textarea>
            <button>Send</button>
        </form>
    </motion.section>
  )
}

export default ContactMe