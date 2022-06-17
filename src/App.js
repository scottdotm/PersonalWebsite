// eslint-disable-next-line
import logo from './logo.svg';
import { Link } from "react-router-dom";
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// attempted to use popovers - too much for not alot of functionality, along with having to initialize them due to 'Popovers are opt-in for performance reasons, so you must initialize them yourself.' - per Bootstrap's website
import 'bootstrap/dist/js/bootstrap.min.js';
import Navigation from './routes/Navigation';
import Projects from './routes/Projects';

/*
overarching application to be diplayed on every page
Need to implement navigation here and abstract different areas of 
content on the webpage (i.e. definitions, todo, contact info)
*/

//const newTime = new Date().toLocaleTimeString();
const siteName = 'Scott Muth Personal Website';

//Clock logic - needs citation - LOCATED IN CONTENT
// Clock is a React.component
class Clock extends React.Component {
  //construct 
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <a className="btn btn-primary" href='https://reactjs.org/docs/state-and-lifecycle.html'>State and Lifecycle</a>
        <h2 id="time" title="ELEMENT TWO">It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

//Page Content - Switch statement to use for navigation?
function Content() {

  return (
    //All return content MUST be contained within a container - in this case the div 
    //!you will get errors if you try to display multiple lines of content without this.!
    <div className="container">
      <h1 className="alert alert-primary" role="alert">{siteName}</h1>
      <div className="btn-group" role="group" aria-label="Basic example">
        <a className="btn btn-primary" href="https://getbootstrap.com" role="button" target="_blank" rel="noreferrer">To Bootstrap</a>
        <a className="btn btn-primary" href="https://reactjs.org" role="button" target="_blank" rel="noreferrer">To React</a>
        <a className="btn btn-primary" href="https://www.merriam-webster.com/" role="button" target="_blank" rel="noreferrer">To Merriam Webster</a>
        <a className="btn btn-primary" href="https://reactjs.org/docs/components-and-props.html" role="button" target="_blank" rel="noreferrer">Components and Props</a>
      </div>

      <h1>Currnetly working on : Navigation/ReactRouting</h1>

      <div id="todo" title="ELEMENT ONE">
        <h1>To Do's</h1>
        <ul>
          <li>Add to definitions</li>
          <li><del>Bootstrap</del></li>
          <div>
            <li className="bg-warning"><del>Accounts</del></li>
            <ol className="bg-warning">
              <del>
                <li>Database Connection (sql)</li>
                <li>Login/password</li>
                <li>Admin Users</li>
              </del>
            </ol>
          </div>
          <li><del>Navigation<p>Need to fix - starting in collapse mode when first entering website.</p></del></li>
          <li>
            <p>Setup multipule views of single page application for navbar elements. <del>Add react router npm.</del></p>
            <div className="btn-group" role="group" aria-label="Basic example">
              <a className="btn btn-primary" href="https://reactrouter.com/" target="_blank" rel="noreferrer">React Router</a>
              <a className="btn btn-primary" href="https://www.split.io/blog/react-router-feature-flags/" target="_blank" rel="noreferrer">Single Page application</a>
            </div>
          </li>
          <li>Projects</li>
          <ol>
            <li>Skulled Biker - Fresh</li>
            <li>Python application - Dist Java app update? Or something new?</li>
          </ol>
          <li>Contacts <p>Send to Email</p></li>
          <li>Goals</li>
          <li>Images (bootstrap)</li>
          <li>Books read/currently reading (List/images)</li>
        </ul>
      </div>
      {
        //Clock is updated every second, and displays the current local time : lookup Clock class above ^
      }
      <Clock />
      {
        //Definitions sections NEEDS TO BE ABSTRACTED
      }
      <Link to="/Definitions" className="btn btn-primary">Definitions</Link>
      {
        //Projects Section of webpage NEEDS TO BE ABSTRACTED
      }
      <Projects />
    </div>

  );
}

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
function Footer() {
  return (
    <nav className="navbar sticky-bottom bg-light">
      <div className="container-fluid">
        <div className="container">
          <p className="text-center"><Contact /></p>
        </div>
      </div>
    </nav>
  );
}

//Application display
function App() {
  return (
    <div className="root" id="root">
      {/* <Navbar /> */}
      <Navigation />

      <Content />

      <Footer />
    </div>
  );
}

export default App;
