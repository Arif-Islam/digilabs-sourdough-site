import React from 'react';
import DemoReview from './DemoReview';

const Reviews = () => {
    return (
        <div className='py-10 lg:py-16 flex flex-col lg:flex-row gap-6 lg:gap-0 justify-center items-center lg:justify-between lg:w-11/12 xl:w-full mx-auto'>
            {
                Array(4).fill(<DemoReview></DemoReview>)
            }
        </div>
    );
};

export default Reviews;