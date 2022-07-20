import React from 'react';
import img from '../../../images/image 1.png'

const Card = () => {
    return (
        <div className='lg:w-[300px] xl:w-96 bg-white rounded-2xl shadow-lg p-4 hover:shadow-xl transform transition hover:-translate-y-2 duration-500 ease-in-out'>
            <div className='relative pb-3'>
                <img className='rounded-2xl w-full mx-auto' src={img} alt="" />
                <p className='uppercase text-[#171740] font-normal text-sm bg-[#FCAF3B] py-[7px] px-[16px] absolute top-[8px] left-[8px] rounded-lg'>New</p>
            </div>
            <div className='py-2 px-4'>
                <p className='text-[#171740] font-semibold text-2xl pb-2'>Lorem ipsum</p>
                <p className='text-[#242464] text-lg font-normal'>Nam in velit malesuada, porta erat a, vestibulum orci. In ac nibh malesuada, volutpat metus ac, laoreet erat.</p>
            </div>
            <div className='pt-3'>
                <button className='w-full bg-[#5555FF] text-white text-lg font-semibold rounded-lg py-4 hover:bg-[#0f0fd8] transition duration-400 ease-in-out'>Button</button>
            </div>
        </div>
    );
};

export default Card;