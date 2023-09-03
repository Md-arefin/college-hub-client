import React from 'react';
import Banner from '../../Components/Banner/Banner';
import CollegeCard from '../../Components/CollegeCard/CollegeCard';
import CollegeGallery from '../../Components/CollegeGallery/collegeGallery';
import Research from '../../Components/Research/Research';
import Reviews from '../../Components/Reviews/Reviews';

const Home = () => {

    return (
        <div>
            <Banner/>
            <CollegeCard/>
            <CollegeGallery/>
            <Research />
            <Reviews/>
        </div>
    );
};

export default Home;