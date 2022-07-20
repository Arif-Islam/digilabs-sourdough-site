import React from 'react';
// import { FaPoundSign } from 'react-icons/fa';
import pound from '../../../images/£16.png';
import check from '../../../images/Check.png';

const EnterpriseCard = () => {
    return (
        <div className='bg-white lg:w-[300px] xl:w-96 rounded-2xl shadow-lg text-[#171740] px-8 py-6 hover:shadow-xl transform transition hover:-translate-y-2 duration-500 ease-in-out'>
            <p className=' font-semibold text-[32px] pb-4'>Enterprise</p>
            <div className='flex space-x-2 pb-7'>
                <div className='pr-1'>
                    <img src={pound} alt="" />
                </div>
                <div className='text-[32px] '>
                    / month
                </div>
            </div>
            <div className='pb-2'>
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
            <button className='w-full bg-[#FAFAFF] text-[#171740] text-lg font-semibold py-4 hover:bg-gray-100'>Sign Up</button>
        </div>
    );
};

export default EnterpriseCard;