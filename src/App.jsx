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
  // const [count, setCount] =useState(0)
  // const [show, setShow] =useState(true)
  // const updateCount =()=>{
  //   setCount(count + 1)
  // }
  // const restCount =()=>{
  //   setCount(0)
  // }
  // const hideCount =()=>{
  //   setShow(false)
  // }
  // const displayCount =()=>{
  //   setShow(!show)
  // }
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
    {/* <center>
      {show && <h1>{count}</h1>}
      <button onClick={updateCount}>Click to update Button</button>
      <br></br>
      <button onClick={restCount}>Click to Reset Button</button>
      <br></br>
      <button onClick={hideCount}>Click to Hide Button</button>
      <br></br>
      <button onClick={displayCount}>{(show)?'Hide Count':'Show Count'}</button>
    </center> */}

</>
  )
}

export default App


