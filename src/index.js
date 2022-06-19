import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Definitions from './routes/Definitions';
import Navigation from './routes/Navigation';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //Strict mode is for development and allows for highlighting potential problems in web applications.
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/Definitions" element={<Definitions />} />
      <Route exact path="/Navigation" element={<Navigation />} />
    </Routes>
  </BrowserRouter>
);
//attempting to set interval to update the dateTime in App - unsuccessfull needs more research on components and props https://reactjs.org/docs/components-and-props.html
//setInterval(App, 1000);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// I.e. Google Analytics - https://create-react-app.dev/docs/measuring-performance/
reportWebVitals(console.log);
