// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
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
//         localStorage.setItem("token", data.token);
//         alert("Login successful");
//         navigate("/"); // Redirect to home
//       } else {
//         alert(data.message || "Invalid credentials");
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";


// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   // const [isLogged, setIsLogged] = useState(false)

//     const navigate = useNavigate()
  

//   // const handleLogin = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });
//   //     localStorage.setItem("token", res.data.token);
//   //     setMessage("Login successful!");

//   //     await navigate('/')
//   //     // setIsLogged(true)
//   //   } catch (error) {
//   //     setMessage("Invalid credentials");
//   //   }
//   // };

//   const handleLogin = async () => {
//     try {
//       const email = "o@gmail.com";  
//       const password = "1234";  
  
//       const response = await fetch("http://localhost:5000/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });
  
//       const data = await response.json();
//       console.log("Response Data:", data); 
  
//       if (response.ok) {
//         localStorage.setItem("token", data.token);
//         localStorage.setItem("user", JSON.stringify(data.user));
  
//         console.log("Saved User in localStorage:", localStorage.getItem("user")); // Debug
  
//         setIsLogged(true);
//         setUserName(data.user?.name || "User"); // Fix undefined issue
  
//         alert("Login successful");
//         navigate("/");
//       } else {
//         alert(data.message || "Login failed");
//       }
//     } catch (error) {
//       console.error("Error during login:", error);
//     }
//   };
  

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//         <button type="submit">Login</button>
//         <p><a href="/register">Don't have an accont click to create one</a></p>
//       </form>
//       <p>{message}</p>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:5000/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });
  
//       const data = await response.json();
//       console.log("Response Data:", data);
  
//       if (response.ok) {
//         localStorage.setItem("token", data.token);
  
//         // Ensure user data exists before storing
//         if (data.user) {
//           localStorage.setItem("user", JSON.stringify(data.user));
//         } else if (data.userId) {
//           localStorage.setItem("user", JSON.stringify({ id: data.userId, name: "Guest" }));
//         } else {
//           console.warn("No user data in response");
//         }
//         navigate('/')
       
//         alert("Login successful");
//         window.location.reload(); // Ensures `Header` updates after login
//       } else {
//         alert(data.message || "Login failed");
//       }
//     } catch (error) {
//       console.error("Error during login:", error);
//     }
//   };
  

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Login</button>
//         <p>
//           <a href="/register">Don't have an account? Click to create one</a>
//         </p>
//       </form>
//       <p>{message}</p>
//     </div>
//   );
// };

// export default Login;
// import { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../Context/AuthContext"; // Import useAuth


// const Login = () => {
//   const { login } = useAuth(); // Use global login function
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:5000/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();
//       console.log("Response Data:", data);

//       if (response.ok) {
//         login(data.token); // Call global login function
//         localStorage.setItem("user", JSON.stringify(data.user || { id: data.userId, name: "Guest" }));

//         alert("Login successful!");
//         navigate("/"); // Redirect to home after login
//         window.location.reload(); // Ensures `Navbar` updates immediately
//       } else {
//         setMessage(data.message || "Login failed");
//       }
//     } catch (error) {
//       console.error("Error during login:", error);
//       setMessage("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Login</button>
//         <p>
//           <a href="/register">Don't have an account? Click to create one</a>
//         </p>
//       </form>
//       <p style={{ color: "red" }}>{message}</p>
//     </div>
//   );
// };

// export default Login;
  


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext"; // Import useAuth

const Login = () => {
  const { login } = useAuth(); // Use global login function
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log("Response Data:", data);

      if (response.ok) {
        login(data.token); // ✅ Set token in context
        localStorage.setItem("token", data.token); // ✅ Set token in localStorage
        localStorage.setItem("user", JSON.stringify(data.user || { id: data.userId, name: "Guest" }));

        alert("Login successful!");
        navigate("/"); // Redirect to home after login
        window.location.reload(); // Ensures `Navbar` updates immediately
      } else {
        setMessage(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        <p>
          <a href="/register">Don't have an account? Click to create one</a>
        </p>
      </form>
      <p style={{ color: "red" }}>{message}</p>
    </div>
  );
};

export default Login;
  