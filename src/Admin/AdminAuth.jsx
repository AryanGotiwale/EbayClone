import { useState } from "react";
import "./Admin.css"; 
import { Link, NavLink, useNavigate } from "react-router-dom";
import AdminHeader from "./AdminHeader";

const AdminAuth = () => {
 
  //login
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()
  const correctUsername = "admin";
  const correctPassword = "1234"; 

  const handleLogin = () => {
    if (username === correctUsername && password === correctPassword) {
      setIsLoggedIn(true);
      navigate('/adminHeader')
    } else {
      alert("Invalid Credentials! Try again.");
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="login-container">
        <h2>Admin Login</h2> 
        <input  className="in-user"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /> 
        <input className="in-pass"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /> 
        <button style={{padding:'8px', backgroundColor:'royalblue' , color:'white', cursor:'pointer', width:'20%', position:'relative', left:"120px", }} 
         onClick={handleLogin}>Login</button>
      </div>
    );
  }
  return (
   
    <div>
        
    </div>
  );
}

export default AdminAuth;
