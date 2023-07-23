import React from 'react';

const CollegePage = () => {
    return (
        <div className=''>
            <div className="relative bg-[url('/images/College-banner.jpg')] bg-cover bg-no-repeat h-[60vh] lg:h-[80vh] w-full ">

                <div className='h-[60vh] lg:h-[80vh] bg-black bg-opacity-70'>

                    <div className=' absolute top-[25%] md:top-[45%] left-[5%] 
                    md:left-[11%] lg:left-[20%] text-white px-2'>
                        <h3 className='text-lg md:text-3xl lg:text-6xl '>
                            Embark on a Journey of Academic Brilliance
                        </h3>

                        <p className='md:ml-10 lg:ml-10 lg:px-5 md:text-center my-5 md:max-w-[80%] lg:max-w-[75%]'>
                            Embark on a journey of academic brilliance as you explore the captivating realm of colleges. Immerse yourself in a myriad of enticing options, each adorned with college images, ratings, admission dates, and research accomplishments. 
                            <span className='hidden md:block'>
                            Unveil the secrets behind their events and sports facilities by delving into the enticing details, awaiting your eager curiosity. Welcome to a world of limitless possibilities and enriching experiences.
                            </span>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CollegePage;