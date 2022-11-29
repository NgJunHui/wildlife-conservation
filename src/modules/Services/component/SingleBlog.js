import React, { Component } from "react";
import axios from 'axios';
import { ClipLoader } from "react-spinners";
import { WrapperRoute } from "./WrapperRoute";
import ServiceBanner from "./ServiceBanner";
import './service.css'

class SingleBlog extends Component {
    state = {
        blog: null
    }

    componentDidMount = () => {
        let id = this.props.params.id;

        axios.get('https://jsonplaceholder.typicode.com/users/' + id).then((res => {
            console.log(res.data);
            this.setState({
                blog: res.data
            });
        })).catch(err => console.log(err));
    }

    render() {
        const blog = this.state.blog;
        const displayBlog = blog ? (
        <>
            <div className="blog-container">
                <div className="title">Blog: {blog.name}</div>
            
            <p>{blog.address.street}{blog.address.street}</p>
            </div>



        </>) : (<div className='api-spinners'>
            <ClipLoader
                color={'#395144'}
                loading={true}
                size={100}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>);

        return (
            <>
                <ServiceBanner />
                {displayBlog}

            </>
        )
    }
}

export default WrapperRoute(SingleBlog); 