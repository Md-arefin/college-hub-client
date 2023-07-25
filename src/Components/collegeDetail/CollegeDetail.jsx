import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CollegeDetail = () => {
    const clg = useLoaderData();

    console.log(clg)

    return (
        <div>
            <div>
                <img src={clg.collegeImage} className='h-[75vh] w-full' alt="" />
            </div>

            <h3 className='text-center my-16 text-2xl md:text-3xl lg:text-5xl font-semibold'>
                {clg.collegeName}
            </h3>



            <div className='flex justify-start items-center gap-5'>
                <p className='font-semibold text-lg'>Admission date: </p>{clg.admissionDates}
            </div>

            <div className='flex justify-start items-center gap-5'>
                <p className='font-semibold text-lg'>Admission Procedure: </p>{clg.admissionProcess.applicationProcedure}
            </div>
            <div className='flex justify-start items-center gap-5'>
                <p className='font-semibold text-lg'>Admission Eligibility Criteria: </p>{clg.admissionProcess.eligibilityCriteria}
            </div>
            <div className='flex justify-start items-center gap-5'>
                <p className='font-semibold text-lg'>Events: </p>{clg.events.map((e, i) => <li key={i}>{e}</li>)}
            </div>
            <div className='flex justify-start items-center gap-5'>
                <p className='font-semibold text-lg'>Events Date: </p>{clg.eventsDetails.techFest.date}
            </div>
            <div className='flex justify-start items-center gap-5'>
                <p className='font-semibold text-lg'>Events description
                    : </p>{clg.eventsDetails.techFest.description}
            </div>
            <div className='flex justify-start items-center gap-5'>
                <p className='font-semibold text-lg'>Research Projects
                    : </p>{clg.researchWorks.currentProjects.map((e, i) => <li key={i}>{e}</li>)}
            </div>
            <div className='flex justify-start items-center gap-5'>
                <p className='font-semibold text-lg'>Research History
                    : </p>{clg.researchHistory}
            </div>
            <div className='flex justify-start items-center gap-5'>
                <p className='font-semibold text-lg'>Total Research : </p>{clg.totalResearch}
            </div>
            <div className='flex justify-start items-center gap-5'>
                <p className='font-semibold text-lg'>Sports Categories: </p>
                {/* {clg.sportsCategories.indoorSports.map((e, i) => <li key={i}>{e}</li>)} */}
                {clg.sportsCategories.outdoorSports.map((e, i) => <li key={i}>{e}</li>)}
                {/* {clg.sportsCategories.waterSports.map((e, i) => <li key={i}>{e}</li>)} */}
            </div>
            <div className='flex justify-start items-center gap-5'>
                <p className='font-semibold text-lg'>Total Research
                    : </p> {clg.ratings}  <Rating
                    style={{ maxWidth: 120 }}
                    value={clg.ratings}
                    readOnly
                />
            </div>
        </div>
    );
};

export default CollegeDetail;