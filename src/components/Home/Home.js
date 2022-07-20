import React from 'react';
import Banner from './Banner/Banner';
import DemoCard from './DemoCard/DemoCard';
import Navbar from './Navbar/Navbar';
import ServiceCard from './ServiceCard/ServiceCard';
import TrustedBy from './TrustedBy/TrustedBy';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <TrustedBy></TrustedBy>
            <DemoCard></DemoCard>
            <ServiceCard></ServiceCard>
        </div>
    );
};

export default Home;