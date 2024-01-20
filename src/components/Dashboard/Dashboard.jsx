import React from 'react';
import {motion} from 'framer-motion';
import './dashboard.css';
import Hexagon from '../../images/pattern.svg';
import BackgroundLight from '../../images/background-light.svg';


export default function Dashboard() {
  const winWidth = window.innerWidth;

  const moveVariants = {
    animationOne: {
      x: [-0.1*winWidth, 0.3*winWidth],
      y: [-100, 200],
      transition: {
        x: {
          repeatType: "mirror",
          repeat:  Infinity,
          duration: 5,
        },
        y: {
          repeatType: "mirror",
          repeat:  Infinity,
          duration: 4,
        }
      }
    },
    animationTwo: {
      x: [-0.2*winWidth, 0.1*winWidth],
      y: [-200, 100],
      transition: {
        x: {
          repeatType: "mirror",
          repeat:  Infinity,
          duration: 6,
        },
        y: {
          repeatType: "mirror",
          repeat:  Infinity,
          duration: 3,
        }
      }
    }
  }

  return (
    <div className='dashboard flex'>
    
      <div className='heading flex'>
        <h1><span className='pink-text'>/</span> Transforming Dreams into Reality <span className='pink-text'>/</span> <br /> One Start-Up at a Time!</h1>
        <p>
        Welcome to the Entrepreneurial Cell of VIT Bhopal, 
        a dynamic hub dedicated to nurturing and empowering the next generation of entrepreneurs across India. 
        The future of your idea begins here, at the Entrepreneurial Cell of VIT Bhopal - where we don't just promote entrepreneurs, 
        we build success stories.
        </p>
        <p>
        Kickstart Your Journey now!
        </p>
        <button className='join-button'>Start Your Journey</button>
        
        <motion.img variants={moveVariants} animate="animationOne" className="background-light bl-1" src={BackgroundLight} alt=""/>
        <motion.img variants={moveVariants} animate="animationTwo" className="background-light bl-2" src={BackgroundLight} alt=""/>
      
      </div>

      <div className='about flex'>
      <div class="row">
        <div class="col-lg-5 pattern flex">
          <img src={Hexagon} alt='pattern'/>
        </div>
        <div class="col-lg-7 description flex">
          <h3>Ecell VIT-Bhopal</h3>
          <p>
      
            E-cell or Entrepreneurship cell of VIT Bhopal is a community of like minded people,
            fostering the spirit of entrepreneurship. Our mission is to cultivate and empower the emerging visionaries of tomorrow, 
            providing comprehensive guidance and unwavering support to transform groundbreaking ideas into successful ventures. 
            The E-Cell is committed to building a dynamic entrepreneurial ecosystem, serving as a catalyst for creativity, innovation, 
            and business acumen.

          </p>
          <p>
          Join our community to dive into the collaborative environment that encourages ideation, 
          experimentation, and continuous learning. 
          </p>
        </div>
      </div>
      </div>
    </div>
  )
}
