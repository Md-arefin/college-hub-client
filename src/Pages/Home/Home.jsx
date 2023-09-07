import React from 'react';
import Banner from '../../Components/Banner/Banner';
import CollegeCard from '../../Components/CollegeCard/CollegeCard';
import CollegeGallery from '../../Components/CollegeGallery/collegeGallery';
import CompaniesLogos from '../../Components/companiesLogos/CompaniesLogos';
import Marquees from '../../Components/Marquee/Marquee';
import Research from '../../Components/Research/Research';
import Reviews from '../../Components/Reviews/Reviews';

const Home = () => {

    return (
        <div>
            <Banner/>
            <Marquees />
            <CollegeCard/>
            <CollegeGallery/>
            <CompaniesLogos />
            <Research />
            <Reviews/>
        </div>
    );
};

export default Home;