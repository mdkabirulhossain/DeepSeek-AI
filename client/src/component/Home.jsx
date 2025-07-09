import React from 'react';
import Sidebar from './Sidebar';
import Promt from './promt';

const Home = () => {
    return (
        <div className='flex h-screen bg-[#1e1e1e] text-white'>
            {/* sidebar  */}
            <div className='w-64 bg-[#232327]'>
                <Sidebar></Sidebar>
            </div>

            {/* promt  */}
            <div className='flex-1 flex flex-col w-full'>
                 {/* <div className='flex-1 flex items-center justify-center px-6'>
                    <Promt />

                 </div> */}
                 <Promt />
            </div>
        </div>
    );
};

export default Home;