import React from 'react';

const TrustedBy = () => {
    return (
        <div className='py-16 w-11/12 2xl:w-full mx-auto'>
            <p className='text-[#171740] text-center lg:text-left font-semibold text-3xl pb-10 lg:pb-8'>Trusted By</p>
            <div className='flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between'>
                <div className="relative w-[199px] h-12 bg-monzo bg-cover bg-center">
                    <p className='absolute w-[199px] h-[48px] bg-[#5555FF] mix-blend-lighten'></p>
                </div>
                <div className="relative w-[188px] h-12 bg-zoopla bg-cover bg-center">
                    <p className='absolute w-[199px] h-[48px] bg-[#5555FF] mix-blend-lighten'></p>
                </div>
                <div className="relative w-[138px] h-12 bg-google bg-cover bg-center">
                    <p className='absolute w-[199px] h-[48px] bg-[#5555FF] mix-blend-lighten'></p>
                </div>
                <div className="relative w-[85px] h-12 bg-nike bg-cover bg-center">
                    <p className='absolute w-[199px] h-[48px] bg-[#5555FF] mix-blend-lighten'></p>
                </div>
                <div className="relative w-[142px] h-12 bg-amazon bg-cover bg-center">
                    <p className='absolute w-[199px] h-[48px] bg-[#5555FF] mix-blend-lighten'></p>
                </div>
            </div>
        </div>
    );
};

export default TrustedBy;