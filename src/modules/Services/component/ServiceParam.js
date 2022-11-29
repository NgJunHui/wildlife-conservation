import React, { Component } from 'react'
import { serviceData } from '../../../data'
import ServiceBanner from './ServiceBanner'
import { withRouter } from './withRouter'

class ServiceParam extends Component {
    state = {
        blog: []
    }

    componentDidMount = () => {
        let id = this.props.params.service_id;
        this.setState({
            blog: serviceData[id]
        })
    }





    render() {

        return (
            <div>
                <ServiceBanner />
                <div className='single-container'>
                    <div className='single-header'>
                        <h5>Our Services</h5>
                        <h3>{this.state.blog.title}</h3>
                    </div>
                    <div className='single-text'>
                        <p>{this.state.blog.description1}</p>
                        <p>{this.state.blog.description2}</p>
                        <img className='single-img' src={this.state.blog.image} />
                        <p>{this.state.blog.description3}</p>
                        <p>{this.state.blog.description4}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(ServiceParam);
