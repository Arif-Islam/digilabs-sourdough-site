import React from 'react';
import img from '../../../images/image 1.png'

const Banner = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-6 mt-8 lg:mt-16 w-11/12 md:w-4/5 lg:w-11/12 2xl:w-full mx-auto'>
            <div className='space-y-6 lg:space-y-8 lg:w-1/2'>
                <p className='font-semibold text-[#171740] text-[40px] lg:text-6xl '>Lorem ipsum dolor sit amet.</p>
                <p className='text-[#242464] font-normal text-2xl'>Praesent placerat ipsum nec mi maximus, vel cursus mauris cursus. Vivamus cursus ante eget orci egestas malesuada.</p>
                <div className='flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4'>
                    <button className='w-full lg:w-48 h-14 bg-[#5555FF] text-white text-lg rounded-lg font-semibold hover:bg-[#0f0fd8] transition duration-400 ease-in-out'>Primary action</button>
                    <button className='w-full lg:w-48 h-14 bg-[#FAFAFF] text-[#171740] text-lg rounded-lg font-semibold hover:bg-gray-100 transition duration-400 ease-in-out'>Secondary action</button>
                </div>
            </div>
            <div className='lg:w-1/2 flex justify-center lg:justify-end'>
                <img className='transform transition duration-500 ease-in-out hover:translate-x-2 hover:cursor-text' src={img} alt="" />
            </div>
        </div>
    );
};

export default Banner;