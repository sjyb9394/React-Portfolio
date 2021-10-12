import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

//components
import Main from './components/Main.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Project from './components/Project.js';
import MySkills from './components/Myskills.js';
import {Nav} from './components/Nav.js';
import Hamburger from './components/Hamburger.js';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

export {Main, About, Contact, Project, MySkills, Nav, Hamburger};
