import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

function BatchForm() {
  const location = useLocation();
  const [adminName, setAdminName] = useState('');
  const [adminId, setAdminId] = useState('');

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setAdminName(searchParams.get('name') || '');
    setAdminId(searchParams.get('id') || '');
  }, [location]);
  return (
    <div>
        <Header/>
        <Sidebar/>
       <br/>
       <br/>
     
     
<section className="section mt-4"> {/* Added mt-4 for margin-top */}
    <h5 className="card-title text-center">Assign Machines</h5>
    <div className="container mt-4">
        <div className="row justify-content-center">
            <div className="col-lg-6">
                <div className="card">
                    <div className="card-body">
                        {/* Multi Columns Form */}
                        <form className="row g-3">
                          
                            <div className="col-md-6">
                            <label>User Name</label>
                                <input type="text" className="form-control" value={adminName} readOnly id="inputName5" placeholder='User Name' style={{ borderRadius: '5px', border: '1px solid #ced4da', padding: '8px' }} />
                            </div>
                            <div className="col-md-6">
                            <label>User Id</label>
                                <input type="number" className="form-control" value={adminId} readOnly  id="inputName6" placeholder='User ID' style={{ borderRadius: '5px', border: '1px solid #ced4da', padding: '8px' }} />
                            </div>
                            <div className="col-md-12">
                                <input type="number" className="form-control" id="inputEmail5" placeholder='Machine Count' style={{ borderRadius: '5px', border: '1px solid #ced4da', padding: '8px' }} />
                            </div>
                            <div className="col-md-12">
                                <select id="inputMachineType" className="form-select" style={{ borderRadius: '5px', border: '1px solid #ced4da', padding: '8px' }}>
                                    <option selected disabled>Choose Machine Type</option>
                                    <option>Fuel Machines</option>
                                    <option>Vending Machines</option>
                                </select>
                            </div>
                            <div className="col-12 text-center">
                                <button type="submit" className="btn btn-primary" style={{ borderRadius: '5px', padding: '8px 16px' }}>
                                    Submit
                                </button>
                            </div>
                        </form>
                        {/* End Multi Columns Form */}
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

    </div>
  );
}

export default BatchForm;


