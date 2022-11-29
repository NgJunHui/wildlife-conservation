import React from 'react'
import '../component/home.css'
import Hero from '../component/Hero';
import Description from '../component/Description';
import Video from '../component/Video';
import Subscribe from '../component/Subscribe';
import AnimalSearch from '../component/AnimalSearch';

const Home = () => {
    return (
        <>
            <Hero />
            <Description />
            <AnimalSearch/>
            <Video />
            <Subscribe />

        </>
    )
}

export default Home;