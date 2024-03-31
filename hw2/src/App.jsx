import React from 'react'
import LoginPage from './pages/LoginPage'
import { Routes, Route } from 'react-router-dom'
import RegisterPage from './pages/Register'

const App = () => {
  return (
    <Routes>
      <Route path={'/'} element={<LoginPage/>}/>
      <Route path={'/signup'} element={<RegisterPage/>} />
    </Routes>
      
  )
}

export default App
