// import Navbar from '../App.js';
// import Footer from '../App.js';
// import logo from '../logo.svg';
// import { Link } from "react-router-dom";
import '../App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';

export default function Definitions() {
  return (
    <div className="root" id="root">
      <Navigation />
      <h1>HELLO WORLD</h1>
      <p>LORIEM IPSUM TEXT HERE whats up yo </p>
    </div>
  );
}