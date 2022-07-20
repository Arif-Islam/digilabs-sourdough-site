import React from 'react';
import Banner from './Banner/Banner';
import Navbar from './Navbar/Navbar';
import TrustedBy from './TrustedBy/TrustedBy';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <TrustedBy></TrustedBy>
        </div>
    );
};

export default Home;