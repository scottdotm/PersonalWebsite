// import Navbar from '../App.js';
// import Footer from '../App.js';
// import logo from '../logo.svg';
// import { Link } from "react-router-dom";
import '../App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Navigation from './Navigation';

export default function Footer() {
    // Contact form sent to business email
    // Locations - Footer,
    function Contact() {
        return (
            <div className="container">
                <address>
                    <p>Get in touch : <a href="mailto:scottdotm@gmail.com?subject-Mail from scottdotm.com - ">Scott Muth</a> Located in Wisconsin, around the greater Milwaukee area</p>
                </address>
            </div>
        );
    }

    // Footer of webpage - link to resume, contact, site update and maintained by Scott Muth, additional information
    // Hosting information?
    // background opacity?
    return (
        <div className='container-fluid'>
            <div className='row'>
                <nav className="navbar sticky-bottom bg-light">
                    <div className="container-fluid">
                        <div className="container">
                            <p className="text-center"><Contact /></p>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}