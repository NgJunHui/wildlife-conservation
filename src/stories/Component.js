import React, { useState } from 'react';
import './component.css';
import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
import { TextField } from '@mui/material';
import { NavLink } from "react-router-dom";
import { FaYoutube, FaLinkedinIn, FaFacebookF, FaTwitter } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import Logo from '../images/hfa-logo.png';
import ScrollToTop from 'react-scroll-to-top';
import { border } from '@mui/system';
import PrivacyPolicy from '../modules/Home/component/PrivacyPolicy';
import Terms from '../modules/Home/component/Terms';

export const Input = ({ id, variant, value, helperText, type, label, name, placeholder, error, onChange }) => {
    return (
        <TextField

            type={type}
            id={id}
            label={label}
            variant={variant}
            value={value}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            helperText={helperText}
            error={error}
        />
    )
}

export const Navbar = () => {
    const [btnClick, setClick] = useState(false);

    const handleClick = () => {
        setClick(!btnClick);
    }

    return (
        <nav className='navbar'>
            <div className='nav-container'>
                <ul className={btnClick ? 'nav-menu active' : 'nav-menu'}>
                    {/* <li className=""><NavLink to='/' className='nav-logo'><img src={Logo} className="nav-logo" /></NavLink></li> */}
                    <li className='nav-item'><NavLink to='/home' onClick={handleClick} className='nav-links'>Home</NavLink ></li>
                    <li className='nav-item'><NavLink to='/about' onClick={handleClick} className='nav-links'>About</NavLink></li>
                    <li className='nav-item'><NavLink to='/services' onClick={handleClick} className='nav-links'>Services</NavLink></li>
                    <li className='nav-item'><NavLink to='/join' onClick={handleClick} className='nav-links'>Join Us</NavLink></li>
                    <li className='nav-item'><NavLink to='/contact' onClick={handleClick} className='nav-links'>Contact</NavLink></li>
                </ul>
                <div className='nav-icon' onClick={handleClick} >
                    {btnClick ? <AiOutlineClose size='40px' /> : <FiMenu size='40px' />}
                </div>
            </div>
        </nav>

    )
}


export const Footer = () => {
    const [modalState, setModalState] = useState(false)
    const openModal = () => {
        setModalState(!modalState)
    }

    const [terms, setTerms] = useState(false)
    const openTerms = () => {
        setTerms(!terms)
    }

    return (
        <>
            <div>

                <ScrollToTop
                    smooth color="white"
                    svgPath='M24.94,67.88A14.66,14.66,0,0,1,4.38,47L47.83,4.21a14.66,14.66,0,0,1,20.56,0L111,46.15A14.66,14.66,0,0,1,90.46,67.06l-18-17.69-.29,59.17c-.1,19.28-29.42,19-29.33-.25L43.14,50,24.94,67.88Z'
                    viewBox='0 0 120 120'
                    style={{ backgroundColor: "#AA8B56", borderRadius: '50%', width: '50px', height: '50px' }} />
            </div>
            <footer className='footer'>
                <div className='container'>
                    <div className='row'>
                        <div className='footer-col'>
                           <NavLink  to='/home'><img src={Logo} className="footer-logo" /></NavLink> 
                            <ul>
                                
                                <li className= "modal-pp" onClick={openModal}>Privacy Policy</li>
                                <li className='modal-tnc'onClick={openTerms}>Terms & Condition</li>
                            </ul>
                        </div>
                        <div className='footer-col'>
                            <h4>Quick Links</h4>
                            <ul>
                                <li><NavLink to='/contact'>FAQ</NavLink></li>
                                <li><NavLink to='/services'>Services</NavLink></li>
                                <li><NavLink to='/join'>Join Team</NavLink></li>
                                <li><NavLink to='/about'>About Us</NavLink></li>
                            </ul>
                        </div>
                        <div className='footer-col'>
                            <h4>Follow Us</h4>
                            <div className='social-links'>
                                <a href="https://www.facebook.com/" target="_blank"><FaFacebookF size='28px' /></a>
                                <a href="https://www.instagram.com/" target="_blank"><AiFillInstagram size='28px' /></a>
                                <a href="https://www.youtube.com/" target="_blank"><FaYoutube size='28px' /></a>
                                <a href="https://www.linkedin.com/" target="_blank"><FaLinkedinIn size='28px' /></a>
                                <a href="https://twitter.com/" target="_blank"><FaTwitter size='28px' /></a>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
            <PrivacyPolicy toggle={modalState} action={openModal}/>
            <Terms toggleTerms={terms} termsAction={openTerms}/>
            
        </>
    )
}

export const Button2 = ({ type, value, name, onChange }) => {
    return (
        <button
            className='new-btn'
            type={type}
            value={value}
        >
            {name}
        </button>
    )
}