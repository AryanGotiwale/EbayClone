import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Laptop from './Laptop.jsx'
import Layout from './Layout.jsx'
import Home from './Home/Home.jsx'
import Electronics from './Pages/Electronics.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='Electronics' element={<Electronics/>}/>
    <Route path='Laptop' element={<Laptop/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
