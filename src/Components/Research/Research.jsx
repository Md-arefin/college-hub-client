import React, { useEffect, useState } from 'react';
import { BiRightArrow } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Research = () => {

    const [research, setResearch] = useState([]);

    useEffect(() => {
        fetch('https://college-booking-server-md-arefin.vercel.app/research')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setResearch(data)
            })
    }, []);
    return (
        <div>
            <h1 className='text-center font-semibold my-16 text-5xl'>Explore Research Papers</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full px-5'>
                {
                    research.map(paper => <div key={paper._id} className="card w-full bg-base-100 shadow-xl">
                        <figure><img src={paper.img} className='h-96 w-full' alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{paper.title}</h2>
                            <p>{paper.abstract}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/get-research/${paper._id}`}>
                                    <button className="btn bg-rose-800 hover:text-black text-white">read more <BiRightArrow /></button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Research;