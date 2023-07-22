import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';


const Reviews = () => {
    return (
        <div className='my-16'>
            <h3 className='text-center font-semibold text-xl md:text-3xl lg:text-5xl'>Our Review</h3>

            <div className='my-16'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide className='text-center'>Slide 1</SwiperSlide>
                    <SwiperSlide className='text-center'>Slide 2</SwiperSlide>
                    <SwiperSlide className='text-center'>Slide 3</SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Reviews;