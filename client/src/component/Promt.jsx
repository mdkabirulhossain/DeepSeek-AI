import React from 'react';
import { TbWorld } from "react-icons/tb";
import { FaArrowUp, FaReact } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import logo from '../assets/deepseek icon.png'


const Promt = () => {
    return (
        <div>
            {/* start  */}
            <div>
                <div>
                    <img src={logo} alt="deepseek img" />
                    <h1>Hi, I'm DeepSeek</h1>
                </div>
                <p>How can I help you today?</p>
            </div>

            {/* Promt  */}
            <div>
                <div>

                </div>
            </div>

            {/* input box  */}
            <div>
                <div>
                    <input type="text" placeholder='Message DeepSeek' />
                    <div>
                        <div className='flex gap-5'>
                            <button className='flex gap-1 items-center'><FaReact className='text-white'/> DeepThink (R1)</button>
                            <button className='flex gap-1 items-center'><TbWorld className='text-white'/> Search</button>
                        </div>
                        <div>
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