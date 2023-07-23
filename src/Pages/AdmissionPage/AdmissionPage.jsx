import React, { useEffect, useState } from 'react';

const AdmissionPage = () => {

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
            <div className="relative bg-[url('/images/bg-2.jpg')] bg-cover bg-no-repeat h-[60vh] lg:h-[80vh] w-full">

                <div className='h-[60vh] lg:h-[80vh] bg-black bg-opacity-80 '>

                    <h3 className='absolute top-[30%] left-0 md:top-[45%] md:left-[12%] lg:top-[35%] lg:left-[25%] text-center my-16 text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>
                        Admission Process for Promising Candidates
                    </h3>

                </div>

            </div>
            {/* college name */}

            <h3 className='text-center my-16 text-2xl md:text-3xl lg:text-5xl font-semibold'>
            Seamless Admission Process: Enter Your Details and Secure Your Future
            </h3>

            <div className='my-16 flex flex-col-reverse lg:flex-row gap-5 justify-center'>

                <div className="overflow-x-auto w-full border-2 rounded-md lg:w-[50%]">
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
                                        <td className='text-lg cursor-pointer'>{clg.collegeName}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

                <div className='lg:w-[50%]'>
                    <img className='w-full' src="/images/9.jpg" alt="" />
                </div>
            </div>


        </div>
    );
};

export default AdmissionPage;