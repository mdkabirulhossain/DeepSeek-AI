import React from 'react';
import { RxCross2 } from "react-icons/rx";
import { MdLogout } from "react-icons/md";


const Sidebar = () => {
    return (
        <div className='flex flex-col h-screen bg-[#232327]'>
            {/* Header  */}
            <div className='flex items-center justify-between border-b border-gray-700 p-4'>
                <h1 className='text-xl font-bold text-white'>deepseek</h1>
                <button className='cursor-pointer'><RxCross2 className='text-gray-300 h-6 w-6'/></button>
            </div>
            {/* History  */}
            <div className='flex-1 overflow-y-auto p-4 space-y-2'>
                <button className='w-full bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-xl mb-4 text-white text-lg cursor-pointer'>+ New Chat</button>
                <div className='text-sm text-gray-500 mt-5 text-center'>No chat history yet</div>
            </div>

            {/* Footer  */}
            <div className='p-4 border-t border-gray-700'>
                <div className='flex flex-col gap-3'>
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <img className='rounded-full w-8 h-8' src="" alt="" />
                        <span className='text-gray-300'>My Profile</span>
                    </div>
                    <button className='flex items-center gap-2 text-white px-2 py-2 rounded-lg hover:bg-gray-700 transition'><MdLogout className='h-6 w-6' /> Logout</button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;