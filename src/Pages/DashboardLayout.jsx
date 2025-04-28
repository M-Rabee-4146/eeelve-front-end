import React from 'react'
import Dasshboarduiverse from '../components/dasshboarduiverse'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const DashboardLayout = () => {
  
  return (
    <div className='bg-[#e8e8e8]'>
        <Dasshboarduiverse/>
        <Outlet/>
    </div>
  )
}

export default DashboardLayout
