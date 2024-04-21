import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import ShowAdminProfile from './ShowAdminProfile';

function AdminProfile() {
  return (
    <div>
    <Header/>
    <Sidebar/>
    <main id="main" className="main">
    <div className="pagetitle">
      <h1>Profile</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to = "/">Home</Link>
          </li>
          <li className="breadcrumb-item">User</li>
          <li className="breadcrumb-item active">Profile</li>
        </ol>
      </nav>
    </div>
    {/* End Page Title */}
    <ShowAdminProfile/>
  </main>
  </div>
 
  )
}

export default AdminProfile