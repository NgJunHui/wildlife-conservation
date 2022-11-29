import React, { Component } from 'react'
import { connect } from 'react-redux'
import { onGetData } from '../../../actions'
import ClipLoader from "react-spinners/ClipLoader";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GiElephant } from 'react-icons/gi';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

export class Blogs extends Component {

    componentDidMount = () => {
        this.props.onGetPosts();
    }


    render() {
        const settings = {
            infinite: true,
            dots: true,
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
                      autoplay: true,
                      autoplaySpeed: 2500,
                      infinite: true,
                      dots: true
                    }
                  },
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  autoplay: true,
                  autoplaySpeed: 2500,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide:1, 
                  autoplay: true,
                  autoplaySpeed: 2500,
                  infinite: true,
                  dots: false
                }
              },
              {
                breakpoint: 480,
                settings: {
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 2500,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: false
                }
              }
            ]
          };
      
        return (
            <div className='blog-container'>
                <div className='blog-title'><GiElephant size="90px" style={{paddingRight:'10px'}}/>WILDLIFE BLOG</div>
            <p className='featured-posts-text'>Featured Posts</p>
                <Slider 
                {...settings}>
                    {this.props.posts.length ? (this.props.posts.map(i=>{
                        return(
                            <div className='slider' key={i.title}>
                                <div className='slider-top'>
                                <div><img src={i.urlToImage} alt="Invalid Image"className='slider-img'/></div>
                                <p>{i.title}</p>
                                </div>
                                <div className='slider-bottom'>
                                <div>
                                    <a href={i.url} target='_blank' className='readmore-btn'>Read More</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })):(
                        <div className='api-spinners'>
                        <ClipLoader {...settings}
                            color={'#395144'}
                            loading={true}
                            size={150}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    </div>
                    )}
                </Slider>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onGetPosts: () => dispatch(onGetData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);



        // console.log(this.props.posts)
        // const postList = this.props.posts.length ? (this.props.posts.map(info => {
        //     return (
        //         <div className='card'>
        //             <div className='card-top'>
        //                 <img src={info.urlToImage} alt={info.title} />
        //                 <h3>{info.title}</h3>
        //             </div>
        //             <div className='card-bottom'>
        //                 <p>{info.description}</p>
        //                 <a href={info.url} target="_blank"><button>Read More</button></a>
        //             </div>
        //         </div>

        //     )
        // })) : (
        //     <div className='api-spinners'>
        //         <ClipLoader {...settings}
        //             color={'#395144'}
        //             loading={true}
        //             size={100}
        //             aria-label="Loading Spinner"
        //             data-testid="loader"
        //         />
        //     </div>
        

        // )