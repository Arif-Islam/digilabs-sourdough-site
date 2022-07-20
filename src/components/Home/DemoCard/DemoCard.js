import React from 'react';
import Card from './Card';

const DemoCard = () => {
    return (
        <div className='py-10 w-11/12 2xl:w-full mx-auto'>
            <div className='flex flex-col lg:flex-row gap-6 lg:gap-0 items-center justify-between '>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
        </div>
    );
};

export default DemoCard;