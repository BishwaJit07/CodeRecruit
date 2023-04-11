import React from 'react';
import { Link } from 'react-router-dom';
import Job from './Job';

const JobDetails = ({job}) => {
  const {id, company_logo , company_name, job_title,fulltime_or_parttime,remote_or_onsite,location,salary} = job;
  
  console.log(job);
    return (
        <div>
            <div className="card w-80 md:w-3/4 bg-slate-500	shadow-xl text-white">
  <figure><img src={company_logo} alt="CompanyLogo" className='w-96   p-2'/></figure>
  <div className="card-body">
    <h2 className="card-title">
      {job_title}
      <div className="badge badge-secondary">HOT</div>
    </h2>
   
   <p> {company_name}</p>
   <p className="card-actions justify-start">
      <div className="badge badge-outline text-amber-300">{fulltime_or_parttime}</div>
      <div className="badge badge-outline text-amber-300">{remote_or_onsite}</div>
      
    </p>
    <p>{location}</p> <p>Salary: {salary}</p>
   
   <Link to={`/job/${id}`}>
   <button className="btn btn-info bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-400 p-2 m-2">View Details</button>
   </Link>
  </div>
 
</div>

        </div>
    );
};

export default JobDetails;