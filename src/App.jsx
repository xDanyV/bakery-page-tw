import { use, useRef, useEffect, useState } from 'react'
import { useLocation, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { AnimatePresence } from 'framer-motion'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {
  const location = useLocation()
  return (
    <div className="flex flex-col min-h-screen">
      <Toaster
        position="top-right"
      />
      <Navbar />
      <main className="flex-grow lg:px-50"> 
        <AnimatePresence mode='wait' >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

export default App
