import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import Laptop from './Laptop.jsx'
import Layout from './Layout.jsx'
import Home from './Home/Home.jsx'
import Electronics from './Pages/Electronics.jsx'
import AddProducts from './Admin/AddProducts.jsx'
import AdminAuth from './Admin/AdminAuth.jsx'
import AdminHeader from './Admin/AdminHeader.jsx'
import ProductList from './Components/ProductList.jsx'
import ProductListAdmin from './Admin/ProductListAdmin.jsx'
import ChangePassword from './Admin/ChangePassword.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='Electronics' element={<Electronics/>}/>
        <Route path='AdminAuth' element={<AdminAuth/>}/>
        <Route path='AdminHeader' element={<AdminHeader/>}/>
        <Route path='AddProducts' element={<AddProducts/>}/>
        <Route path='ProductListAdmin' element={<ProductListAdmin/>}/>
        <Route path='ChangePassword' element={<ChangePassword/>}/>
    <Route path='Laptop' element={<Laptop/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
