import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import { useLocation } from 'react-router-dom';



const Layout = () => {
  const location = useLocation();

  // Condition to hide the header and footer on the login page
  const hideHeaderAndFooter = location.pathname === '/adminauth' || 
  location.pathname=='/addProducts' || location.pathname ==='/adminHeader' || location.pathname ==='/productListAdmin'
  || location.pathname ==='/changePassword';

  return (
    
    <>
      {!hideHeaderAndFooter && <Header />}
      <Outlet />
    
    </>
  );
};

export default Layout;
