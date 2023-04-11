import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
    return (
        
      <div >
        <nav className="navbar bg-white   ">
  <div className="navbar-start  ">
  <div className="dropdown lg:hidden">
      <label tabIndex={0} className="btn btn-ghost lg:none">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li>
            <Link to='/' className={location.pathname === '/' ? 'mx-2 text-red-500' : 'mx-2'}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/statistics" className={location.pathname === '/statistics' ? 'mx-2 text-red-500' : 'mx-2'}>
              Statistics
            </Link>
          </li>
          <li tabIndex={0}>
            <Link to='/AppliedJobs' className={location.pathname === '/AppliedJobs' ? 'mx-2 text-red-500' : 'mx-2'}>
              Apply For Jobs
            </Link>
          </li>
          <li>
            <Link to='/Blog' className={location.pathname === '/Blog' ? 'mx-2 text-red-500' : 'mx-2'}>
              Blog
            </Link>
          </li>
      </ul>
    </div>

    <Link to='/' className=" font-bold text-2xl text-accent	">Code<span className=' text-orange-300'>R</span>ecruit</Link>

    
  </div>
 

  
    <div className="navbar-end font-bold">
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-3">
          <li>
            <Link to='/' className={location.pathname === '/' ? 'mx-2 text-red-500' : 'mx-2'}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/statistics" className={location.pathname === '/statistics' ? 'mx-2 text-red-500' : 'mx-2'}>
              Statistics
            </Link>
          </li>
          <li tabIndex={0}>
            <Link to='/AppliedJobs' className={location.pathname === '/AppliedJobs' ? 'mx-2 text-red-500' : 'mx-2'}>
              Apply For Jobs
            </Link>
          </li>
          <li>
            <Link to='/Blog' className={location.pathname === '/Blog' ? 'mx-2 text-red-500' : 'mx-2'}>
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </div>
  
  <div className="navbar-end mr-5">
    <Link  to='/AppliedJobs' className="btn bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-400 text-cyan-100">Apply Now</Link>
  </div>
</nav>
      </div>    

    );
};

export default Header;