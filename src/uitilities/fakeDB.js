// use locar storage manage data 


const addToDB = (details) => {
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

export {addToDB}