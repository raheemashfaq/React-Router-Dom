import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  const [data,setData] = React.useState('')

  return (
    <>
    <h1 className='text-3xl text-center mt-9 bg-orange-300 text-orange-500'>React Router</h1>
    </>
  )
}

export default App
