import React, {useState } from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import '../styles/header.scss';
import {GrTextAlignLeft} from  'react-icons/gr';
import {MdEmail} from  'react-icons/md';
import {FaRegUserCircle} from 'react-icons/fa';
import {TbGridDots} from 'react-icons/tb';
import {IoIosSend} from 'react-icons/io';
import {RxCross2} from 'react-icons/rx';
import { IoIosDocument } from "react-icons/io";

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
        <Link to="/" onClick={() => setisNavOpen(false)}>
            <motion.p 
            className='heading'
            {...easingItemFromTop}
            >
                    I&apos;M TAUFIK
            </motion.p>
        </Link>
        <div className={`${isNavOpen ? 'navOpen' : 'navClose'} navLinksContainer bigScreen`}>
            <Link to="/profile" onClick={() => setisNavOpen(false)}>
                <motion.div className="navLinks"
                {...easingItemFromTop}
                >
                    <FaRegUserCircle className="navLinksIcons" />
                    <br />
                        <span >Profile</span>
                </motion.div>
            </Link>

            <Link to="/projects" onClick={() => setisNavOpen(false)}>
                <motion.div className='navLinks'
                {...easingItemFromTop}
                >
                    <TbGridDots className="navLinksIcons" />
                    <br />
                        <span>Projects</span>
                </motion.div>
            </Link>

            <Link to="/contact" onClick={() => setisNavOpen(false)}>
                <motion.div className='navLinks'
                {...easingItemFromTop}
                >
                    <IoIosSend className="navLinksIcons" />
                    <br />
                        <span>Contact</span>
                </motion.div>
            </Link>
            <a href='https://drive.google.com/file/d/186oQ3u2PfWV-CZqejzKx5-D83rjUcu51/view?usp=sharing' target='__blank'>
                <motion.div className='navLinks'
                {...easingItemFromTop}
                >
                    <IoIosDocument  className="navLinksIcons" />
                    <br />
                        <span>Resume</span>
                </motion.div>
            </a>
        </div>
        <a href="mailto: taufik.khan65@gmail.com">
            <motion.div 
            className='themeButtonContainer'
            {...easingItemFromTop}
            >
                <MdEmail /> 
            </motion.div>
        </a>
    </nav>
  )
}

export default Header