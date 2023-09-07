import React from 'react';
import Marquee from "react-fast-marquee";
import img from '../../assets/college.png'

const Marquees = () => {
    return (
        <div className='my-24'>
            <Marquee className='text-5xl py-9' pauseOnHover={true} speed={80} loo={0}>
                <img src={img} className='w-12 mx-10' alt="" />
            Join us for world-class education and endless opportunities!  
            </Marquee>
        </div>
    );
};

export default Marquees;