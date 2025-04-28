import { Check, CheckSquare } from 'lucide-react'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { SignupUser } from '../Redux_toolkit/Features/auth'

const Register = () => {
    const [UserName, UpdatedName] = useState('')
    const [Email, UpdatedEmail] = useState('')
    const [Password, UpdatedPassword] = useState('')
    const [ConfirmPassword, UpdatedConfirmPassword] = useState('')
    const dispatch = useDispatch()
    const navigate=useNavigate()
    
    const data = { name: UserName, email: Email, password: Password }
    const formHandler = async (e) => {
        e.preventDefault()
        if (Password !== ConfirmPassword) {
            toast.error('Password Did not Match ')
        }
        else {

            console.log(UserName, Email, Password)
            const response = await dispatch(SignupUser(data))
            console.log(response.payload.message)
            if (response && response.type.endsWith('/fulfilled')) {
                    toast.success(response.payload.message); // 
                    UpdatedName('')
                    UpdatedEmail('')
                    UpdatedPassword('')
                    UpdatedConfirmPassword('')
                    navigate('/api/Login')
                }
                else{
                    toast.error(response.payload)
                }
        }
    }
    return (
        <div id='body ' className='flex justify-center  flex-col md:flex-row w-full my-5'>
            <div className="Register px-8  min-w-fit md:max-w-lg w-full md:border-e h-fit   border-e-gray-400 relative mb-5">


                <h3 className='border-b-2 border-gray-200 text-3xl text-gray-700 pb-3 pt-2  after:border-b-amber-500 after:bg-amber-400 after:h-0.5 after:w-20 after:absolute after:inset-0 after:top-14 after:left-8  '>Register</h3>
                <form onSubmit={formHandler}>
                    <h2 className='mb-3 mt-2 text-gray-600'>Don't Have Account Yet..?,Make Now</h2>
                    <label htmlFor="Name" className='font-semibold'>UserName*</label>
                    <div className="inputs my-3">
                        <input className='rounded-3xl w-full border-gray-400 h-12' type="text" onChange={(e) => UpdatedName(e.target.value)} required />
                    </div>
                    <label htmlFor="email" className='font-semibold'>Email Address*</label>
                    <div className="inputs my-3">
                        <input className='rounded-3xl w-full border-gray-400 h-12' type="email" onChange={(e) => UpdatedEmail(e.target.value)} required />
                    </div>
                    <label htmlFor="Password" className='font-semibold'>Password*</label>
                    <div className="inputs my-3">
                        <input className='rounded-3xl w-full border-gray-400 h-12' type="password" onChange={(e) => UpdatedPassword(e.target.value)} required />
                    </div>
                    <label htmlFor="confirmPass" className='font-semibold'>Confirm Password*</label>
                    <div className="inputs my-3">
                        <input className='rounded-3xl w-full border-gray-400 h-12' type="password" onChange={(e) => UpdatedConfirmPassword(e.target.value)} required />

                    </div>
                    <div className="inputs my-3 flex items-center">
                        <input type="checkbox" name="agreement" id="" className='mx-1' required />
                        <label htmlFor="agreement">I Agree to the Terms and Conditions</label>
                    </div>
                    <div className="links flex justify-between text-gray-600 text-sm mb-3">
                    </div>
                    <button className='bg-amber-400  hover:bg-black w-44 h-12 rounded-3xl font-bold hover:text-amber-400 transition-all duration-300' type='submit'>
                        Register
                    </button>
                </form>
            </div>
            <div className="Register px-8  min-w-fit max-w-lg w-full border-e-gray-400 relative">


                <h3 className='border-b-2 border-gray-200 text-3xl text-gray-700 pb-3 pt-2  after:border-b-amber-500 after:bg-amber-400 after:h-0.5 after:w-20 after:absolute after:inset-0 after:top-14 after:left-8  '>Login</h3>
                <h2 className='mt-2 text-gray-600'>Welcome Back!</h2>
                <h1 className='my-3  text-gray-600 text-lg font-semibold'> Already Have an account? Just Login</h1>
                <ul  >
                    <li className='mb-2 text-gray-600 flex items-center'><CheckSquare className='size-5 text-green-600 mx-1' /> Buy Your Favourite Product</li>
                    <li className='mb-2 text-gray-600 flex items-center'><CheckSquare className='size-5 text-green-600 mx-1' /> Add to WHishlist Or Cart</li>
                    <li className='mb-2 text-gray-600 flex items-center'><CheckSquare className='size-5 text-green-600 mx-1' />Order your Product Now...!</li>
                </ul>
                <Link to={'/api/Login'}><button className='bg-amber-400  hover:bg-black w-44 h-12 my-3 rounded-3xl font-bold hover:text-amber-400 transition-all duration-300' type='submit'>
                    Login
                </button></Link>
            </div>
        </div>
    )
}

export default Register
