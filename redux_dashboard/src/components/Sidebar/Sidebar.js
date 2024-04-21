import React from 'react'
import { Link } from 'react-router-dom'
import {BrowserRouter as Router, Routes, Route,  useParams} from 'react-router-dom';
import AllUsers from '../Users/AllUsers';
import BatchForm from '../BatchForm/BatchForm';
import AdminProfile from '../AdminProfile/AdminProfile';
// import BatchForm from './BatchForm/BatchForm';
// import AllUsers from './Users/AllUsers';
// import AdminProfile from './AdminProfile/AdminProfile.js'

function Sidebar() {
  return (
    <>
  <aside id="sidebar" className="sidebar">
    <ul className="sidebar-nav" id="sidebar-nav">
      <li className="nav-item">
      
        <a className="nav-link " >
        <Link to = {"/"}>
          <i className="bi bi-grid" />
          <span>Dashboard</span>
          </Link>
        </a>
        
      </li>
    
      <li className="nav-item">
        <a
          className="nav-link collapsed"
         
         
        ><Link to ="/AllUsers" >
          <i className="bi bi-layout-text-window-reverse" />
          <span>Users</span>
          {/* <i className="bi bi-chevron-down ms-auto" /> */}
          </Link>
        </a>
      </li>
      
      <li className="nav-item">
        <a
          className="nav-link collapsed"
         
         
        >
          <Link to ="/create-new-user" >
          <i className="bi bi-layout-text-window-reverse" />
          
            <span>Creat User</span>
          {/* <i className="bi bi-chevron-down ms-auto" /> */}
          </Link>
        </a>
      </li>
     
   
  
      
      <li className="nav-heading">Pages</li>
      <li className="nav-item">
        <a className="nav-link collapsed">
          <i className="bi bi-person" />
          
         <Link to ="/AdminProfile" > <span>Profile</span></Link> 
        </a>
      </li>
    
      
    

      
      <li className="nav-item">
        <a className="nav-link collapsed" href="pages-login.html">
          <i className="bi bi-box-arrow-in-right" />
          <span>Logout</span>
        </a>
      </li>
     
    </ul>
  </aside>

</>

  )
}

export default Sidebar