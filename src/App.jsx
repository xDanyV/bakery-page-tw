import { use, useRef, useEffect, useState } from 'react'
import { useLocation, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'

function App() {
  const location = useLocation()
  return (
    <>
      <Navbar />
      <AnimatePresence mode='wait' >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
