import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ResearchDetails = () => {
    const ResearchDetail = useLoaderData();

    const { abstract, conclusion, discussion, img, introduction, methodology, references, results, title } = ResearchDetail;

    console.log(ResearchDetail);
    return (
        <div>
            <div>
                <img src={img} className='rounded-lg mb-16 w-full h-[100vh]' alt="" />
            </div>
            <h1 className='text-center font-bold text-xl md:text-3xl lg:text-5xl mb-16'>{title}</h1>
            <article className='space-y-5 px-2 md:px-4 lg:px-48'>
                <p>
                    <span className='text-lg font-bold'>Abstract:</span>
                    <br />
                    {abstract}
                </p>
                <p>
                    <span className='text-lg font-bold'>Introduction:</span>
                    <br />
                    {introduction}
                </p>
                <p>
                    <span className='text-lg font-bold'>Methodology:</span>
                    <br />
                    <div className='pl-10 space-y-3'>
                        <div>
                            <span className='text-lg font-bold'>Participants:</span>
                            <br />
                            {methodology.participants}
                        </div>
                        <div>
                            <span className='text-lg font-bold'>Experimental Design
                                :</span>
                            <br />
                            {methodology.experimentalDesign
                            }
                        </div>
                        <div>
                            <span className='text-lg font-bold'>DataCollection:</span>
                            <br />
                            {methodology.dataCollection}
                        </div>
                    </div>
                </p>
                <p>
                    <span className='text-lg font-bold'>Results:</span>
                    <br />
                    <div className='pl-10 space-y-3'>
                        <div>
                            <span className='text-lg font-bold'>Academic Performance:</span>
                            <br />
                            {results.results1}
                        </div>
                        <div>
                            <span className='text-lg font-bold'>Engagement:</span>
                            <br />
                            {results.results2}
                        </div>
                        <div>
                            <span className='text-lg font-bold'>Learning Outcomes:</span>
                            <br />
                            {results.results3}
                        </div>
                    </div>
                </p>
                <p>
                    <span className='text-lg font-bold'>Discussion:</span>
                    <br />
                    {discussion}
                </p>
                <p>
                    <span className='text-lg font-bold'>Conclusion:</span>
                    <br />
                    {conclusion}
                </p>
                <p>
                    <span className='text-lg font-bold'>References:</span>
                    <br />
                    {references?.map((ref, i) =><ul key={i}>
                        <li className='flex gap-2'><p>{i+1}. </p>{ref}</li>
                    </ul>)}
                </p>
            </article>
        </div>
    );
};

export default ResearchDetails;