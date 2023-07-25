import React, { useEffect, useState } from 'react';
import { Controls, Player } from '@lottiefiles/react-lottie-player';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const CollegePage = () => {

    const [colleges, setColleges] = useState([]);
    const [clgName, setClgName] = useState([]);
    const [showDetails, setShowDetails] = useState(false);



    const handleDetailsClick = (collegeId) => {
        const id = collegeId;

        if (collegeId === id) {
            setShowDetails(!showDetails);
        }

    };

    useEffect(() => {
        fetch('http://localhost:5000/colleges')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setColleges(data)
            })
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/colleges-name')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setClgName(data)
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

            {/* table & Player */}

            <div className='flex flex-col md:flex-row gap-5 w-[full] justify-center my-16 lg:px-16'>

                <div className='md:mt-[100px] lg:mt-0 md:w-[50%] lg:w-[34%]'>
                    <Player
                        autoplay
                        loop
                        src="https://lottie.host/961db871-fa76-4922-b451-19d882fa7508/dUiYdFRHyH.json"
                        className='w-[100%] '
                    >
                        <Controls visible={!true} buttons={['play', 'repeat', 'frame', 'debug']} />
                    </Player>
                </div>

                {/* table */}

                <div className="overflow-x-auto w-full md:w-1/2 lg:w-[45%] border-2 rounded-md">
                    <table className="table table-zebra">
                        <thead>
                            <tr>
                                <th></th>
                                <th className='font-semibold text-black text-lg text-center'>Name</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                clgName.map((clg, i) =>
                                    < tr key={clg._id} >
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
                        <div key={college._id} className="card md:card-side bg-base-100 shadow-xl group">
                            <figure><img src={college?.collegeImage} className='h-full w-[520px] rounded-md group-hover:scale-125 transition' alt={college.collegeName} /></figure>
                            <div className="card-body">
                                <h2 className="card-title lg:text-3xl">{college.collegeName}</h2>
                                <div className='flex items-center justify-center gap-3 mr-[90px]'> <p className='font-semibold text-lg w-[50px]'>Ratings: </p><span >
                                    {college.ratings} </span> <Rating
                                        style={{ maxWidth: 120 }}
                                        value={college.ratings}
                                        readOnly
                                    />
                                </div>
                                <p><span className='font-semibold text-lg'>Admission date:</span> {college.admissionDates}</p>
                                <p><span className='font-semibold text-lg'>Total Research: </span>{college.totalResearch}</p>
                                {showDetails && (
                                    <>
                                        <p><span className='font-semibold text-lg'>Events: </span>{college.events.map((e, i) => <li key={e.i}>{e}</li>)}</p>

                                        <p><span className='font-semibold text-lg'>Sports: </span>{college.sports.map((e, i) => <li key={e.i}>{e}</li>)}</p>

                                    </>
                                )}
                                <div className="card-actions justify-center mt-2">
                                    <button onClick={() => handleDetailsClick(college._id)} className="btn bg-rose-800 text-white w-[50%] hover:text-black">{showDetails ? 'Hide Details' : 'Details'}</button>
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