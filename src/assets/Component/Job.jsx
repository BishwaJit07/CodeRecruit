import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const Job = () => {

    const details = useLoaderData();
   const {id} = useParams();

   const {job_description , job_responsibility ,educational_requirements ,experiences,salary,job_title,contact_information,location ,company_logo}=details

console.log(id);

const handleApplyClick = () => {
    const jobDetails = 
      {details}
    ;
    localStorage.setItem('jobDetails', JSON.stringify(jobDetails));
  }; 
 



    return (
       <div>
         <div className='text-center mt-10 text-white text-2xl font-semibold h-20 bg-gradient-to-r from-sky-500 to-indigo-500 p-4'>
          <p >  Job Details</p>
        </div>
        <div className='flex items-center justify-center my-2'>
            <img src={company_logo} alt="" className='rounded-full'/>
        </div>

        <div className='flex flex-col md:flex-row lg:flex-row items-center justify-center m-3  md:m-3 lg:m-0'>
               <div className='px-4 '>
               <h1 className='mt-5' ><span className=' text-slate-50 font-bold  my-6 '>Job description:</span> {job_description}</h1>

               <h1 className='mt-5' ><span className=' text-slate-50 font-bold  my-6 '>Job Responsibility :</span> {job_responsibility}</h1>

               <h1 className='mt-5' ><span className=' text-slate-50 font-bold  my-6 '>Educational Requirements : </span> {educational_requirements} </h1>

               <h1 className='mt-5' ><span className=' text-slate-50 font-bold  my-6 '>Experience : </span> {experiences} </h1>

               

               </div>

               <div className='bg-sky-900 my-3 rounded-xl flex flex-col justify-center items-center p-10'>
                      <h1 className='my-3 text-white font-semibold text-2xl underline'>Job Details</h1>
                      <p>Salary : {salary}</p>
                      <p>Job title : {job_title}</p>
                      <h1 className='my-3  text-white font-semibold text-2xl underline'>Contact Information</h1>
                      <p>Phone : {contact_information.phone}</p>
                      <p>Address : {location} </p>
                      <Link  to='/AppliedJobs' className='btn btn-info bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-400 p-2 m-2' onClick={handleApplyClick}>Apply Now</Link>
               </div>
        </div>
       </div>
    );
};

export default Job;