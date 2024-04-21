import React from 'react'
import UserTable from './UserTable/UserTable'
import DataCards from './DataCards'
import CrudUserTable from '../Users/CrudUserTable'

function Admin_Dash() {
  return (
    <>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Admin Dashboard</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </nav>
        </div>

        <section className="section dashboard">
          <div className="row">
          
            <DataCards />
            
            {/* <UserTable /> */}
            <CrudUserTable/>

          </div>


        </section>
      </main>

    </>

  )
}

export default Admin_Dash