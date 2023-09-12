import React, {useState } from 'react';
import {motion} from 'framer-motion';
import '../styles/header.scss';
import {GrTextAlignLeft} from  'react-icons/gr';
import {MdEmail} from  'react-icons/md';
import {FaRegUserCircle} from 'react-icons/fa';
import {TbGridDots} from 'react-icons/tb';
import {IoIosSend} from 'react-icons/io';
import {RxCross2} from 'react-icons/rx';

const Header = () => {
    const [isNavOpen, setisNavOpen] = useState(false)
    const handleNavBar = () => {
        setisNavOpen(prev => !prev) 
    }

    const easingItemFromTop={
        initial:{
            y:"-100%",
            opacity:0
        },
        whileInView:{
            y:0,
            opacity:1
        }
    }
  return (
    <nav>
        <motion.div 
        className='navIconContainer' onClick={handleNavBar}
        {...easingItemFromTop}
        >
            {
                isNavOpen ? 
                <RxCross2 />
               : <GrTextAlignLeft />
            }
        </motion.div>
        <motion.p 
        className='heading'
        {...easingItemFromTop}
        >I&apos;M TAUFIK</motion.p>
        <div className={`${isNavOpen ? 'navOpen' : 'navClose'} navLinksContainer`}>
            <motion.div className="navLinks"
            {...easingItemFromTop}
            >
                <FaRegUserCircle />
                <br />
                <span>Profile</span>
                </motion.div>
            <motion.div className='navLinks'
            {...easingItemFromTop}
            >
                <TbGridDots />
                <br />
                <span>Projects</span>
                </motion.div>
            <motion.div className='navLinks'
            {...easingItemFromTop}
            >
                <IoIosSend />
                <br />
                <span>Contact</span>
            </motion.div>
        </div>
        <motion.div 
        className='themeButtonContainer'
        {...easingItemFromTop}
        >
            <MdEmail />
        </motion.div>
    </nav>
  )
}

export default Header