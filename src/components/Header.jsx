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
        ><Link to="/" onClick={() => setisNavOpen(false)}>I&apos;M TAUFIK</Link></motion.p>
        <div className={`${isNavOpen ? 'navOpen' : 'navClose'} navLinksContainer bigScreen`}>
            <motion.div className="navLinks"
            {...easingItemFromTop}
            >
                <FaRegUserCircle className="navLinksIcons" />
                <br />
                <Link to="/profile" onClick={() => setisNavOpen(false)}><span >Profile</span></Link>
                </motion.div>
            <motion.div className='navLinks'
            {...easingItemFromTop}
            >
                <TbGridDots className="navLinksIcons" />
                <br />
                <Link to="/projects" onClick={() => setisNavOpen(false)}><span>Projects</span></Link>
                </motion.div>
            <motion.div className='navLinks'
            {...easingItemFromTop}
            >
                <IoIosSend className="navLinksIcons" />
                <br />
                <Link to="/contact" onClick={() => setisNavOpen(false)}><span>Contact</span></Link>
            </motion.div>
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