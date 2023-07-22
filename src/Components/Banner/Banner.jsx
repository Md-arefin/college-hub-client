import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';

const Banner = () => {
    return (
        <div className="relative bg-[url('/images/banner.jpg')] bg-cover bg-no-repeat h-[60vh] mb-5 md:mb-10">
            <div className='bg-black opacity-70 h-[60vh]'>
                <input type="text" placeholder="Your college name..." className="absolute top-[50%] left-[12%] md:left-[35%] input input-bordered input-error md:w-[35%] " />
                <BiSearchAlt className='text-white mt-3 hover:scale-150 transition cursor-pointer text-3xl absolute top-[50%] left-[85%] md:left-[72%] lg:left-[72%]'/>
            </div>
        </div>
    );
};

export default Banner;