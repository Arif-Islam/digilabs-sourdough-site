import React from 'react';
import user from '../../../images/Ellipse 2.png';

const Review = () => {
    return (
        <div className='w-3/4 mx-auto py-10 '>
            <div className='flex flex-col items-center '>
                <p className='text-[#171740] text-[40px] lg:text-[53px] font-semibold text-center pb-8'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit.”</p>
                <img className='pb-2' src={user} alt="" />
                <p className='text-[#242464] text-lg font-semibold pb-1'>Jennifer Rowlands</p>
                <p className='text-[#242464] text-lg  pb-2'>Chief Design Office, uxtoast</p>
            </div>
        </div>
    );
};

export default Review;