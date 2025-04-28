import { use,useRef, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const counterRef = useRef(null) // 1. Creamos una referencia al div del contador

  useEffect(() => {
    if (counterRef.current) {
      counterRef.current.classList.add('animate-ping');

      const timeoutId = setTimeout(() => {
        counterRef.current.classList.remove('animate-ping');
      }, 200); // Tiempo del efecto

      // Limpieza del timeout en caso de que el componente se desmonte antes
      return () => clearTimeout(timeoutId);
    }
  }, [count]);


  return (
    <>
      <div className='flex justify-center'>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1 className='text-red-500 '>Vite + React</h1>

      <div className="grid grid-cols-1 gap-4 content-center mt-5">
        <p className="text-white bg-blue-600 rounded-2xl px-4 py-2 font-bold text-lg">Contador Actual: <div ref={counterRef} className='counter'>{count}</div></p>
        <button className="bg-blue-600 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-2xl mr-5 w-full" onClick={() => setCount((count) => count + 1)}>
          Contador más 1
        </button>
        <button className="bg-red-600 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-2xl w-full" onClick={() => setCount((count) => count - 1)}>
          Contador menos 1
        </button>
      </div>
    </>
  )
}

export default App
