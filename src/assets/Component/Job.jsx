import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Job = () => {

    const details = useLoaderData();
   const {id} = useParams();

   const {job_description , job_responsibility ,educational_requirements ,experiences,salary,job_title,contact_information,location }=details

console.log(id);

    return (
       <div>
         <div className='text-center mt-10 text-white text-2xl font-semibold h-20 bg-gradient-to-r from-sky-500 to-indigo-500 p-4'>
          <p >  Job Details</p>
        </div>

        <div className='flex items-center justify-center h-screen'>
               <div className='px-4'>
               <h1 className='mt-5' ><span className=' text-slate-50 font-bold  my-6 '>Job description:</span> {job_description}</h1>

               <h1 className='mt-5' ><span className=' text-slate-50 font-bold  my-6 '>Job Responsibility :</span> {job_responsibility}</h1>

               <h1 className='mt-5' ><span className=' text-slate-50 font-bold  my-6 '>Educational Requirements : </span> {educational_requirements} </h1>

               <h1 className='mt-5' ><span >Experiences :</span> {experiences}</h1>

               </div>

               <div className='bg-sky-900 p-5 rounded-xl'>
                      <h1 className='my-3 text-white font-semibold text-2xl'>Job Details</h1><hr className='my-3'/>
                      <p>Salary : {salary}</p>
                      <p>Job title : {job_title}</p>
                      <h1 className='my-3  text-white font-semibold text-2xl'>Contact Information</h1> <hr className='my-3' />
                      <p>Phone : {contact_information.phone}</p>
                      <p>Address : {location} </p>
                      <button className='btn btn-info bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-400 p-2 m-2'>Apply Now</button>
               </div>
        </div>
       </div>
    );
};

export default Job;