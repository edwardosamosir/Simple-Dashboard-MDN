import React, { useState } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { FaHome, FaStore } from 'react-icons/fa';
import { MdKeyboardArrowDown, MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight, MdPeople } from 'react-icons/md';
import { BsGearWideConnected } from "react-icons/bs";
import B2BPortalLogo from '../assets/B2BPortalLogoNoBG.png';
import '../App.css';


export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState({ vendor: false, customer: false, config: false });

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  }

  const toggleDropdown = (dropdown) => {
    setDropdownOpen({ ...dropdownOpen, [dropdown]: !dropdownOpen[dropdown] });
  }

  return (
    <>
      <div style={{ width: sidebarOpen ? '15%' : '4%', height: '100vh', backgroundColor: 'rgba(10,25,41,255)', overflow: 'auto' }}>
        <div style={{ marginLeft: '-10px' }}>
          <img src={B2BPortalLogo} alt="B2B Portal Logo" style={{ width: "80px", verticalAlign: "middle" }} />
          {sidebarOpen && <h3 style={{ color: 'rgba(111,129,149,255)', display: 'inline', verticalAlign: "middle", marginLeft: '-10px' }}>B2B Portal</h3>}
        </div>
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link onClick={toggleSidebar} style={{ color: 'white' }}>
            {sidebarOpen && 'Menu'}
          </Nav.Link>
          <br />
          <Nav.Link onClick={toggleSidebar} style={{ color: 'white' }}>
            {sidebarOpen ? <MdKeyboardDoubleArrowLeft size={24} style={{ marginRight: '20px' }} /> : <MdKeyboardDoubleArrowRight size={24} style={{ marginRight: '20px' }} />}
            {sidebarOpen ? 'Hide Menu' : ''}
          </Nav.Link>

          <Nav.Link href="/home" style={{ color: 'white' }}>
            <FaHome style={{ marginRight: '20px' }} /> {sidebarOpen && 'Home'}
          </Nav.Link>
          <NavDropdown
            title={
              <div style={{ color: 'white', display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <div>
                  <MdPeople style={{ marginRight: '20px' }} /> {sidebarOpen && 'Vendor/Supplier'}
                </div>
                <div>
                  {sidebarOpen && <MdKeyboardArrowDown size={24} />}
                </div>
              </div>
            }
            id="nav-dropdown-vendor"
            show={dropdownOpen.vendor}
            onToggle={() => toggleDropdown('vendor')}
          >
            <NavDropdown.Item href="/suppliers/cooking">Supplier Cooking</NavDropdown.Item>
            <NavDropdown.Item href="/suppliers/cooling">Supplier Cooling</NavDropdown.Item>
            <NavDropdown.Item href="/suppliers/cleaning">Supplier Cleaning</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title={
              <div style={{ color: 'white', display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <div>
                  <FaStore style={{ marginRight: '20px' }} /> {sidebarOpen && 'Customer/Dealer'}
                </div>
                <div>
                  {sidebarOpen && <MdKeyboardArrowDown size={24} />}
                </div>
              </div>
            }
            id="nav-dropdown-customer"
            show={dropdownOpen.customer}
            onToggle={() => toggleDropdown('customer')}
          >
            <NavDropdown.Item href="/customers/cooking">Customer Cooking</NavDropdown.Item>
            <NavDropdown.Item href="/customers/cooling">Customer Cooling</NavDropdown.Item>
            <NavDropdown.Item href="/customers/cleaning">Customer Cleaning</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title={
              <div style={{ color: 'white', display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <div>
                  <BsGearWideConnected style={{ marginRight: '20px' }} /> {sidebarOpen && 'Configuration Settings'}
                </div>
                <div>
                  {sidebarOpen && <MdKeyboardArrowDown size={24} />}
                </div>
              </div>
            }
            id="nav-dropdown-config"
            show={dropdownOpen.config}
            onToggle={() => toggleDropdown('config')}>
            <NavDropdown.Item href="/config/administrators">Config Administrators</NavDropdown.Item>
            <NavDropdown.Item href="/config/users">Config Users</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </div>
    </>
  );
}
