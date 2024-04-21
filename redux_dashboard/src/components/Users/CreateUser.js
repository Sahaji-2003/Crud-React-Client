import React, { Component } from 'react'
import axios from 'axios';
import { withRouter } from '../Crud/withRouter'
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';


export class CreateUser extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();

        this.state = {
            user_id: '',
            first_name: '',
            last_name: '',
            email_user: '',
            phone_no: '',
            user_role: ''
        };
    }

    componentDidMount() {
        this.inputRef.current.focus();
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitHandler = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/customers', this.state);
            console.log(res);
            this.props.navigate('/');
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div>
                <Header />
                <Sidebar />

                <br />
                <br />

                    <section className="section mt-4"> {/* Added mt-4 for margin-top */}
                        <h5 className="card-title text-center">Create New User</h5>
                        <div className="container mt-4">
                            <div className="row justify-content-center">
                                <div className="col-lg-6">
                                    <div className="card">
                                        <div className="card-body">
                                            {/* Multi Columns Form */}
                                            <form className="row g-3" onSubmit={this.submitHandler}>

                                                <div className="col-md-6">
                                                    <label>User ID</label>
                                                    <input type="text" name="user_id" onChange={this.changeHandler} value={this.state.user_id} ref={this.inputRef} className="form-control"  style={{ borderRadius: '5px', border: '1px solid #ced4da', padding: '8px' }} />

                                                </div>
                                                <div className="col-md-6">

                                                    <label>First Name</label>

                                                    <input type="text" name="first_name" onChange={this.changeHandler} value={this.state.first_name} ref={this.inputRef} className="form-control" p style={{ borderRadius: '5px', border: '1px solid #ced4da', padding: '8px' }} />

                                                </div>
                                                <div className="col-md-6">

                                                    <label>Last Name</label>

                                                    <input type="text" name="last_name" onChange={this.changeHandler} value={this.state.last_name} ref={this.inputRef} className="form-control"  style={{ borderRadius: '5px', border: '1px solid #ced4da', padding: '8px' }} />

                                                </div>
                                                <div className="col-md-12">
                                                    <label>Email Address</label>

                                                    <input type="text"
                                                        name="email_user"
                                                        value={this.state.email_user}
                                                        onChange={this.changeHandler}
                                                        ref={this.inputRef}
                                                        
                                                        className="form-control"
                                                        style={{ borderRadius: '5px', border: '1px solid #ced4da', padding: '8px' }} />
                                                </div>

                                                <div className="col-md-12">
                                                    <label>Phone Number</label>

                                                    <input
                                                        type="number"
                                                        name="phone_no"
                                                        onChange={this.changeHandler}
                                                        value={this.state.phone_no}
                                                        ref={this.inputRef}

                                                        className="form-control"
                                                        style={{ borderRadius: '5px', border: '1px solid #ced4da', padding: '8px' }} />
                                                </div>
                                                <div className="col-md-12">
                                                    <label>User Role</label>

                                                    <input
                                                       type="text"
                                                       name="user_role"
                                                       onChange={this.changeHandler}
                                                       value={this.state.user_role}
                                                       ref={this.inputRef}

                                                        className="form-control"
                                                        style={{ borderRadius: '5px', border: '1px solid #ced4da', padding: '8px' }} />
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
        )
    }
}

export default withRouter(CreateUser);