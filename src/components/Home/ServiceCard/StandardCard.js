import React from 'react';
import pound from '../../../images/£9.png';
import check from '../../../images/Check white.png';

const StandardCard = () => {
    return (
        <div className='bg-[#5555FF] w-full lg:w-[300px] xl:w-96 rounded-2xl shadow-lg text-[#171740] px-8 py-6 hover:shadow-xl transform transition hover:-translate-y-2 duration-500 ease-in-out'>
            <div className='uppercase text-[#171740] font-normal text-sm bg-[#FCAF3B] inline-block py-[7px] px-[16px] mb-4 rounded-lg'>
                <p className=''>Most Popular</p>
            </div>
            <p className=''></p>
            <p className='font-semibold text-[32px] pb-4 text-white'>Standard</p>
            <div className='flex space-x-2 pb-7 text-white'>
                <div>
                    <img src={pound} alt="" />
                </div>
                <div className='text-[32px] '>
                    / month
                </div>
            </div>
            <div className='pb-2 text-white'>
                <div className='flex space-x-2 pb-2'>
                    <img src={check} alt="" />
                    <p>Lorem ipsum dolor</p>
                </div>
                <div className='flex space-x-2 pb-2'>
                    <img src={check} alt="" />
                    <p>Lorem ipsum dolor</p>
                </div>
                <div className='flex space-x-2 pb-2'>
                    <img src={check} alt="" />
                    <p>Lorem ipsum dolor</p>
                </div>
            </div>
            <button className='w-full bg-white text-[#171740] text-lg font-semibold py-4 rounded-lg hover:bg-gray-200'>Sign Up</button>
        </div>
    );
};

export default StandardCard;