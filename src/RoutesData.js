import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./modules/Home/container/Home";
import About from "./modules/About/container/About";
import Contact from './modules/Contact/container/Contact';
import Join from './modules/Join/container/Join';
import Services from './modules/Services/container/Services'
import { Navbar } from "./stories/Component";
import { Foot } from "./stories/Footer.stories";
import ServiceParam from "./modules/Services/component/ServiceParam";
import ScrollToTop from "./utils/ScrollToTop";

const RoutesData = () => {
    return (

        <BrowserRouter>
            <ScrollToTop />
            <Navbar />
            <div className="pages">
                <Routes>
                    <Route exact path="/" activeClassName='active' element={<Home />} />
                    <Route path="/home" activeClassName='active' element={<Home />} />
                    <Route path="/about" activeClassName='active' element={<About />} />
                    <Route path="/services" activeClassName='active' element={<Services />} />
                    <Route path="/join" activeClassName='active' element={<Join />} />
                    <Route path="/contact" activeClassName='active' element={<Contact />} />
                    <Route path="/services/:service_id" element={<ServiceParam />} />
                </Routes>
            </div>
            <Foot />
        </BrowserRouter>

    )

}

export default RoutesData;