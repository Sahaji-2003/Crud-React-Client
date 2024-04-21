import React from 'react'
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import UsersTable from './UsersTable';
import CrudUserTable from './CrudUserTable';
import { Link } from 'react-router-dom';

function AllUsers() {
  return (
    <main className='main'>
    
    <section className="section dashboard">
           
            <div className="container-fluid">
              <Header/>
                <div className="row mt-3">
                    <div className="col-md-3">
                        <Sidebar/>
                    </div>
                    <div className="col-md-9">
                        {/* <UsersTable/> */}
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <Link to={`/create-new-user`}>
                                                <button className="btn btn-success">
                                                    Create User<i className="bi bi-plus" />
                                                </button>
                                            </Link>
                                            <br/>
                                            <br/>
                                            <br/>
                        <CrudUserTable/>
                    </div>
                </div>
            </div>
        </section>
        </main>
  )
}

export default AllUsers;