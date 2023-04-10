import React from 'react';

const JobDetails = ({job}) => {
    return (
        <div>
            <div className="card w-96 bg-slate-500	shadow-xl text-white">
  <figure><img src={job.company_logo} alt="CompanyLogo" className='w-96 p-2'/></figure>
  <div className="card-body">
    <h2 className="card-title">
      {job.job_title}
      <div className="badge badge-secondary">HOT</div>
    </h2>
   
   <p> {job.company_name}</p>
   <p className="card-actions justify-start">
      <div className="badge badge-outline text-amber-300">{job.remote_or_onsite}</div>
      
    </p>
    <p>{job.location}</p> <p>Salary: {job.salary}</p>
   
    <button className="btn btn-info bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-400 p-2 m-2">View Details</button>
  </div>
 
</div>

        </div>
    );
};

export default JobDetails;