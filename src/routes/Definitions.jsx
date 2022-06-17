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
      <div className='container-fluid'>
        <div className='row'>
          <div id="definitions" title="ELEMENT THREE">
            <h1>Definitions</h1>
            <ul>
              <li>
                <p id="defTitle">Occam's Razor</p>
                <p>The principle (attributed to William of Occam) that in explaining a thing no more assumptions should be made than are necessary. The principle is often invoked to defend reductionism or nominalism.</p>
                <p>The idea of cutting away unnecessary infromation to make informed asumptions based on incomplete information - not a substitue for critical thinking.</p>
              </li>
              <li>
                <p id="defTitle">Scientific Method</p>
                <p>A method of procedure that has characterized natural science since the 17th century, consisting in systematic observation, measurement, and experiment, and the formulation, testing, and modification of hypotheses.</p>
                <ol>
                  <li>Make an observation.</li>
                  <li>Ask a question.</li>
                  <li>Form a hypothesis, or testable explanation.</li>
                  <li>Make a prediction based on the hypothesis.</li>
                  <li>Test the prediction.</li>
                  <li>Iterate: use the results to make new hypotheses or predictions.</li>
                </ol>
              </li>
              <li>
                <a href="https://www.merriam-webster.com/dictionary/virtue" id="defTitle">Virtue</a>
                <p>Behavior showing high moral standards.</p>
              </li>
              <li>
                <a href="https://www.merriam-webster.com/dictionary/morality" id="defTitle">Morality</a>
                <p>Principles concerning the distinction between right and wrong.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
