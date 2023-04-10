// import React, { useEffect, useState } from 'react';
// import Home from './Home';

// const LoadJson = () => {
//     const [data, setData] = useState([]);
  
//     useEffect(() => {
//       fetch('database.json')
//         .then(res => res.json())
//         .then(data => setData(data));
//     }, []);
  
//     return (
//       <div>
//         {data.map((item) => <Home key={item.id} data={item} />)}
//       </div>
//     );
//   };
  
//   export default LoadJson;