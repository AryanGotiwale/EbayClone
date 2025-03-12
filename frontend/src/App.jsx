import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CiSearch } from "react-icons/ci";
import { Link, NavLink } from 'react-router-dom';
import Header from './Header/Header';
import axios from 'axios';


function App() {
const [data, setData] =useState()

const getData =async()=>{
  const response=await  axios.get("http://localhost: ")
}
  return (
    
//     <div>
      
//     <div className='head'>
//       <h1>Bexi </h1>
//       <input type="text" placeholder='Search' />
//       <button className='search-btn'><CiSearch /></button>
//       {/* <input
//         type="text"
//         placeholder="Enter text"
//         className="pl-10 pr-10 border border-gray-300 rounded-lg p-2 focus:outline-none"
//       />
//       <FaTimes className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" /> */}
 
//       <button className='sell-btn'>
//      Sell
//       </button>
//       <button className='login-btn'>Login</button>
      
      
//     </div>
   
//     <div className='navbar'>
//     <ul>
//   <li><a href="#">Laptops</a></li>
//   <li><a href="#">Cars</a></li>
//   <li><a href="#">Sports</a></li>
//   <li><a href="#">BIkes</a></li>
//   <li><a href="#">Scooters</a></li>
//   <li><a href="#">Art and Collections</a></li>
//   <li><a href="#">Deals</a></li>
// </ul>

//     </div>
//     </div>
<Header/>
  )
}

export default App
