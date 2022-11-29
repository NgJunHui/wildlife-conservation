import React, {useEffect} from 'react'
import chairman from '../../../images/chairman-img.jpg'
import directorOne from '../../../images/directors-1.jpg'
import directorTwo from '../../../images/directors-2.jpg'
import directorThree from '../../../images/directors-3.jpg'
import directorFour from '../../../images/directors-4.png'
import { GiElephant } from 'react-icons/gi'
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';


const People = () => {

  const { ref, inView } = useInView();
  const animation = useAnimation();
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

  return (
    <div ref={ref}> 
      <motion.h3 animate={animation} className='people-title'><GiElephant size="90px" style={{ paddingRight: '10px' }} />OUR TEAM</motion.h3>
    <div className='people-bg'>   
    <div className='people-container'>
      <div className='people-content'>
        <div className='people-img'><img src={chairman} /></div>
        <div className='people-text'>
          <h4>Justin Koh</h4>
          <h5>Chairman, HFA-Singapore</h5>
          <h6>SINCE 26 APRIL 2019</h6>
          <p>As the Chairman of the Board of the Heart for Animals Foundation (HFA), Justin Koh
            leadership at HFA- Singapore would be instrumental in helping address conservation and climate challenges such as deforestation, haze pollution,
            food security, plastics, sustainable finance, sustainable consumption and illegal wildlife trade. He also acts as an advisor to corporate partners on their
            transformation efforts which are grounded in sustainable purpose.
          </p>
        </div>
      </div>
    </div>
    </div>
        <div className='directors-container'>
          <h3 className='directors-title'>BOARD DIRECTORS</h3>

          <div className='directors-content'>

            <div className='each-director'>
              <img src={directorOne} />
              <h6>Barry Tarrant</h6>
              <p>co-founder</p>
            </div>

            <div className='each-director'>
              <img src={directorThree} />
              <h6>Meghan Allard</h6>
              <p>chief science officer </p>
            </div>

            <div className='each-director'>
              <img src={directorTwo} />
              <h6>Martin Copley</h6>
              <p>head of strategy</p>
            </div>

            <div className='each-director'>
              <img src={directorFour} />
              <h6>Janice Hathaway</h6>
              <p>environmental officer</p>

            </div>

          </div>
        </div>
    </div>

  )
}

export default People;