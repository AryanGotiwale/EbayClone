// // import React, { useState } from 'react'
// // import '../App.css'
// // import { CiSearch } from "react-icons/ci";
// // import { Link, NavLink } from 'react-router-dom';


// // const Header = () => {

// // const [isLogged, setIsLogged] =useState(false)



// //   return (
// //      <div>
          
// //         <div className='head'>
// //           <NavLink to="/">
// //           <h1>Bexi </h1>
// //           </NavLink>
// //           <input type="text" placeholder='Search' />
// //           <button className='search-btn'><CiSearch /></button>
// //           {/* <input
// //             type="text"
// //             placeholder="Enter text"
// //             className="pl-10 pr-10 border border-gray-300 rounded-lg p-2 focus:outline-none"
// //           />
// //           <FaTimes className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" /> */}
     
// //           <button className='sell-btn'>
// //          Sell
// //           </button>
         
// //           <button className='login-btn' >
// //            Login
             
// //           </button>
          
          
          
// //         </div>
       
// //         <div className='navbar'>
// //         <ul>
     
// //       <li><NavLink to="/">Home</NavLink></li>
// //       <li><Link to="/Laptop">Laptops</Link></li>
// //       <li><Link href="#">Cars</Link></li>
// //       <li><Link href="#">Sports</Link></li>
// //       <li><Link href="#">BIkes</Link></li>
// //       <li><Link href="#">Scooters</Link></li>
// //       <li><Link href="#">Art and Collections</Link></li>
// //       <li><Link href="#">Deals</Link></li>
// //      </ul>
    
// //         </div>
// //         </div>
// //   )
// // }

// // export default Header


// import React, { useState } from 'react';
// import '../App.css';
// import { CiSearch } from "react-icons/ci";
// import { Link, NavLink, useNavigate } from 'react-router-dom';

// const Header = () => {
//   const [isLogged, setIsLogged] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         localStorage.setItem("token", data.token); // Store token in localStorage
//         setIsLogged(true);
//         alert("Login successful");
//         navigate("/"); // Redirect to homepage
//       } else {
//         alert(data.message || "Login failed");
//       }
//     } catch (error) {
//       console.error("Error during login:", error);
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setIsLogged(false);
//   };

//   return (
//     <div>
//       <div className='head'>
//         <NavLink to="/">
//           <h1>Bexi</h1>
//         </NavLink>
//         <input type="text" placeholder='Search' />
//         <button className='search-btn'><CiSearch /></button>
//         <button className='sell-btn'>Sell</button>

//         {isLogged ? (
//           <button className='logout-btn' onClick={handleLogout}>Logout</button>
//         ) : (
//           <button className='login-btn' onClick={() => navigate('/login')}>Login</button>
//         )}
//       </div>

//       <div className='navbar'>
//         <ul>
//           <li><NavLink to="/">Home</NavLink></li>
//           <li><Link to="/Laptop">Laptops</Link></li>
//           <li><Link to="#">Cars</Link></li>
//           <li><Link to="#">Sports</Link></li>
//           <li><Link to="#">Bikes</Link></li>
//           <li><Link to="#">Scooters</Link></li>
//           <li><Link to="#">Art and Collections</Link></li>
//           <li><Link to="#">Deals</Link></li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Header;
// 

// import React, { useState, useEffect } from "react";
// import "../App.css";
// import { CiSearch } from "react-icons/ci";
// import { Link, NavLink, useNavigate } from "react-router-dom";

// const Header = () => {
//   const navigate = useNavigate();
//   const [isLogged, setIsLogged] = useState(!!localStorage.getItem("token"));
//   const [userName, setUserName] = useState("");

//   useEffect(() => {
//     const checkAuth = () => {
//       const token = localStorage.getItem("token");
//       const storedUser = localStorage.getItem("user"); // Keep "user", not "items"
    
//       if (token && storedUser) {
//         try {
//           const parsedUser = JSON.parse(storedUser);
//           setIsLogged(true);
//           setUserName(parsedUser?.name || "Unknown User");
//         } catch (error) {
//           console.error("Error parsing user data:", error);
//           localStorage.removeItem("user"); // Clear invalid data
//           setIsLogged(false);
//           setUserName("");
//         }
//       } else {
//         setIsLogged(false);
//         setUserName("");
//       }
//     };

//     checkAuth();
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     setIsLogged(false);
//     setUserName("");
//     navigate("/login");
//   };

//   return (
//     <div>
//       <div className="head">
//         <NavLink to="/">
//           <h1>Bexi</h1>
//         </NavLink>
//         <input type="text" placeholder="Search" />
//         <button className="search-btn">
//           <CiSearch />
//         </button>
//         <button className="sell-btn">Sell</button>

//         {isLogged ? (
//           <div className="user-info">
//             <button className="logout_btn" onClick={handleLogout}>
//               Logout
//             </button>
//           </div>
//         ) : (
//           <button className="login-btn" onClick={() => navigate("/login")}>
//             Login
//           </button>
//         )}
//       </div>

//       <div className="navbar">
        
//         <ul>
          
//           <li><NavLink to="/">Home</NavLink></li>
//           <li><Link to="/Laptop">Laptops</Link></li>
//           <li><Link to="#">Cars</Link></li>
//           <li><Link to="#">Sports</Link></li>
//           <li><Link to="#">Bikes</Link></li>
//           <li><Link to="#">Scooters</Link></li>
//           <li><Link to="#">Art and Collections</Link></li>
//           <li><Link to="#">Deals</Link></li>
//       <span className="user-name">Welcome, {userName || "user"}!</span>

//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Header;


import React, { useContext } from "react";
import "../App.css";
import { CiSearch } from "react-icons/ci";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext"; // Import AuthContext

const Header = () => {
  const navigate = useNavigate();
  const { isLogged, userName, handleLogout } = useContext(AuthContext); // Use global state

  return (
    <div>
      <div className="head">
        <NavLink to="/">
          <h1>Bexi</h1>
        </NavLink>
        <input type="text" placeholder="Search" />
        <button className="search-btn">
          <CiSearch />
        </button>
        <Link to="/cart" className="Cart-button">🛒</Link>
        <button className="sell-btn">Sell</button>

        {isLogged ? (
          <div className="user-info">
            <button className="logout_btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <button className="login-btn" onClick={() => navigate("/login")}>
            Login
          </button>
        )}
      </div>

      <div className="navbar">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><Link to="/Laptop">Laptops</Link></li>
          <li><Link to="#">Cars</Link></li>
          <li><Link to="#">Sports</Link></li>
          <li><Link to="#">Bikes</Link></li>
          <li><Link to="#">Scooters</Link></li>
          <li><Link to="#">Art and Collections</Link></li>
          <li><Link to="#">Deals</Link></li>
          <span className="user-name">Welcome, {userName || "guest"}!</span>
        </ul>
      </div>
    </div>
  );
};

export default Header;
