import React from 'react';
import Hero1 from './Hero1';
import Hero2 from './Hero2';

const Hero = () => {
    return (
        <div className='py-3'>
            <Hero1></Hero1>
            <Hero2></Hero2>
            <Hero1></Hero1>
        </div>
    );
};

export default Hero;