import React from 'react';
import './App.css';
import Forreg from './components/Forreg'
import Home from './components/Home'
 import Explore from './components/Explore'
import Contact from './components/Contact'

import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'



function App() {
  return (
    
      <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
        <div className="container ">
          <a class="navbar-brand text-black fw-bold" href="#">EventPro</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"> <Link to="/">HOME</Link></li>
              <li className="nav-item"> <Link to="/Explore"></Link>EXPLORE</li>
              <li className="nav-item"> <Link to="/Contact"></Link>CONTACT</li>
              {/* <li class="nav-item"> <Link to="/works"></Link>WORKS</li>
              
               */}
            </ul>
          </div>
        </div>
      </nav>
      <Router>
       <Routes>
         {/* Basic Routing */}
        <Route path="/" element={<Home />} />
         <Route path="/Explore" element={<Explore />} />
        {/* <Route path="/works" element={<Works />} />
        
          */}
          <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Forreg" element={<Forreg/>}/>
       </Routes>

   
    </Router>
    
 </div>
  );
}

export default App;
