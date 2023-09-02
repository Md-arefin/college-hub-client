import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const AdmissionPage = () => {

    const { user } = useContext(AuthContext);
    const [colleges, setColleges] = useState([]);
    const [showDetails, setShowDetails] = useState(false);
    const [collegeDetails, setCollegeDetails] = useState({});


    useEffect(() => {
        fetch('http://localhost:5000/colleges-name')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setColleges(data)
            })
    }, []);


    const handleDetailsClick = (college) => {
        setCollegeDetails(college);
        setShowDetails(true);
    };

    const handleApplicationSubmit = (event) => {
        event.preventDefault();
        const clgDetail = collegeDetails;
        const form = event.target;
        const studentName = form.name.value;
        const DOB = form.DOB.value;
        const address = form.address.value;
        const subject = form.subject.value;
        const phone = form.phone.value;



        console.log(address, studentName, DOB, subject, phone);

    }



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
                                        <td onClick={() => handleDetailsClick(clg)} className='text-lg cursor-pointer'>{clg.collegeName}</td>
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

            <div className='mx-auto md:w-2/3'>

                {
                    showDetails && <>
                        <h3 className='text-center my-16 text-2xl md:text-3xl lg:text-5xl font-semibold'>
                            Admission Application
                        </h3>

                        <div className="hero-content">

                            <div className="card w-full shadow-2xl bg-rose-900">

                                <form onSubmit={handleApplicationSubmit} className="card-body">

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Name</span>
                                        </label>
                                        <input type="text"
                                            defaultValue={user ? user.displayName : ''}
                                            placeholder="Candidate Name" name='name' className="input input-bordered" required />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Subject</span>
                                        </label>
                                        <select name='subject' className="input input-bordered" required>
                                            <option value="">-- Select a Subject --</option>
                                            <option value="Mathematics">Mathematics</option>
                                            <option value="Accounting">Accounting</option>
                                            <option value="Economics">Economics</option>
                                            <option value="Information Technology">Information Technology</option>
                                            <option value="Science">Science</option>
                                            <option value="Science">History</option>
                                            <option value="Science">English</option>
                                            <option value="Computer Science">Computer Science</option>

                                        </select>

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Email</span>
                                        </label>
                                        <input type="text"
                                            defaultValue={user ? user.email : ''}
                                            placeholder="Candidate Email" name='email' className="input input-bordered" required />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Phone</span>
                                        </label>
                                        <input type="text" placeholder="Candidate Phone number" name='phone' className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Address</span>
                                        </label>
                                        <input type="text" placeholder="address" name='address' className="input input-bordered" required />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Date Of Birth</span>
                                        </label>
                                        <input type="date"
                                            name='DOB' className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">

                                        <label className="input cursor-pointer input-bordered mt-5 bg-red-400 w-2/3 mx-auto">
                                            <input type="file" placeholder="photo" name='photo' className=" hidden" />

                                            <div className="text-lg font-semibold mt-2  text-center">
                                                Upload your photo
                                            </div>
                                        </label>

                                    </div>

                                    <div className="form-control mt-6">
                                        <input type='submit' value='Submit' className="btn bg-black text-white hover:bg-white hover:text-black w-1/2 border-none mx-auto" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </>
                }

            </div>


        </div>
    );
};

export default AdmissionPage;