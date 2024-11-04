import React from 'react'

// Componen
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'

// Route
import {Routes, Route} from 'react-router-dom';

// Pages
import About from "./pages/About"
import Home from  "./pages/Home"
import Project from  "./pages/Project"
import Contact from  "./pages/Contact"
const App = () => {
  return (
    
    <>
    <Navbar
    // Link
    link1="Home"
    link2="About"
    link3="Project"
    link4="Contact"

    // Path
    path1="/"
    path2="/About"
    path3="/Project"
    path4="/Contact"
    ></Navbar>

    {/* Route */}
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Project' element={<Project/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
    </Routes>
    </>
  )
}

export default App