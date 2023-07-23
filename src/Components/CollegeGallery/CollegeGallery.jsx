import React from 'react';
import lightGallery from 'lightgallery';

// Plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'


const CollegeGallery = () => {

    // useEffect(() => {
    //     lightGallery(document.getElementById('image-gallery'), {
    //         selector: '.gallery-item',
    //         download: false,
    //     });
    // }, []);

    return (
        <div className='my-16'>
            <h3 className='text-center font-semibold text-xl md:text-3xl lg:text-5xl'>Journey Through Campus</h3>

            <div id="image-gallery" className=" grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-16">

                <a className="gallery-item" href=" ">
                    <img src="/images/1.jpg" className=' lg:h-[300px] w-[450px]' alt="Image 1" />
                </a>
                
                <a className="gallery-item" href=" ">
                    <img src="/images/5.jpg" alt="Image 2" className=' md:h-[208px] lg:h-[300px]' />
                </a>

                <a className="gallery-item" href=" ">
                    <img src="/images/2.jpg" alt="Image 1" className=' md:h-[208px] lg:h-[300px]' />
                </a>
                
                <a className="gallery-item" href=" ">
                    <img src="/images/3.jpg" alt="Image 2" className=' md:h-[208px] lg:h-[300px]' />
                </a>
                <a className="gallery-item" href=" ">
                    <img src="/images/4.jpg" className='md:h-[208px] lg:h-[300px] w-[450px]' alt="Image 1" />
                </a>
                
                <a className="gallery-item" href=" ">
                    <img src="/images/8.jpg" alt="Image 2" className=' md:h-[208px] lg:h-[300px]' />
                </a>
                <a className="gallery-item" href=" ">
                    <img src="/images/6.jpg" alt="Image 1" className=' md:h-[208px] lg:h-[300px]' />
                </a>
                
                <a className="gallery-item" href=" ">
                    <img src="/images/7.jpg" alt="Image 2" className=' md:h-[208px] lg:h-[300px]' />
                </a>
                
            </div>



        </div>
    );
};

export default CollegeGallery;