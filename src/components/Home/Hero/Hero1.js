import React from 'react';
import img from '../../../images/image 1.png'

const Hero1 = () => {
    return (
        <div className='flex items-center flex-col lg:flex-row gap-6 py-6 lg:py-12 w-11/12 md:w-4/5 lg:w-11/12 2xl:w-full mx-auto'>
            <div className='space-y-6 lg:space-y-8 lg:w-1/2'>
                <p className='font-semibold text-[#171740] text-[32px] lg:text-[40px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className='text-[#242464] font-normal text-lg lg:text-2xl'>Praesent placerat ipsum nec mi maximus, vel cursus mauris cursus. Vivamus cursus ante eget orci egestas malesuada.</p>
            </div>
            <div className='lg:w-1/2 flex justify-center lg:justify-end'>
                <img className='transform transition duration-500 ease-in-out hover:translate-x-2 hover:cursor-text' src={img} alt="" />
            </div>
        </div>
    );
};

export default Hero1;