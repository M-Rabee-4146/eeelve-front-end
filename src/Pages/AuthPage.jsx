import { HiHome } from "react-icons/hi";
import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import React from 'react'
import Navbar from "../components/Navbar";
import Login from "../components/Login";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import TopProducts from "../components/TopProducts";
import { useParams } from "react-router-dom";
import Register from "../components/Register";

const AuthPage = () => {
    const {linkOrParam}=useParams()
  return (
    <div>
      <Navbar/>
<div className="link container mx-auto">

    <Breadcrumb className="my-2 mx-3"  aria-label="Default breadcrumb example">
      <BreadcrumbItem href="/" icon={HiHome}>
        Home
      </BreadcrumbItem>
      <BreadcrumbItem>Login</BreadcrumbItem>
    </Breadcrumb>
    <div className="parent-register">
            {linkOrParam==='Login'?<Login/>:linkOrParam==='Register'?<Register/>:''}
    </div>
</div>
<TopProducts/>
<Newsletter/>
<Footer/>

    </div>
  )
}

export default AuthPage
