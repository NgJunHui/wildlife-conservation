import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { onGetAnimals } from '../../../actions';
import ClipLoader from "react-spinners/ClipLoader";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const AnimalSearch = () => {
    const settings = {
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1240,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

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
              type: 'spring', duration: 2, bounce: 0.2, delay: 0.5
            },
          });
        }
        if (!inView) {
          animation2.start({ opacity:0, y:"5vw" })
        }
      }, [inView]);    


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(onGetAnimals())
    }, []);
    const animalsApi = useSelector((state) => state.animals);

    function searchFor(term) {
        return function (x) {
            return x.animal_type.toLowerCase().includes(term.toLowerCase()) || !term;
        }
    }

    const [term, setTerm] = useState('');

    const searchHandler = (e) => {
        console.log(e.target.value)
        setTerm(e.target.value);
    }

    return (
        <div className='animals-container'>
            <div ref={ref} className='animals-div'>
                <motion.div animate={animation} className='animals-header'>
                <h3 >Meet the <span>WILDLIFE</span></h3>
                <input id="search" name="search" type="text" className="animals-input" placeholder="e.g. Reptile, Mammal or Bird" value={term} onChange={searchHandler}></input> 
                 </motion.div>

                <Slider {...settings} >
                    
                    {animalsApi.length ? (animalsApi.filter(searchFor(term)).map(i => {
                        return (
                            <motion.div animate={animation} className='animals' key={i.id}>
                                <div className='animals-top'>
                                    <div><img src={i.image_link} /></div>
                                    <p>{i.name}</p>
                                </div>
                                <div className='animals-bottom'>
                                    
                                    <p><span>Type:</span> {i.animal_type}</p>
                                    <p><span>Lifespan:</span> {i.lifespan} years</p>
                                    <a href={`https://en.wikipedia.org/wiki/${i.name}`}  target="_blank" className='animal-btn'>Learn More</a>
                                </div>
                            </motion.div>
                        )
                    })) : (<div className='api-spinners'>
                        <ClipLoader {...settings}
                            color={'#395144'}
                            loading={true}
                            size={100}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    </div>)}
                </Slider>

            </div>
        </div>
    )
}

export default AnimalSearch;