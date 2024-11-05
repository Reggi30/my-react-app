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
const navLink = [
  {link : "Home", path:"/"},
  {link : "About", path:"/About"},
  {link : "Project", path:"/Project"},
  {link : "Contact", path:"/Contact"},
]

  return (
    
    <>

    {/* Navbar */}
    <Navbar navLink={navLink} />


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