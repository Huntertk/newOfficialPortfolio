import React from 'react'
import {motion} from 'framer-motion'
import {FaGreaterThan} from 'react-icons/fa'
import {FaLessThan} from 'react-icons/fa'
import '../styles/projectPage.scss'
import '../styles/projects.scss'
import imgOne from '../assets/almabetter.png'
import imgTwo from '../assets/mba.png'
import imgThree from '../assets/twintown.png'
import imgFour from '../assets/portfolio.png'
import imgFive from '../assets/ktmclone.png'
import imgSix from '../assets/wedu.png'
import imgSeven from '../assets/gadget360.png'
import imgEight from '../assets/codehunting.png'
import imgNine from '../assets/comfysloth.png'

const ProjectsPage = () => {
     const easingScalUp = {
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
    <section className='projectsMainContainer projectPageMainContainer'>
         <motion.h1 {...easingScalUp}><FaLessThan/><span>Projects /</span><FaGreaterThan/></motion.h1>
         <motion.p {...easingScalUp} className='projectDesc'>
            This is a curated list of all my projects sorted according to the date published. Latest ones are on top of the list.
            <br />These are some of the stuff I have done in recent times.
         </motion.p>

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
                <p>This is my internship project i developed this whole website. This Project built in React Js and Css and It is Fully Responsive.</p>
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

            <a href="https://react-gadget360-app-taufik.netlify.app/" target='_blank'>
                <motion.div {...easingScalUp} className="projectCard">
                    <h2>Gadget 360</h2>
                    <p>This project is online gadget e-commerce website. in this project i am using context api managing global state.</p>
                    <img src={imgSeven} alt="" />
                </motion.div>
            </a>

            <a href="https://dynamic-blancmange-e28341.netlify.app/" target='_blank'>
                <motion.div {...easingScalUp} className="projectCard">
                    <h2>Landing Page</h2>
                    <p>This is a landing page for online education platform.</p>
                    <img src={imgEight} alt="" />
                </motion.div>
            </a>
            <a href="https://react-comfy-sloth-app-taufik.netlify.app/" target='_blank'>
                <motion.div {...easingScalUp} className="projectCard">
                    <h2>Comfy Sloth</h2>
                    <p>This is a website for purchasing online furniture. It is fully responsive.</p>
                    <img src={imgNine} alt="" />
                </motion.div>
            </a>

        </div>
    </section>
  )
}

export default ProjectsPage