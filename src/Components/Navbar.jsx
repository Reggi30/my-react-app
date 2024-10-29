import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from '../Pages/Home';
import Project from '../Pages/project';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import '../App.css';

const Navbar = () => {
  return (
    <>
    <Router>
            <div>
                <nav>
                    <ul>
                        <div className="logo">
                            <h3>Portofolio</h3>
                        </div>
                        <div className="link">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/project">Project</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        </div> 
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/project" element={<Project/>} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    </>
  )
}

export default Navbar
