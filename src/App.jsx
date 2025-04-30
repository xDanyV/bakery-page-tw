import { use,useRef, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {
  return (
    <>
    <Navbar />
    <Home/>
    </>
  )
}

export default App
