import React, { useEffect } from 'react'
import { serviceData } from '../../../data'
import { Link, NavLink } from 'react-router-dom'
import { GiElephant } from 'react-icons/gi'
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const AllServices = () => {

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

    const arrData = serviceData.length ? (serviceData.map(info => {
        return (
            <div className="all-service-container" key={info.id}>
                <div className='all-service-text'>
                    <h3>{info.title}</h3>
                    <p>{info.preview}</p>
                    <Link className="service-btn" to={'/services/' + info.id}>Learn More</Link>
                </div>
                <div>
                    <img className='all-service-image' src={info.image} />
                </div>
            </div>

        )
    })) : (
        <div className='api-spinners'>
            <ClipLoader
                color={'#395144'}
                loading={true}
                size={100}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>)

    return (
        <div className='blog-container'>
            <div ref={ref} className='all-service-title'>
                <motion.h3 animate={animation}><GiElephant size="90px" style={{ paddingRight: '10px' }} />WILDLIFE ACT</motion.h3>
                <motion.p animate={animation2} className="all-service-subtext"><NavLink to='/join' className="all-service-navlink"> JOIN US</NavLink> in the <span>Wildlife Act</span> to strengthen the protection, preservation and management of wildlife in Singapore!</motion.p>
            </div>
            {arrData}
        </div>
    )
}

export default AllServices;
