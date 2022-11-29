import React from 'react';
import AllServices from '../component/AllServices';
import Blogs from '../component/Blogs';
import ServiceBanner from '../component/ServiceBanner';

const Services = () => {
    return (
        <>
            <ServiceBanner />
            <AllServices />
             <Blogs/> 
        
        </>
    )
}

export default Services;