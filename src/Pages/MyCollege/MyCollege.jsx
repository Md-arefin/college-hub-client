import { Rating } from '@smastrom/react-rating';
import React, { useContext, useEffect, useState } from 'react';
import Review from './Review';
import { AuthContext } from '../../Providers/AuthProvider';
import arrow from '../../assets/arrow-circle-2.png'

const MyCollege = () => {
    const { user } = useContext(AuthContext);
    const [myCollege, setMyCollege] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch(`https://college-booking-server-md-arefin.vercel.app/get-my-college/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                if (data.length == 0) {
                    setLoading(true);
                } else {
                    setMyCollege(data);
                    setLoading(false);
                }
            })
    }, []);



    return (
        <div>
            <div className="relative bg-[url('/images/12.jpg')] bg-cover bg-no-repeat h-[80vh]">
                <div className='h-[80vh] bg-black bg-opacity-80'>

                    <h2 className='absolute top-[30%] left-0 md:top-[45%] md:left-[12%] lg:top-[35%] lg:left-[25%] text-center my-16 text-2xl md:text-3xl lg:text-5xl font-semibold text-white'> Embrace Your Experience and Share Your Voice</h2>
                </div>

            </div>

            {
                loading ? <div className='my-16 flex flex-col md:flex-row items-center justify-center gap-5'>
                    <img src={arrow} className='animate-spin w-10 ' />
                    <p className='text-2xl'>Waiting for you to apply</p>
                </div> : <h3 className='text-center my-16 text-2xl md:text-3xl lg:text-5xl font-semibold'>
                    Applied College
                </h3>
            }






            {/* college details */}

            <div className='grid grid-cols-1 lg:grid-cols-2 w-full gap-5 lg:px-10'>
                {
                    myCollege ? myCollege.map(clg => <div
                        key={clg._id}
                        className="card w-full lg:max-w-1/2 bg-base-100 shadow-xl">
                        <figure><img src={clg.collegeImage} alt="" /></figure>
                        <div className="card-body w-full lg:max-w-1/2">
                            <h2 className="text-center font-bold text-xl lg:text-3xl">{clg.collegeName}</h2>

                            <div className='flex items-center gap-5'>
                                <span className='font-semibold text-lg'>Applicant Photo
                                    : </span>

                                <div className="avatar">
                                    <div className="w-32 rounded">
                                        <img src={clg.imgURL} />
                                    </div>
                                </div>
                            </div>
                            <p>
                                <span className='font-semibold text-lg'>Applicant Name
                                    : </span>
                                {clg.studentName}
                            </p>
                            <p>
                                <span className='font-semibold text-lg'>Email
                                    : </span>
                                {clg.email}
                            </p>
                            <p>
                                <span className='font-semibold text-lg'>Application Number
                                    : </span>
                                {clg._id}
                            </p>
                            <p>
                                <span className='font-semibold text-lg'>Subject
                                    : </span>
                                {clg.subject}
                            </p>
                            <p>
                                <span className='font-semibold text-lg'>Phone : </span>
                                {clg.phone}
                            </p>

                            <p>
                                <span className='font-semibold text-lg'>Date of Birth
                                    : </span>
                                {clg.DOB}
                            </p>
                            <p>
                                <span className='font-semibold text-lg'>Address : </span>
                                {clg.address}

                            </p>

                            <p>
                                <span className='font-semibold text-lg'>Application Procedure: </span>
                                {clg.admissionProcess.applicationProcedure}
                            </p>
                            <p>
                                <span className='font-semibold text-lg'>Eligibility Criteria
                                    : </span>
                                {clg.admissionProcess.eligibilityCriteria
                                }
                            </p>
                            <p>
                                <span className='font-semibold text-lg'>Admission Dates
                                    : </span>
                                {clg.admissionDates}
                            </p>
                            <p>
                                <span className='font-semibold text-lg'>Events
                                    : </span>
                                {clg.events.map((e, i) => <div
                                    className='pl-20'
                                    key={i}>
                                    <ul>
                                        <li className='py-1 text-md'>{e}</li>
                                    </ul>
                                </div>)
                                }
                            </p>
                            <p>
                                <span className='font-semibold text-lg'>
                                    Event Details : </span>
                                <br />

                                <div>
                                    <span className='pl-20'>Event Date:  {clg.eventsDetails.techFest.date}</span>
                                    <br />
                                    <span className='pl-20'>Event Description
                                        :  {clg.eventsDetails.techFest.description
                                        }</span>
                                </div>
                            </p>
                            <p>
                                <span className='font-semibold text-lg'> Research History : </span>
                                {clg.researchHistory}
                            </p>
                            <p>
                                <span className='font-semibold text-lg'>Research Works : </span>

                                <div>
                                    <span className='pl-10 font-semibold'>Previous Research : </span>
                                    <span> {clg.researchWorks.history}</span>
                                    <br />
                                    <span className='pl-10 font-semibold'>Current Projects :  </span>{clg.researchWorks.currentProjects.map((r, i) => <div
                                        className='pl-20'
                                        key={i}>
                                        <ul>
                                            <li>{r}</li>
                                        </ul>
                                    </div>)
                                    }
                                </div>
                            </p>
                            <p>
                                <span className='font-semibold text-lg'>Sports : </span>

                                <div className='flex flex-col md:flex-row gap-5'>

                                    <div>
                                        <span className='pl-10 font-semibold'>Indoor Sports :  </span>{clg.sportsCategories.indoorSports.map((r, i) => <div
                                            className='pl-20'
                                            key={i}>
                                            <ul>
                                                <li>{r}</li>
                                            </ul>
                                        </div>)
                                        }
                                    </div>
                                    <div>
                                        <span className='pl-10 font-semibold'>Outdoor Sports :  </span>{clg.sportsCategories.outdoorSports.map((r, i) => <div
                                            className='pl-20'
                                            key={i}>
                                            <ul>
                                                <li>{r}</li>
                                            </ul>
                                        </div>)
                                        }
                                    </div>
                                    <div>
                                        <span className='pl-10 font-semibold'>Water Sports :  </span>{clg.sportsCategories.waterSports.map((r, i) => <div
                                            className='pl-20'
                                            key={i}>
                                            <ul>
                                                <li>{r}</li>
                                            </ul>
                                        </div>)
                                        }
                                    </div>

                                </div>
                            </p>

                            <p>
                                <span className='font-semibold text-lg'>Total Research
                                    : </span>
                                {clg.totalResearch}
                            </p>

                            <div className='flex items-center gap-3 w-2/3 md:w-1/3 lg:w-4/12'>
                                <p className='font-semibold text-lg  '>Ratings: </p>
                                <span >
                                    {clg.ratings} </span>
                                <Rating
                                    style={{ maxWidth: 120 }}
                                    value={clg.ratings}
                                    readOnly
                                />
                            </div>

                        </div>
                    </div>) : ''
                }
            </div>
            {/* Review */}
            <Review />
        </div>
    );
};

export default MyCollege;