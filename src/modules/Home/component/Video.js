import React, {useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const Video = () => {
    const { ref, inView } = useInView();
    const animation = useAnimation();
    const animation2 = useAnimation();
    useEffect(() => {
      if (inView) {
        animation.start({
          y: 0,
          opacity:1,
          transition: {
            type: 'spring', duration: 2, bounce: 0.2, delay: 0.2
          },
        });
      }
      if (!inView) {
        animation.start({ opacity:0, y:"-5vw" })
      }
    }, [inView]);    

    useEffect(() => {
        if (inView) {
          animation2.start({
            y: 0,
            opacity:1,
            transition: {
              type: 'spring', duration: 2, bounce: 0.2, delay: 0.2
            },
          });
        }
        if (!inView) {
          animation2.start({ opacity:0, y:"5vw" })
        }
      }, [inView]);  

    return (
        <div  className="video-container">
            <div ref={ref} className='video-div'>
                <motion.div animate={animation} className='video-text'><iframe width="650" height="375" src="https://www.youtube-nocookie.com/embed/iaVGoYlhIUM?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe></motion.div>
                <motion.div animate={animation2} className='video-text text'>
                    <p className='video-header'>The unifying organisation for a shared future of <span>Wildlife</span> and <span>People</span>.</p>
                <p className='video-subtext'>Read about what you can do to influence a change in our most recent blog posts.</p>
                <NavLink className="visitblog-btn" to='/services'>VISIT BLOGS</NavLink>
                </motion.div>
            </div>



        </div>
    )
}

export default Video