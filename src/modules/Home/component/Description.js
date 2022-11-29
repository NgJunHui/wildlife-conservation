import React, {useEffect} from 'react'
import rhinoImg from '../../../images/w-rhino.jpg';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const Description = () => {
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
      animation.start({opacity:0, y: '-5vw' })
    }
  }, [inView]);

  useEffect(() => {
    if (inView) {
      animation2.start({
        x: 0,
        opacity:1,
        transition: {
          type: 'spring', duration: 2, bounce: 0.2, delay: 0.2
        },
      });
    }
    if (!inView) {
      animation2.start({opacity:0, x: '5vw' })
    }
  }, [inView]);

  return (
    <div  className='description-container'>
      <motion.div animate={animation} className='rhino-title'><h2><strong>H</strong>eart <strong>F</strong>or <strong>A</strong>nimals</h2></motion.div>
      <div ref={ref} className='rhino-container'>
        <div className='home-members'>
          <motion.div animate={animation2} className='rhino-texts'>
            <p className='description-subtext'>OUR CONNECTION TO NATURE</p>
            <p className='member-text member'>In <span>HFA</span>, our goal of wildlife conservation is to ensure the survival of endangered species, and to educate people on living sustainably with other species. Our
              bold vision is to rehabilitate and restore wildlife and habitats and build resilience against climate disasters.</p>
          </motion.div>
          <motion.div animate={animation2} ><img className='member-img member' src={rhinoImg} /></motion.div>
        </div>
      </div>
    </div>
  )
}

export default Description;