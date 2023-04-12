import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { addToDB } from '../../uitilities/fakeDB';

const Job = () => {

    const details = useLoaderData();
   const {} = useParams();

   const {id,job_description , job_responsibility ,educational_requirements ,experiences,salary,job_title,contact_information,location ,company_logo}= details;



// const handleApplyClick = () => {
//     const jobDetails = 
//       {details}
//     ;
//     localStorage.setItem('jobDetails', JSON.stringify(jobDetails));
//   }; 

// const handleApplyClick = (details) => {
//     console.log('object added',details);
    
//   }; 

  
const handleApplyClick = (details) => {
  let jobDetails = JSON.parse(localStorage.getItem('jobDetails')) || [];
  const jobId = details.id;
  const jobExists = jobDetails.some((job) => job.id === jobId);

  if (!jobExists) {
    jobDetails.push(details);
    localStorage.setItem('jobDetails', JSON.stringify(jobDetails));
    console.log('New job added to localStorage:', details);
  } else {
    console.log('Job already exists in localStorage:', details);
  }
};
 
 
// const handleApplyClick =(details)=>{ addToDB(details)
// }


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
                      <p className='flex'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-6 mr-2 text-blue-200">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
Salary : {salary}</p>
                      <p className='flex my-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-10 h-6 mr-2 text-blue-200">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
</svg>
Job title : {job_title}</p>
                      <h1 className='my-3  text-white font-semibold text-2xl underline'>Contact Information</h1>
                      <p className='flex my-2'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-6 mr-2 text-blue-200">
  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
</svg>
Phone : {contact_information.phone}</p>
                      <p className='flex'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-6 mr-2 text-blue-200">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>
 Address : {location} </p>
                    
                      {/* <Link  className='btn btn-info bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-400 p-2 m-3' onClick={handleApplyClick
                      }> Apply Now</Link> */}

                      <Link to='/appliedJobs' className='btn btn-info bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-400 p-2 m-3' onClick={()=> handleApplyClick(details)}> Apply Now</Link>
               </div>
        </div>
       </div>
    );
};

export default Job; 