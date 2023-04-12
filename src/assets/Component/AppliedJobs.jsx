import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import JobDetails from './JobDetails';

const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([]);

    useEffect(() => {
        const storedJobDetails = localStorage.getItem('jobDetails');
        if (storedJobDetails) {
            const jobDetails = JSON.parse(storedJobDetails);

            console.log(jobDetails);
            setAppliedJobs(appliedJobs => [...appliedJobs, ...jobDetails]);
        }
    }, []);
console.log(appliedJobs);



    return (
        <div>
            <h2 className='text-center m-10 text-white text-2xl font-semibold h-20 bg-gradient-to-r from-sky-500 to-indigo-500 p-4'>Applied Jobs: </h2>
            <div>
                {appliedJobs.map((job, index) => {
 console.log(job);
                    return  <div key={index} className='flex flex-col md:flex-row lg-flex-col justify-evenly  items-center text-center mx-4 md:mx-20 lg:mx-40 my-5   outline-1	 '>
                    <img src={job.company_logo} alt=""  className="h-40 w-60 object-cover object-center p-2" />
                     <div className='mx-2 text-white'>
                        <p className='font-bold text-xl'>{job.company_name}</p> 
                    <div className='flex '><p className='m-2 badge badge-outline text-amber-300'>{job.remote_or_onsite}</p> 
                    <p className='m-2 badge badge-outline text-amber-300'>{job.fulltime_or_parttime}</p> </div>
                    <p className='flex py-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-6 mr-2 text-blue-200">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>{job.location}</p> 
                    <p className='flex'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-6 mr-2 text-blue-200">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>{job.salary}</p> </div>
                    
                    <div>
                    <Link to={`/job/${job.id}`}>
<button className="btn btn-info bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-400 p-2 m-2">View Details</button>
</Link>
                    </div>
                 </div>
                }
                    
                )}
            </div>
            
        </div>
    );
};

export default AppliedJobs;
