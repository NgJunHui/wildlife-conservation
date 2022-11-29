import React, { useEffect } from 'react'
import './home.css'
import Logo from '../../../images/hfa-logo.png';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const Hero = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const logoAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        opacity: 1,
        transition: {
          type: 'spring', duration: 3, bounce: 0.2, delay: 0.2
        },
      });
    }
    if (!inView) {
      animation.start({ opacity: 0, x: '10vw' })
    }
  }, [inView]);

  useEffect(() => {
    if (inView) {
      logoAnimation.start({
        x: 0,
        opacity: 1,
        transition: {
          type: 'spring', duration: 3, bounce: 0.2, delay: 0.2
        },
      });
    }
    if (!inView) {
      logoAnimation.start({ opacity: 0, x: '-10vw' })
    }
  }, [inView]);


  return (
    <div className='bg-container'>
      <div className='hero-container'>
        <div ref={ref} className='hero'>
          <motion.div animate={logoAnimation} className='header-left'>
            <img src={Logo} className="logo-img" />
          </motion.div>
          <motion.div className='header-right'>
            <motion.h1 animate={animation}>DISCOVER<br /><span>THE CHANGE</span></motion.h1>
            <motion.p animate={animation}>Global community of ecosystem <br />conservation and welfare of animals.</motion.p>
            <motion.p animate={animation} ><Link className="hero-btn" to='/join'>JOIN US</Link></motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero;