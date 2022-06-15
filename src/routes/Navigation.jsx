// import Navbar from '../App.js';
// import Footer from '../App.js';
// import logo from '../logo.svg';
import { Link } from "react-router-dom";
//import '../App.css';
//import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navigation() {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="Home">Navigation</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav">
            { //Depricated since we are now using react router 6/09/22
            /*<a className="nav-link active" aria-current="page" href="Home">Home</a>
            <a className="nav-link" href="Definitions">Definitions</a>
            <a className="nav-link" href="Links">Links</a>
            <a className="nav-link disabled" href="Contact">Contact</a>*/}
            <Link to="/Definitions" className="nav-link">Definitions</Link>
            <Link to="/Links" className="nav-link">Links</Link>
            <Link to="/Contact" className="nav-link">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}