import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './assets/Component/Home';
import MainLayout from './assets/Component/Layout/MainLayout';
import Statistics from './assets/Component/Statistics';
import Blog from './assets/Component/Blog';
import AppliedJobs from './assets/Component/AppliedJobs';
import JobDetails from './assets/Component/JobDetails';
import Job from './assets/Component/Job';

import ErrorPage from './assets/Component/ErrorPage';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement: <ErrorPage />,

    children:[
      {path:"/",
         element:<Home/>,
         loader:()=>fetch('/database.json')
         
         },
      {
        path: "/AppliedJobs",
    element: <AppliedJobs/>,
    
      },
      {
        path: "/statistics",
    element: <Statistics/>,
      },
      {
        path: "/Blog",
    element: <Blog/>,
      },
      {
        path: "/job/:id",
        element:<Job/>,
        loader:async ({params})=>{
          const res = await fetch ("/database.json");
          const data = await res.json();
         const singleData = data.find(job=> job.id==params.id);
         if(!singleData){
          return{}
         }
         else{
          return singleData;
         }
        }
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(

      <RouterProvider router={router} />
 
)
