import React from 'react';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import DemoCard from './DemoCard/DemoCard';
import Hero from './Hero/Hero';
import Navbar from './Navbar/Navbar';
import Review from './Review/Review';
import Reviews from './Reviews/Reviews';
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
            <Review></Review>
            <Hero></Hero>
            <Reviews></Reviews>
            <Contact></Contact>
        </div>
    );
};

export default Home;