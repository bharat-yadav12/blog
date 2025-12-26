import { useState,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import "tailwindcss"
function App() {
  const [count, setCount] = useState(0)
  const [loading,setLoading]  = useState(true);
  return (
    <>
    <h1 className="bg-amber-50">A blogapp with appwrite</h1>
    </>
  )
}

export default App
