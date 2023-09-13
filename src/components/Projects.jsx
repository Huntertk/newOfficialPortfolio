import React from 'react'
import { motion } from 'framer-motion'
import {FaGreaterThan} from 'react-icons/fa'
import {FaLessThan} from 'react-icons/fa'
import '../styles/projects.scss'
import imgOne from '../assets/almabetter.png'
import imgTwo from '../assets/mba.png'
import imgThree from '../assets/twintown.png'
import imgFour from '../assets/portfolio.png'
import imgFive from '../assets/ktmclone.png'
import imgSix from '../assets/wedu.png'

const Projects = () => {
    const easingScalUp = {
        initial:{
            scale:0.1,
            opacity:0
        },
        whileInView:{
            scale:1,
            opacity:1
        }
    }
  return (
    <section className='projectsMainContainer'>
        <h1><FaLessThan/><span>Projects /</span><FaGreaterThan/></h1>

        <div className="projectCardContainer">
        <a href="https://almabetterclone-taufik.netlify.app" target='_blank'>
            <motion.div 
                {...easingScalUp}
                className="projectCard">
                <h2>AlmaBetter Clone</h2>
                <p>This is AlmaBetter Official Website Clone. This Project built in React Js and Sass and It is Fully Responsive.</p>
                <img src={imgOne} alt="" />
            </motion.div>
                </a>


        <a href="https://towntitan-react-taufik.netlify.app" target='_blank'>
             <motion.div 
            {...easingScalUp} 
            className="projectCard">
                <h2>TwinTown</h2>
                <p>This is my internship project i am developing the whole website. This Project built in React Js and Css and It is Fully Responsive.</p>
                <img src={imgThree} alt="" />
            </motion.div>
        </a>

            <a href='https://mba-chaiwala-app-taufik-react.netlify.app' target='_blank'>
                <motion.div {...easingScalUp} className="projectCard">
                    <h2>MBA Chai wala</h2>
                    <p>This is old MBA Chaiwala Official Website Clone. This Project built in React Js and Sass and It is Fully Responsive.</p>
                    <img src={imgTwo} alt="" />
                </motion.div>
            </a>
            
            <a href="https://taufik-second-portfolio-app.netlify.app" target='_blank'>
                <motion.div {...easingScalUp} className="projectCard">
                    <h2>Portfolio</h2>
                    <p>This is Portfolio website. This Project built in React Js and Css and It is Fully Responsive.</p>
                    <img src={imgFour} alt="" />
                </motion.div>
            </a>
            
            <a href="https://react-ktm-app-taufik.netlify.app/" target='_blank'>
                <motion.div {...easingScalUp} className="projectCard">
                    <h2>KTM Clone</h2>
                    <p>This is Official KTM Website Clone. This Project built in React Js and Css and It is Fully Responsive.</p>
                    <img src={imgFive} alt="" />
                </motion.div>
            </a>

            <a href="https://nextjs-wedu-app.netlify.app/" target='_blank'>
                <motion.div {...easingScalUp} className="projectCard">
                    <h2>WeDu</h2>
                    <p>This is Digital Marketing Website. This Project built in Next Js and Css and It is Fully Responsive.</p>
                    <img src={imgSix} alt="" />
                </motion.div>
            </a>

        </div>
    </section>
  )
}

export default Projects