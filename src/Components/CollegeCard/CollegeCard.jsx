import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CollegeCard = () => {
    const [colleges, setColleges] = useState([]);

    useEffect(() => {
        fetch('https://college-booking-server-md-arefin.vercel.app/college-card')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                // https://college-booking-server-md-arefin.vercel.app/
                setColleges(data)
            })
    }, [])

    // console.log(colleges)

    return (
        <div className='my-14'>
            <h3 className='text-center font-semibold text-xl md:text-3xl lg:text-5xl'>Discover Your Dream Colleges</h3>

            {/* card data */}

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16'>
                {
                    colleges.map((college) =>
                        <div key={college._id} className="card md:card-side bg-base-100 shadow-xl group">
                            <figure><img src={college?.collegeImage} className='h-full w-[550px] rounded-md group-hover:scale-125 transition' alt={college.collegeName} /></figure>
                            <div className="card-body">
                                <h2 className="card-title lg:text-3xl">{college.collegeName}</h2>
                                <p><span className='font-semibold text-lg'>Admission date:</span> {college.admissionDates}</p>
                                <p><span className='font-semibold text-lg'>Events: </span> {college.events.map((e, i) => <li key={i}>{e}</li>)}</p>
                                <p><span className='font-semibold text-lg'>Research history: </span>{college.researchHistory}</p>
                                <p><span className='font-semibold text-lg'>Sports: </span>{college.sports}</p>
                                <div className="card-actions justify-center
                                 mt-2">
                                    <Link className="btn bg-rose-800 text-white w-[50%] hover:text-black" to={`/colleges/${college._id}`}>
                                        <button >Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default CollegeCard;