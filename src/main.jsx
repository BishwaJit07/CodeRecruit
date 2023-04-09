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


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
      {path:"/",
         element:<Home/>},
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
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
