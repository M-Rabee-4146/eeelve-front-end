import { Check, CheckSquare } from 'lucide-react'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { Link, useNavigate, useNavigation } from 'react-router-dom'
import { loginuser } from '../Redux_toolkit/Features/auth'
import { jwtDecode } from 'jwt-decode'

const Login = () => {
    const [Email, UpdatedEmail] = useState('')
    const [Password, UpdatedPassword] = useState('')
    const data = { email: Email, password: Password }
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [errormsg, setErrormsg] = useState('')

    const formHandler = async (e) => {
        e.preventDefault()
        console.log(data)
        const response = await dispatch(loginuser(data))
        console.log(response)
        if (response && response.type.endsWith('/fulfilled')) {
            const token = response.payload.token;
            // localStorage.setItem('token', token);
            const decoded = jwtDecode(token);
            // localStorage.setItem('role', decoded.role); // Save role for frontend checks
            toast.success(response.payload.message);
            navigate(decoded.role === 'admin' ? '/admin' : '/' || decoded.role === 'editor' ? '/editor' : '');
        }
        else {
            toast.error(response.payload)
            setErrormsg(true)
        }
    }


    return (
        <div id='body ' className='flex justify-center  flex-col md:flex-row w-full my-5'>
            <div className="Login px-8  min-w-fit md:max-w-lg w-full md:border-e h-fit   border-e-gray-400 relative mb-5">


                <h3 className='border-b-2 border-gray-200 text-3xl text-gray-700 pb-3 pt-2  after:border-b-amber-500 after:bg-amber-400 after:h-0.5 after:w-20 after:absolute after:inset-0 after:top-14 after:left-8  '>Login</h3>
                <form onSubmit={formHandler}>
                    <h2 className='mb-3 mt-2 text-gray-600'>Welcome back! Sign in to your account</h2>
                    <label htmlFor="email" className='font-semibold'>Email Address*</label>
                    <div className="inputs my-3">
                        <input className='rounded-3xl w-full border-gray-400 h-12' autoComplete='current-email' type="email" onChange={(e) => UpdatedEmail(e.target.value)} required />
                    </div>
                    <label htmlFor="email" className='font-semibold'>Password*</label>
                    <div className="inputs my-3">
                        <input autoComplete="current-password" className='rounded-3xl w-full border-gray-400 h-12' type="password" onChange={(e) => UpdatedPassword(e.target.value)} required />
                    </div>
                    {errormsg && <p className='text-red-500'>Invalid Email or Password</p>}
                    <div className="links flex justify-between text-gray-600 text-sm mb-3">
                        <Link to={'/'} className='hover:text-amber-400 transition-all duration-300'><h2>Return to Store</h2></Link>
                        <Link className='hover:text-amber-400 transition-all duration-300'><h2>Forgotten Password?</h2></Link>
                    </div>
                    <button className='bg-amber-400  hover:bg-black w-44 h-12 rounded-3xl font-bold hover:text-amber-400 transition-all duration-300' type='submit'>
                        Login
                    </button>
                </form>
            </div>
            <div className="Login px-8  min-w-fit max-w-lg w-full border-e-gray-400 relative">


                <h3 className='border-b-2 border-gray-200 text-3xl text-gray-700 pb-3 pt-2  after:border-b-amber-500 after:bg-amber-400 after:h-0.5 after:w-20 after:absolute after:inset-0 after:top-14 after:left-8  '>Create New Account</h3>
                <h2 className='mt-2 text-gray-600'>Create Your Own Account</h2>
                <h1 className='my-3  text-gray-600 text-lg font-semibold'>Sign Up Today and You Will Be Able To :</h1>
                <ul  >
                    <li className='mb-2 text-gray-600 flex items-center'><CheckSquare className='size-5 text-green-600 mx-1' /> Speed your way through the checkout</li>
                    <li className='mb-2 text-gray-600 flex items-center'><CheckSquare className='size-5 text-green-600 mx-1' /> Track your orders easily</li>
                    <li className='mb-2 text-gray-600 flex items-center'><CheckSquare className='size-5 text-green-600 mx-1' /> Keep a record of all your purchases</li>
                </ul>
                <Link to={'/api/Register'}> <button className='bg-amber-400  hover:bg-black w-44 h-12 my-3 rounded-3xl font-bold hover:text-amber-400 transition-all duration-300' type='submit'>
                    Register
                </button></Link>
            </div>
        </div>
    )
}

export default Login
