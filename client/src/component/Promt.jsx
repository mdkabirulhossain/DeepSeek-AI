import React from 'react';
import { TbWorld } from "react-icons/tb";
import { FaArrowUp, FaReact } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import logo from '../assets/deepseek icon.png'


const Promt = () => {
    return (
        <div className='flex flex-col items-center justify-center flex-1 w-full px-4 pb-4'>
            {/* start  */}
            <div className='mt-16 text-center'>
                <div className='flex items-center justify-center gap-2'>
                    <img src={logo} className='w-8 h-8' alt="deepseek img" />
                    <h1 className='font-bold text-2xl'>Hi, I'm DeepSeek</h1>
                </div>
                <p className='text-gray-400 text-base mt-2'>How can I help you today?</p>
            </div>

            {/* Promt  */}
            <div className='w-full max-w-4xl flex-1 overflow-y-auto mt-6 mb-4 space-y-4 max-h-[60vh] px-1'>
                
            </div>

            {/* input box  */}
            <div className='w-full max-w-4xl relative mt-2'>
                <div className='bg-[#2f2f2f] rounded-[2rem] px-6 py-8 shadow-md'>
                    <input type="text" className='w-full outline-none' placeholder='Message DeepSeek' />
                    <div className='flex items-center justify-between '>
                        <div className='flex gap-5 mt-3'>
                            <button className='flex gap-1 items-center'><FaReact className='text-white'/> DeepThink (R1)</button>
                            <button className='flex gap-1 items-center'><TbWorld className='text-white'/> Search</button>
                        </div>
                        <div className='flex gap-4'>
                            <button > <FaLink className='text-whit'/></button>
                            <button className='rounded-full'><FaArrowUp /> </button>
                        </div>
                    </div>
                </div>
            </div>
            

        </div>
    );
};

export default Promt;