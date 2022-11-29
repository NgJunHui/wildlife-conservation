import React, {useEffect} from 'react'
import './contact.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { generalFAQ } from '../../../data';
import { Box, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material'
import { GiElephant } from 'react-icons/gi'
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const GeneralFaq = () => {

    const { ref, inView } = useInView();
    const animation = useAnimation();
    const animation2 = useAnimation();
    const animation3 = useAnimation();

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
        animation.start({ opacity: 0, y: "-8vw" })
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
        animation2.start({ opacity: 0, x: "-8vw" })
      }
    }, [inView]);

    useEffect(() => {
        if (inView) {
          animation3.start({
            x: 0,
            opacity: 1,
            transition: {
              type: 'spring', duration: 2, bounce: 0.2, delay: 0.2
            },
          });
        }
        if (!inView) {
          animation3.start({ opacity: 0, x: "8vw" })
        }
      }, [inView]);

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const typoAns = {
        background: '#F4F4F4',
        borderBottom: '0.1px solid #D2D2D2',
    }

    const subTitle={
        fontSize: '22px',
        fontWeight: '400',
        mb: 3,
        color: '#787878',
        textAlign: 'center',
    }



    const dataDisplay = generalFAQ.map(item=>{
        return(
           
            <Accordion key={item.id}expanded={expanded === `panel${item.id}`} onChange={handleChange(`panel${item.id}`)}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${item.id}bh-content`}
                    id={`panel${item.id}bh-header`}
                    sx={typoAns}
                >
                    <Typography sx={{ fontWeight: 500 }}>{item.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    {item.answer}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        )
    })
    return (
        <Box ref={ref} sx={{ width: '80%', margin: '150px auto 0 auto' }}>
           <motion.p animate={animation} className='faq-title'><GiElephant size="90px" style={{paddingRight:'10px'}}/>Frequently Asked Questions</motion.p>
            <motion.p animate={animation2} className='faq-subtext'>Looking for answers? Below you'll find the answers to the most common questions you may have on HFA.<br/>If you still can't find the answer you're looking for, simply contact us!</motion.p>
                <motion.p animate={animation3}>{dataDisplay}</motion.p>
        </Box>
    )
}

export default GeneralFaq;