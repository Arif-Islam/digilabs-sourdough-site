import React from 'react';
import EnterpriseCard from './EnterpriseCard';
import FreeCard from './FreeCard';
import StandardCard from './StandardCard';

const ServiceCard = () => {
    return (
        <div className='py-14 w-11/12 2xl:w-full mx-auto'>
            <div className='flex flex-col lg:flex-row gap-6 lg:gap-0 items-center justify-between'>
                <FreeCard></FreeCard>
                <StandardCard></StandardCard>
                <EnterpriseCard></EnterpriseCard>
            </div>
        </div>
    );
};

export default ServiceCard;