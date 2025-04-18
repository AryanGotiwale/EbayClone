// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
// import Laptop from './Laptop.jsx'
// import Layout from './Layout.jsx'
// import Home from './Home/Home.jsx'
// import Electronics from './Pages/Electronics.jsx'
// import AddProducts from './Admin/AddProducts.jsx'
// import AdminAuth from './Admin/AdminAuth.jsx'
// import AdminHeader from './Admin/AdminHeader.jsx'
// import ProductList from './Components/ProductList.jsx'
// import ProductListAdmin from './Admin/ProductListAdmin.jsx'
// import ChangePassword from './Admin/ChangePassword.jsx'
// import ViewProduct from './Components/ViewProduct.jsx'
// import Login from './Components/Login.jsx'
// import Register from './Components/Register.jsx'
// import AuthProvider from './Context/AuthContext.jsx'

// const router = createBrowserRouter(
//   createRoutesFromElements(
    
//       <Route path='/' element={<Layout/>}>
//         <Route path='' element={<Home/>}/>
//         <Route path='Electronics' element={<Electronics/>}/>
//         <Route path='AdminAuth' element={<AdminAuth/>}/>
//         <Route path='AdminHeader' element={<AdminHeader/>}/>
//         <Route path='AddProducts' element={<AddProducts/>}/>
//         <Route path='ProductListAdmin' element={<ProductListAdmin/>}/>
//         <Route path='ChangePassword' element={<ChangePassword/>}/>
//         <Route path='/product/:id' element={<ViewProduct/>}/>
//         <Route path='/login' element={<Login/>}/>
//         <Route path="/register" element={<Register />} />
//     <Route path='Laptop' element={<Laptop/>}/>
//     </Route>
//   )
// )

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <AuthProvider>
//       <RouterProvider router={router} />
//     </AuthProvider>
//   </StrictMode>
// )
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Laptop from "./Laptop.jsx";
import Layout from "./Layout.jsx";
import Home from "./Home/Home.jsx";
import Electronics from "./Pages/Electronics.jsx";
import AddProducts from "./Admin/AddProducts.jsx";
import AdminAuth from "./Admin/AdminAuth.jsx";
import AdminHeader from "./Admin/AdminHeader.jsx";
import ProductListAdmin from "./Admin/ProductListAdmin.jsx";
import ChangePassword from "./Admin/ChangePassword.jsx";
import ViewProduct from "./Components/ViewProduct.jsx";
import Login from "./Components/Login.jsx";
import Register from "./Components/Register.jsx";
import {AuthProvider} from "./Context/AuthContext.jsx"; 
import { CartProvider } from "./Context/CartContext.jsx";
import Cart from "./Components/Cart.jsx"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="Electronics" element={<Electronics />} />
      <Route path="AdminAuth" element={<AdminAuth />} />
      <Route path="AdminHeader" element={<AdminHeader />} />
      <Route path="AddProducts" element={<AddProducts />} />
      <Route path="ProductListAdmin" element={<ProductListAdmin />} />
      <Route path="ChangePassword" element={<ChangePassword />} />
      <Route path="/product/:id" element={<ViewProduct />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/Cart" element={<Cart/>}/>
      <Route path="Laptop" element={<Laptop />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
   <CartProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
   </CartProvider>
  </StrictMode>
);
