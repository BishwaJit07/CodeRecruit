import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBusinessTime, faHouseLaptop, faMoneyCheckDollar, faPersonWalkingArrowRight , } from '@fortawesome/free-solid-svg-icons'
import { Link, useLoaderData } from 'react-router-dom';
import JobDetails from './JobDetails';


const Home = () => {
  const data = useLoaderData(); 
  const [job,setJob]=useState({});
 

  const [fetuares, setFetuares] = useState([]);
  useEffect(() => {
    fetch('fetuares.json')
        .then(res => res.json())
        .then(data => setFetuares(data))
}, []);
  console.log(fetuares); 

  const [showAll,setShowAll] = useState(false);
  const handleShowAll = () => {
    setShowAll(true);
  };

  const [showButton, setShowButton] = useState(true);

  const handleButtonClick = () => {
    setShowButton(false);
    handleShowAll();
  };

    return ( 
    <div className=''>
 
 <div className='flex flex-col md:flex-row lg:flex-row justify-center items-center mx-4 lg:mx-16 md:mx-16 my-4'>

           <div >
            <h2 className='my-5 mx-3 text-5xl font-bold text-cyan-50'>Looking for a <span className=' text-red-500'>Programming Job?</span> Look No Further !</h2>
            <p className='mt-5 mx-6 text-slate-100	 text-2xl '>Welcome to our programming job website, the ultimate resource for job seekers in the tech industry. <br /> We are dedicated to helping talented programmers find the right job that suits their skills and experience.</p><br />
            <Link  to='/AppliedJobs' className="btn btn-info bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-400 mx-5">Apply Now</Link>
           </div>
           <img src="https://i.ibb.co/frhQwzc/pngwing-com-1.png" alt="Programmer" className='lg:w-3/5	 lg:h-2/5 md:w-3/5	 md:h-2/5  m-2 ' />
        </div>


{/* website fetuare  */}


          <div className='m-6'>
            <h2 className='text-center text-white font-bold text-4xl'>Why Choose Our Job Board?
                     </h2>
                     
                     
                   <p className='text-center my-4'>
                   Comprehensive Job Listings: We have a wide range of job listings from top employers in the tech industry, covering different programming languages and specializations.   
                   </p>

                   <div className=' flex justify-center items-center text-center  my-6 mx-6'>
                  


                

{fetuares.map(feature => (
      <div key={feature.name} className=' flex flex-col justify-center items-center text-center  my-6 mx-6'>
       <img src={feature.logo} alt="" className=' rounded-full w-20 '/>

       
        <h4 className=' font-semibold text-white'>{feature.name}</h4> 
        <p>{feature.jobs_available}</p>
      </div>
    ))}

                 

                
                  
                  
                   </div>
          </div>

{/* card part  */}
         <h2 className='text-center text-white font-bold text-4xl my-5'>Chek Out our Latest Job!
                     </h2>
                     <p className='text-center m-6'>
                     we also offer additional resources for job seekers, such as career advice, resume and cover letter templates, interview tips, and coding challenges to help them showcase their skills to potential employers.   
                   </p>
              <div className='flex justify-center items-center'>
                
              <div className='grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2  mx-5' > 
                {data.slice(0, showAll? 9:6).map((item) => (
        <JobDetails key={item.id} job={item} />
      ))}
    
                </div>
              </div>
             <div className='flex justify-center my-4' >  {showButton && (
        <div className='flex justify-center my-4'>
          <button className="btn btn-info bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-400 p-2 m-2" onClick={handleButtonClick}>
            See All Jobs
          </button>
        </div>
      )}
             
</div>
    </div>
       


        
    );
};

export default Home;