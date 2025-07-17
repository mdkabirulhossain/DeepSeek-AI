import React, { useState } from 'react';
import { data, Link, useNavigate } from 'react-router-dom';
import { FaRegEye } from "react-icons/fa";
import axios from 'axios'

const Signup = () => {

    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:""
    })

    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

     const handleChange = (e) =>{
        const value = e.target.value
        const name = e.target.name

        setFormData({
            ...formData,
            [name]:value
        })
    }

    const handleSignup =async () =>{
        setLoading(true)
        setError("")
        try{
            const data = await axios.post("http://localhost:3000/api/v1/user/signup", {
                firstName:formData.firstName,
                lastName:formData.lastName,
                email:formData.email,
                password: formData.email
            },{
                withCredentials:true
            })  
            alert(data.message || "Signup Succeded")
            navigate("/login")
        }catch(error){
            const msg = error?.response?.data?.errors || "Signup Failed"
            setError(msg)
        }
        finally{
            setLoading(false)
        }
    }

   

    return (
        <div className='min-h-screen flex items-center justify-center bg-black px-4'>
            <div className='bg-[#1e1e1e] text-white w-full max-w-md rounded-2xl p-6 shadow-lg'>
                <h1 className='text-center'>SignUp</h1>
                <div className='mb-4 mt-2'>
                    <input className='w-full bg-transparent border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#7a6ff0]' type="text" placeholder='firstname' name="firstName" value={formData.firstName} onChange={handleChange}  />
                </div>
                <div className='mb-4 mt-2'>
                    <input className='w-full bg-transparent border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#7a6ff0]' type="text" placeholder='lastname' name="lastName" value={formData.lastName} onChange={handleChange} />
                </div>
                <div className='mb-4 mt-2'>
                    <input className='w-full bg-transparent border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#7a6ff0]' type="email" placeholder='email' name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div className='mb-4 mt-2 relative'>
                    <input className='w-full bg-transparent border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#7a6ff0]' type="password" placeholder='password' name="password" value={formData.password} onChange={handleChange} />

                     <FaRegEye  className='absolute right-3 top-3'/>
                </div>
                {/* Error message  */}
                {
                    error && <p className='text-red-600 text-sm mb-4 '>{error}</p>
                }
                <p className='text-xs text-gray-500 mt-4 mb-6'>By signing up or logging in, you consent to DeepSeek 
                 <span className='underline mx-1'>Terms of Use</span> <span className='underline'>Privacy Policy</span>
                </p>
                <button className='w-full bg-[#7a6ff6] hover:bg-[#6c61a6] text-white font-semibold py-3 rounded-lg transitions disabled:opacity-50' onClick={handleSignup} disabled={loading}>SignUp</button>
                <div className='flex justify-between mt-4 text-sm'>
                    <p className='text-[#7a6ff6]'>Already Registered?</p>
                    <Link className='text-[#7a6ff6] hover:underline' to={'/login'}>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;