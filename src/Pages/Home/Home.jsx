import React from 'react';
import Banner from '../../Components/Banner/Banner';
import CollegeCard from '../../Components/CollegeCard/CollegeCard';
import CollegeGallery from '../../Components/CollegeGallery/collegeGallery';
import Reviews from '../../Components/Reviews/Reviews';

const Home = () => {

    return (
        <div>
            <Banner/>
            <CollegeCard/>
            <CollegeGallery/>
            <Reviews/>
        </div>
    );
};

export default Home;