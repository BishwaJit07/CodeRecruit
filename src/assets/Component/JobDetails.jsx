import React from 'react';

const JobDetails = ({job}) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl ">
  <figure><img src={job.company_logo} alt="CompanyLogo" className='w-96'/></figure>
  <div className="card-body">
    <h2 className="card-title">
      {job.job_title}
      <div className="badge badge-secondary">HOT</div>
    </h2>
   
   <p> {job.company_name}</p>
   <div className="card-actions justify-start">
      <div className="badge badge-outline">{job.remote_or_onsite}</div>
      
    </div>
    <p>Salary:{job.location}</p> <p>{job.salary}</p>
   
    
  </div>
</div>
        </div>
    );
};

export default JobDetails;