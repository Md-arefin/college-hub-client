import React from 'react';
import Banner from '../../Components/Banner/Banner';
import CollegeCard from '../../Components/CollegeCard/CollegeCard';
import Reviews from '../../Components/Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner/>
            <CollegeCard/>
            <Reviews/>
        </div>
    );
};

export default Home;