import React, {useEffect} from 'react'
import Community from '../../../images/community-img.jpg'
import { GiElephant } from 'react-icons/gi'
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const JoinOurCommunity = () => {
  const { ref, inView } = useInView();
    const animation = useAnimation();
    const animation2 = useAnimation();
    useEffect(() => {
      if (inView) {
        animation.start({
          y: 0,
          opacity: 1,
          transition: {
            type: 'spring', duration: 2, bounce: 0.2, delay: 0.2
          },
        });
      }
      if (!inView) {
        animation.start({ opacity: 0, y: "-10vw" })
      }
    }, [inView]);
  
    useEffect(() => {
      if (inView) {
        animation2.start({
          x: 0,
          opacity: 1,
          transition: {
            type: 'spring', duration: 2, bounce: 0.2, delay: 0.2
          },
        });
      }
      if (!inView) {
        animation2.start({ opacity: 0, x: "-10vw" })
      }
    }, [inView]);
  return (
    <div ref={ref} className='community-container'>
        <motion.h3 animate={animation} className='community-title'><GiElephant size="90px" style={{paddingRight:'10px'}}/>JOIN OUR COMMUNITY</motion.h3>
        <motion.p animate={animation2} className='community-text'>We are commited to the conservation of native species, with active involvement in habitat recovery and the rehabilitation of wildlife.</motion.p>
        <img src={Community} className="community-img"/>
    </div>
  )
}

export default JoinOurCommunity