import React from 'react';
import { Controls, Player } from '@lottiefiles/react-lottie-player';

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
            {/* college name section */}

            <h3 className='text-center my-16 text-lg md:text-3xl lg:text-5xl font-semibold'>
            Gateway to Knowledge: College Directory
            </h3>

            <div className='flex flex-col md:flex-row gap-5 w-[full] border-4 my-16 px-16'>

                <div>
                    <Player
                        autoplay
                        loop
                        src="https://lottie.host/961db871-fa76-4922-b451-19d882fa7508/dUiYdFRHyH.json"
                        className='w-[75%]'
                    >
                        <Controls visible={!true} buttons={['play', 'repeat', 'frame', 'debug']} />
                    </Player>
                </div>
            </div>
        </div>
    );
};

export default CollegePage;