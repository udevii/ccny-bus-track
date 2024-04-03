import React from 'react'
import LoginPage from './pages/LoginPage'
import { Routes, Route } from 'react-router-dom'
import RegisterPage from './pages/Register'
import HomePage from './pages/HomePage'
import Ccny from './pages/CCNY'
import Street125 from './pages/Street125'
import Street145 from './pages/Street145'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/signup' element={<RegisterPage/>} />
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/CCNY' element={<Ccny/>}/>
        <Route path='/Street125' element={<Street125/>}/>
        <Route path='/Street145' element={<Street145/>}/>
        {/* Your other routes */}
      </Routes>
    </>
  )
}

export default App

