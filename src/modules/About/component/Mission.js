import React, {useEffect} from 'react'
import { Grid, Typography } from '@mui/material'
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const Mission = () => {
    const { ref, inView } = useInView();
    const animation = useAnimation();
    const animation2 = useAnimation();
    const animation3 = useAnimation();
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
        animation.start({ opacity:0, y:"-10vw" })
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
          animation2.start({ opacity:0, x:"-10vw" })
        }
      }, [inView]);    

      useEffect(() => {
        if (inView) {
          animation3.start({
            x: 0,
            opacity:1,
            transition: {
              type: 'spring', duration: 2, bounce: 0.2, delay: 0.2
            },
          });
        }
        if (!inView) {
          animation3.start({ opacity:0, x:"10vw" })
        }
      }, [inView]);    
  

    return (
        <div ref={ref}>
        <motion.div animate={animation} className='mission-hfa'><h2><strong>H</strong>eart <strong>F</strong>or <strong>A</strong>nimals</h2></motion.div>
        <div className='mission-container'>
            <motion.div animate={animation2} className='mission'>
                <h3>OUR MISSION</h3>
                <p>HRA believe that all of us have a responsibility to protect the world’s precious wildlife, not just in our
                    lifetimes, but for the generations of the future.</p>
            </motion.div>
            <motion.div animate={animation3} className='vision'>
                <h3>OUR VISION</h3>
                <p>HRA envisions a world where wildlife thrives in healthy lands and seas, valued by societies that embrace and benefit from the diversity and integrity of life on earth.</p>
            </motion.div>
        </div>
        </div>
    )
}

export default Mission


{/* <Grid container spacing={10} sx={container}>
<Grid item md={6} xs={12} sx={{border:'1px solid black'}}>
    <Typography >OUR MISSION</Typography>
    <Typography >
        HRA believe that all of us have a responsibility to protect the world’s precious wildlife, not just in our
        lifetimes, but for the generations of the future.</Typography>
</Grid>
<Grid item md={6} xs={12}>
    <Typography >OUR VISION</Typography>
    <Typography >HRA envisions a world where wildlife thrives in healthy lands and seas, valued by societies that embrace and benefit from the diversity and integrity of life on earth.</Typography>
</Grid>
</Grid> */}

