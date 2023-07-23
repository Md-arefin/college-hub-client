import React, { useEffect, useState } from 'react';
import { Controls, Player } from '@lottiefiles/react-lottie-player';

const CollegePage = () => {

    const [colleges, setColleges] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setColleges(data)
            })
    }, [])

    console.log(colleges)

    return (
        <div>
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

            <h3 className='text-center my-16 text-2xl md:text-3xl lg:text-5xl font-semibold'>
                Gateway to Knowledge: College Directory
            </h3>

            <div className='flex flex-col md:flex-row gap-5 w-[full] justify-center my-16 lg:px-16'>

                <div>
                    <Player
                        autoplay
                        loop
                        src="https://lottie.host/961db871-fa76-4922-b451-19d882fa7508/dUiYdFRHyH.json"
                        className='w-[100%]'
                    >
                        <Controls visible={!true} buttons={['play', 'repeat', 'frame', 'debug']} />
                    </Player>
                </div>

                {/* table */}

                <div className="overflow-x-auto w-full md:w-[50%] border-2 rounded-md">
                    <table className="table table-zebra">
                        <thead>
                            <tr>
                                <th></th>
                                <th className='font-semibold text-black text-lg text-center'>Name</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                colleges.map((clg, i) =>
                                    < tr key={i} >
                                        <th className='text-center'>{i + 1}</th>
                                        <td className='text-lg'>{clg.collegeName}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>

            </div>

            {/* clg card */}

            <h3 className='text-center my-16 text-2xl md:text-3xl lg:text-5xl font-semibold'>
            Featured Colleges and their Fascinating Offerings
            </h3>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16'>
                {
                    colleges.map((college) =>
                        <div key={college.id} className="card md:card-side bg-base-100 shadow-xl group">
                            <figure><img src={college?.collegeImage} className='h-full w-[550px] rounded-md group-hover:scale-125 transition' alt={college.collegeName} /></figure>
                            <div className="card-body">
                                <h2 className="card-title lg:text-3xl">{college.collegeName}</h2>
                                <p><span className='font-semibold text-lg'>Admission date:</span> {college.admissionDates}</p>
                                <p><span className='font-semibold text-lg'>Events: </span> {college.events.map((e ,i) =><li key={i}>{e}</li>)}</p>
                                <p><span className='font-semibold text-lg'>Research history: </span>{college.researchHistory}</p>
                                <p><span className='font-semibold text-lg'>Sports: </span>{college.sports}</p>
                                <div className="card-actions justify-center
                                 mt-2">
                                    <button className="btn bg-rose-800 text-white w-[50%] hover:text-black">Details</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div >
    );
};

export default CollegePage;