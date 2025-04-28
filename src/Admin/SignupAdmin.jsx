import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SignupUser } from '../Redux_toolkit/Features/auth';
import toast from 'react-hot-toast';

const SignupAdmin = () => {
    const [UserName, UpdatedName] = useState('')
    const [Email, UpdatedEmail] = useState('')
    const [Password, UpdatedPassword] = useState('')
    const [selectedOption, setSelectedOption] = useState('');

    const handleRadioChange = (event) => {
      setSelectedOption(event.target.value);
    };
    const dispatch = useDispatch()

    const data = { name: UserName, email: Email, password: Password,role:selectedOption }
    const formHandler = async (e) => {
        e.preventDefault()
        console.log(data)
        const response = await dispatch(SignupUser(data))
        console.log(response)
        if (response && response.type.endsWith('/fulfilled')) {
            toast.success(response.payload.message); // 
            UpdatedName('')
            UpdatedEmail('')
            UpdatedPassword('')
        }
        else {
            toast.error(response.payload)
        }
    }
    return (
        <div className="bg-[#e8e8e8] w-full h-screen flex justify-center items-center">


            <div className="flex flex-col justify-center w-full h-full md:max-w-[450px] md:max-h-[450px] md:rounded-[40px] bg-gradient-to-t  from-white to-[#f4f7fb] p-[25px_35px] border-[1px] border-white shadow-[rgba(133,189,215,0.88)_0px_30px_30px_-20px] bg-[#f0f0f0]   ">
                <div className="text-center font-black text-[30px] text-amber-400">Sign In</div>

                <form className="mt-1" onSubmit={formHandler}>
                    <input
                        required
                        type="text"
                        name="text"
                        id="text"
                        placeholder="Name"
                        autoComplete='user-name'
                        onChange={(e) => { UpdatedName(e.target.value) }}
                        className="w-full bg-white border-none py-[15px] px-[20px] rounded-[20px] mt-[15px] shadow-[0_10px_10px_-5px_#cff0ff] placeholder:text-[rgb(170,170,170)] focus:outline-none focus:border-x-[2px] focus:border-[#12B1D1]"
                    />
                    <input
                        required
                        type="email"
                        name="email"
                        id="email"
                        placeholder="E-mail"
                        onChange={(e) => { UpdatedEmail(e.target.value) }}
                        className="w-full bg-white border-none py-[15px] px-[20px] rounded-[20px] mt-[15px] shadow-[0_10px_10px_-5px_#cff0ff] placeholder:text-[rgb(170,170,170)] focus:outline-none focus:border-x-[2px] focus:border-[#12B1D1]"
                    />

                    <input
                        required
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        autoComplete='current-password'
                        onChange={(e) => { UpdatedPassword(e.target.value) }}
                        className="w-full bg-white border-none py-[15px] px-[20px] rounded-[20px] mt-[15px] shadow-[0_10px_10px_-5px_#cff0ff] placeholder:text-[rgb(170,170,170)] focus:outline-none focus:border-x-[2px] focus:border-[#12B1D1]"
                    />
                    <div className="radio mt-5 flex items-center">

                        <input 
                        type="radio"
                        name="role" 
                        className='mx-1' 
                        value={'admin'}
                        onChange={handleRadioChange} 
                        checked={selectedOption==='admin'}
                         /><label htmlFor="role">Admin</label>

                        <input 
                        type="radio" 
                        name="role" 
                        // defaultChecked 
                        value={'editor'}
                        className='mr-1 ml-3' 
                        onChange={handleRadioChange} 
                        checked={selectedOption==='editor'
                        } /><label htmlFor="role">Editor</label>
                    </div>
                    <button
                        value="submit"
                        className="w-full font-bold bg-gradient-to-r from-[rgb(16,137,211)] to-[rgb(18,177,209)] text-white py-[15px] mt-[20px] rounded-[20px] shadow-[rgba(133,189,215,0.88)_0px_20px_10px_-15px] border-none transition-all duration-200 ease-in-out hover:scale-[1.03] hover:shadow-[rgba(133,189,215,0.88)_0px_23px_10px_-20px] active:scale-95 active:shadow-[rgba(133,189,215,0.88)_0px_15px_10px_-10px] bg-amber-400"
                    >Submit</button>
                </form>

            </div>
        </div>
    );
};

export default SignupAdmin;
