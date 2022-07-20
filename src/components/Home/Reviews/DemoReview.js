import React from 'react';
import img from '../../../images/light bulb.png';

const DemoReview = () => {
    return (
        <div className='w-[250px] lg:w-[230px] xl:w-[250px] text-center'>
            <div className='flex flex-col justify-center items-center'>
                <img className='pb-6' src={img} alt="" />
                <p className='text-[#171740] text-2xl font-semibold pb-2'>Lorem ipsum</p>
                <p className='text-[#242464] text-lg px-2 pb-2'>Nam in velit malesuada, porta erat a, vestibulum orci. In ac nibh malesuada, volutpat metus ac, laoreet erat.</p>
            </div>
        </div>
    );
};

export default DemoReview;