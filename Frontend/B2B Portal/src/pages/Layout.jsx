import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer';

export default function Layout() {
  return (
    <>  
        <div style={{ display: 'flex', height: '100vh' }}>        
          <Sidebar />
          <div style={{width: '100%', overflowY: 'auto' }}>
            <Outlet />
            <Footer />
          </div>
        </div>
    </>
  )
}
