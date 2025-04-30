import React from 'react'
import Home from './Pages/Home'
import { Route, Router, Routes } from 'react-router-dom'
import SignUp_Login from './Pages/AuthPage'
import Register from './components/Register'
import AuthPage from './Pages/AuthPage'
import { Toaster } from 'react-hot-toast'
import ProtectedRoute from './components/ProtectedRoute'
import AdminDashboard from './Pages/DashboardLayout'
import SignupAdmin from './Admin/SignupAdmin'
import Product_detail from './Pages/Product_detail'
import AuthWatcher from './hook/AuthWatcher'
import { ScrollbarPlugin } from 'smooth-scrollbar'
import CartPage from './Pages/CartPage'
import Checkout from './Pages/Checkout'
// import SmoothScrollContainer from './MiddleWare/SmoothScrollContainer'

const App = () => {
  return (
    <div>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      {/* <SmoothScrollContainer/> */}
      <Routes>

          <Route path="/admin" element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminDashboard />
            </ProtectedRoute>
          } />

          <Route path="/editor" element={
            <ProtectedRoute allowedRoles={['editor', 'admin']}>
              <AdminDashboard />
              {/* <EditorPage /> */}
            </ProtectedRoute>
          } />
          <Route path="/api/:linkOrParam" element={<AuthPage />} />
          <Route path="/product/:id" element={<Product_detail />} />
          <Route path="/product/Cart" element={<CartPage />} />
          <Route path="/product/Cart/Checkout" element={<Checkout/>} />
          <Route path="/" element={<Home />} />
      </Routes>
      <AuthWatcher />
    </div>
  )
}

export default App
