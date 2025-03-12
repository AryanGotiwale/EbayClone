import React from 'react'
import { useNavigate, NavLink, Link } from 'react-router-dom';
const AdminHeader = () => {
//   const navigate = 
  return (
    <div>
    <div>
    <h2 style={{color:'rebeccapurple', margin:'0px    '}}>Admin <Link to='/adminauth'><button className='logout-btn'>Logout</button></Link></h2>
      
    </div>  
      <div className="navbar">
        <ul>
      <li><NavLink to="/addProducts">Add Products</NavLink></li>
      <li><NavLink to="/productListAdmin">Product list</NavLink></li>
      <li><NavLink to="/changePassword">Change Password</NavLink></li>
      <li><NavLink to="#">Product list</NavLink></li>
</ul>
   </div>
</div>
  );
}

export default AdminHeader
