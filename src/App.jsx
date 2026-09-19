import { useState } from 'react'
import './App.css'
import Navbar from './Components/navbar/nav'
import Home from './Components/home/home'
import About from './Components/About/About'
import Works from './Components/works/works'
import Services from "./Components/Services/Services";
import Testimonal from "./Components/Testimonal/Testimonal";
import Blogs from "./Components/Blogs/Blogs";
import Contact from './Components/Contact/Contact'
import { Routes,Route, Router } from 'react-router-dom'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/work' element={<Works/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/Testimonial' element={<Testimonal/>}/>
    <Route path='/Blog' element={<Blogs/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    </Routes>

</>
  )
}

export default App


