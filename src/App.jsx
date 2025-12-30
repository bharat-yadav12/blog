import { useState,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import UseRefExample from './components/useRefEXample'
import './App.css'
import UseLayoutEffect from './components/UseLayoutEffect'
import Stopwatch from './components/Stopwatch'
//import "tailwindcss"
function App() {
  const [count, setCount] = useState(0)
  const [loading,setLoading]  = useState(true);
  return (
    <>
    {/* <h1 className="bg-amber-50">A blogapp with appwrite</h1>
    <UseRefExample/> */}
    <UseLayoutEffect/>
    <Stopwatch/>
    </>
  )
}

export default App
