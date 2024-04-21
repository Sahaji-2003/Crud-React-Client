import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';



function UsersTable() {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const rowsPerPage = 5;

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };
    const adminData = [
                { id: 1001, name: 'John Doe', role: 'Administrator', machinesAssigned: 5 },
                { id: 1002, name: 'Jane Smith', role: 'Operator', machinesAssigned: 3 },
                { id: 1003, name: 'Michael Johnson', role: 'Technician', machinesAssigned: 7 },
                { id: 1004, name: 'Sarah Williams', role: 'Administrator', machinesAssigned: 4 },
                { id: 1005, name: 'David Brown', role: 'Operator', machinesAssigned: 6 },
                { id: 1006, name: 'Emily Taylor', role: 'Technician', machinesAssigned: 9 },
                { id: 1007, name: 'James Wilson', role: 'Administrator', machinesAssigned: 3 },
                { id: 1008, name: 'Olivia Martinez', role: 'Operator', machinesAssigned: 5 },
                { id: 1009, name: 'William Anderson', role: 'Technician', machinesAssigned: 8 },
                { id: 1010, name: 'Emma Garcia', role: 'Administrator', machinesAssigned: 6 },
                { id: 1011, name: 'Daniel Johnson', role: 'Operator', machinesAssigned: 4 },
                { id: 1012, name: 'Sophia Brown', role: 'Technician', machinesAssigned: 7 },
                { id: 1013, name: 'Alexander Taylor', role: 'Administrator', machinesAssigned: 5 },
                { id: 1014, name: 'Isabella Wilson', role: 'Operator', machinesAssigned: 6 },
                { id: 1015, name: 'Ethan Martinez', role: 'Technician', machinesAssigned: 8 },
                { id: 1016, name: 'Sophie Johnson', role: 'Administrator', machinesAssigned: 4 },
                { id: 1017, name: 'Liam Smith', role: 'Operator', machinesAssigned: 5 },
                { id: 1018, name: 'Ava Brown', role: 'Technician', machinesAssigned: 7 },
                { id: 1019, name: 'Noah Wilson', role: 'Administrator', machinesAssigned: 6 },
                { id: 1020, name: 'Mia Garcia', role: 'Operator', machinesAssigned: 3 },
                { id: 1021, name: 'Jackson Taylor', role: 'Technician', machinesAssigned: 8 },
                { id: 1022, name: 'Sophia Martinez', role: 'Administrator', machinesAssigned: 5 },
                { id: 1023, name: 'Logan Anderson', role: 'Operator', machinesAssigned: 6 },
                { id: 1024, name: 'Olivia Brown', role: 'Technician', machinesAssigned: 9 },
                { id: 1025, name: 'Lucas Taylor', role: 'Administrator', machinesAssigned: 3 },
                { id: 1026, name: 'Emma Wilson', role: 'Operator', machinesAssigned: 5 },
                { id: 1027, name: 'Aiden Martinez', role: 'Technician', machinesAssigned: 7 },
                { id: 1028, name: 'Leah Johnson', role: 'Administrator', machinesAssigned: 4 },
                { id: 1029, name: 'Carter Smith', role: 'Operator', machinesAssigned: 6 },
                { id: 1030, name: 'Abigail Brown', role: 'Technician', machinesAssigned: 8 }
            ];

    const filteredAdmins = adminData.filter(admin =>
        admin.id.toString().includes(searchQuery) ||
        admin.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const visibleAdmins = filteredAdmins.slice(startIndex, endIndex);

    return (
        <>
        <br/>
        <br/>
        <br/>
    
            {/* Search Bar */}
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search by ID or Admin Name"
                    value={searchQuery}
                    onChange={handleSearch}
                />
                <Link to={`/create-new-user`}>
                                                <button className="btn btn-success">
                                                    Create User<i className="bi bi-plus" />
                                                </button>
                                            </Link>

            </div>
            {/* Admin Table */}
            <div className="col-12">
                <div className="card recent-sales overflow-auto">
                    <div className="filter">
                        <a className="icon" href="#" data-bs-toggle="dropdown">
                            <i className="bi bi-three-dots" />
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                            <li className="dropdown-header text-start">
                                <h6>Filter</h6>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Today
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    This Month
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    This Year
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">
                            Admin Details
                            <span> | Today</span>
                        </h5>
                        <table className="table table-borderless datatable">
                            <thead>
                                <tr>
                                    <th scope="col">Sr No.</th>
                                    <th scope="col">Admin ID</th>
                                    <th scope="col">Admin Name</th>
                                    <th scope="col">Admin Role</th>
                                    <th scope="col">Machines Assigned</th>
                                    <th scope="col">Assign Machine</th>
                                    <th scope="col">Edit Admin</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Displaying visible admin rows */}
                                {visibleAdmins.map((admin, index) => (
                                    <tr key={admin.id}>
                                        <td>{startIndex + index + 1}</td>
                                        <td>{admin.id}</td>
                                        <td>{admin.name}</td>
                                        <td>{admin.role}</td>
                                        <td>{admin.machinesAssigned}</td>
                                        <td>
                                        <Link to={`/AssignBatchMachines?name=${admin.name}&id=${admin.id}`}>
                                                <button className="btn btn-success">
                                                    Add <i className="bi bi-plus" />
                                                </button>
                                            </Link>
                                        </td>
                                        <td>
                                            <button className="btn btn-primary">Edit</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {/* Pagination Buttons and Page Number */}
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <button
                                    className="btn btn-outline-secondary me-2"
                                    onClick={handlePrevPage}
                                    disabled={currentPage === 1}
                                >
                                    Previous
                                </button>

                                <button
                                    className="btn btn-outline-secondary"
                                    onClick={handleNextPage}
                                    disabled={endIndex >= filteredAdmins.length}
                                >
                                    Next
                                </button>
                            </div>
                            <div>
                                Page {currentPage}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Admin Table */}
        </>
    );
}

export default UsersTable;

