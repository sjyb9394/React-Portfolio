import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';

//components
import {Main, About, Contact, MySkills, Project, Nav, Hamburger} from './index.js';

export default function App() {
  return (
    <div className="App" style={{width:'100%'}}>
      <Nav />
      <Hamburger />

      <div className="main-content">
        <Route exact path="/">
          <Main />
          <About />
          <MySkills />
          <Project />
          <Contact />
        </Route>
        <Route exact path="/about"><About /></Route> 
        <Route exact path="/contact"><Contact /></Route> 
        <Route exact path="/myskills"><MySkills /></Route>
        <Route exact path="/project"><Project /></Route>
      </div>

    </div>
  );
}

