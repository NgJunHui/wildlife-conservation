import React, {useEffect} from 'react'
import cio from '../../../images/partners/cio.png'
import wcs from '../../../images/partners/wcs.png'
import nea from '../../../images/partners/nea.jpg'
import asap from '../../../images/partners/asap.png'
import mandai from '../../../images/partners/mandai.png'
import rainforest from '../../../images/partners/rainforest.jpg';
import avs from '../../../images/partners/avs.jpg';
import Marquee from 'react-fast-marquee'
import './about.css'
import { GiElephant } from 'react-icons/gi'
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const Partners = () => {
  
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
        x: 0,
        opacity:1,
        transition: {
          type: 'spring', duration: 2, bounce: 0.2, delay: 0.2
        },
      });
    }
    if (!inView) {
      animation2.start({ opacity:0, x:"-5vw" })
    }
  }, [inView]);

  return (
    <>
      <div ref={ref} className='partners-container'>
        <div>
          <motion.h3 animate={animation} className='partners-title'><GiElephant size="90px" style={{ paddingRight: '10px' }} />COPORATE PARTNERSHIPS</motion.h3>
          <motion.p animate={animation2} className='marquee-p'>The voices of our community</motion.p>
        </div>
      </div>
      <div className='partners-marquee'>
        <Marquee direction='right' speed={40}>
          <div className='marquee-img'>
            <img className="cio" src={cio} />
            <img className="wcs" src={wcs} />
            <img className="nea" src={nea} />
            <img className="asap" src={asap} />
            <img className="mandai" src={mandai} />
            <img className="avs" src={avs} />
            <img className="rainforest" src={rainforest} />
          </div>
        </Marquee>
      </div>

    </>

  )
}

export default Partners