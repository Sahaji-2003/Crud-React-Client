// import logo from './logo.svg';
// // import './App.css';
// import React from 'react'

// import About from './components/About';
// import Header from './components/Header/Header.js';
// import Sidebar from './components/Sidebar/Sidebar.js';
// import Admin_Dash from './components/Admin_Dash/Admin_Dash.js'

// import {BrowserRouter as Router, Routes, Route, Link, useParams} from 'react-router-dom'
// import Customerlist from './components/Customerlist';
// import PostForm from './components/PostForm.js';
// import EditUser from './components/EditUser';

// import BatchForm from './components/BatchForm/BatchForm';
// import AllUsers from './components/Users/AllUsers';
// import AdminProfile from './components/AdminProfile/AdminProfile.js'

// function App() {
//   const Wrapper = (props) => {
//     const params = useParams();
//     return <EditUser {...{...props, match: {params}} } />
//   }
//   return (


//     <div className="App"> 

//         <Header/>
//         <Sidebar/>
//         <Admin_Dash/>
    
//     <Router>
//       <div className='App'>
//         {/* <nav>
//           <ul>
//             <Link to="/">Home</Link> &nbsp;&nbsp;
//             <Link to="/customers">All Customers</Link> &nbsp;&nbsp;
//             <Link to="/add-customer">Add Customer</Link> &nbsp;&nbsp;           
//             <Link to="/about">About Us</Link> &nbsp;&nbsp;            
//           </ul>
//         </nav> */}
       
//         <Routes>
//           <Route exact path="/" element={<About />}></Route>
//           <Route exact path="/customers" element={<Customerlist />}></Route>
//           <Route exact path="/add-customer" element={<PostForm />}></Route>
//           <Route exact path="/edit-customer/:id" element={<Wrapper />}></Route>
//           <Route exact path="/AllUsers" element={<AllUsers />}></Route>    
//           <Route exact path="/AssignBatchMachines" element={<BatchForm />}></Route>   
//           <Route exact path="/AdminProfile" element={<AdminProfile />}></Route>     
        
     
//         </Routes>
//       </div>

//     </Router>
      
//     </div>
//   );
// }

// export default App;





import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Admin_Dash from './components/Admin_Dash/Admin_Dash';
import BatchForm from './components/BatchForm/BatchForm';
import AllUsers from './components/Users/AllUsers';
import Customerlist from './components/Crud/Customerlist';



function App() {
  return (
    <div >
    <Header/>
    <Sidebar/>
    <Admin_Dash/>
    {/* <Customerlist/> */}
    </div>
  );
}

export default App;
