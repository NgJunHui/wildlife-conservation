import React, {useEffect} from 'react'
import { NavLink } from "react-router-dom";
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const Subscribe = () => {

    const { ref, inView } = useInView();
    const animation = useAnimation();
    useEffect(() => {
      if (inView) {
        animation.start({
          x: 0,
          opacity:1,
          transition: {
            type: 'spring', duration: 2, bounce: 0.2, delay: 0.3
          },
        });
      }
      if (!inView) {
        animation.start({ opacity:0, x:"-5vw" })
      }
    }, [inView]);    

    return (
        <div  ref={ref} className='subscribe-container'>
            <motion.div animate={animation} className='subscribe-content'>
                <h3>WE'RE LOSING OUR WILDLIFE!</h3>
                <p>You can make a difference for our planet. Discover how to stand up for nature, join our community and spread the word!</p>
                <NavLink className="subscribe-btn" to='/services'>OUR SERVICES</NavLink>
            </motion.div>
        </div>
    )
}

export default Subscribe;