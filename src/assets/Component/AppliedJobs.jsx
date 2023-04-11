import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([]);

    useEffect(() => {
        const storedJobDetails = localStorage.getItem('jobDetails');
        if (storedJobDetails) {
            const jobDetails = JSON.parse(storedJobDetails);
            setAppliedJobs(appliedJobs => [...appliedJobs, jobDetails]);
        }
    }, []);

    return (
        <div>
            <h2>Applied Jobs:</h2>
            <div>
                {appliedJobs.map((job, index) => (
                    <div key={index} className='flex justify-center items-center'>
                       <img src={job.details.company_logo} alt=""  className="h-40 w-60 object-cover object-center" />
                        <div className='mx-2 text-white'><p>{job.details.company_name}</p> 
                       <p>{job.details.remote_or_onsite}</p> 
                       <p>{job.details.fulltime_or_parttime}</p> 
                       <p>{job.details.location}</p> 
                       <p>{job.details.salary}</p> </div>
                       
                       <div>
                       <Link to={`/job/${job.details.id}`}>
   <button className="btn btn-info bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-400 p-2 m-2">View Details</button>
   </Link>
                       </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AppliedJobs;
