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
                    return  <div key={index} className='flex justify-around items-center'>
                    <img src={job.company_logo} alt=""  className="h-40 w-60 object-cover object-center" />
                     <div className='mx-2 text-white'><p>{job.company_name}</p> 
                    <p>{job.remote_or_onsite}</p> 
                    <p>{job.fulltime_or_parttime}</p> 
                    <p>{job.location}</p> 
                    <p>{job.salary}</p> </div>
                    
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
