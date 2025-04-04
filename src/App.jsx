import React from 'react'
import Home from './Pages/Home'
import { Route, Router, Routes } from 'react-router-dom'
import SignUp_Login from './Pages/AuthPage'
import Register from './components/Register'
import AuthPage from './Pages/AuthPage'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <div>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
       <Routes>
        
                <Route path="/:linkOrParam" element={<AuthPage/>} />
                <Route path="/" element={<Home/>} />
              </Routes>
    </div>
  )
}

export default App
