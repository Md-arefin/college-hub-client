import React, { useEffect, useState } from 'react';

const AdmissionPage = () => {

    const [colleges, setColleges] = useState([]);
    const [showDetails, setShowDetails] = useState(false);



    const handleDetailsClick = (collegeId) => {
        const id = collegeId;

        setShowDetails(true);


    };

    useEffect(() => {
        fetch('http://localhost:5000/colleges-name')
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
                                        <td onClick={() => handleDetailsClick(clg._id)} className='text-lg cursor-pointer'>{clg.collegeName}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

                <div className='lg:w-[50%] relative'>
                    <img className='w-full' src="/images/9.jpg" alt="" />
                    <div className='absolute -top-[40px] lg:top-[82%] lg:w-[50%] w-[70%] left-14 h-[100px] md:h-[180px] md:left-[130px] lg:left-[250px] bg-black text-white lg:h-[200px] p-10 flex items-center justify-center'>
                        <h4 className='lg:text-center my-16 text-sm md:text-xl lg:text-3xl font-semibold'> Step into Your Future with Confidence</h4>
                    </div>
                </div>
            </div>

            {/* form */}

            <div className='mx-auto md:w-1/2'>


                {showDetails && <>
                    <h3 className='text-center my-16 text-2xl md:text-3xl lg:text-5xl font-semibold'>
                        Admission Application
                    </h3>

                    <div className="hero-content">

                        <div className="card w-full shadow-2xl bg-rose-900">
                            <form className="card-body">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Name</span>
                                    </label>
                                    <input type="text" placeholder="Candidate Name" name='name' className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Subject</span>
                                    </label>
                                    <input type="text" placeholder="Subject" name='subject' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Email</span>
                                    </label>
                                    <input type="text" placeholder="Candidate Email" name='email' className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Phone</span>
                                    </label>
                                    <input type="text" placeholder="Candidate Phone number" name='phone' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Address</span>
                                    </label>
                                    <input type="text" placeholder="address" name='address' className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Date Of Birth</span>
                                    </label>
                                    <input type="text" placeholder="date of birth" name='DOB' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Photo</span>
                                    </label>
                                    <input type="file" placeholder="photo" name='photo' className=" input input-bordered" />
                                </div>

                                <div className="form-control mt-6">
                                    <input type='submit' value='Submit' className="btn bg-black text-white hover:bg-white hover:text-black w-1/2 border-none mx-auto" />
                                </div>
                            </form>
                        </div>
                    </div>
                </>}


            </div>


        </div>
    );
};

export default AdmissionPage;