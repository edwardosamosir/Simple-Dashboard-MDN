import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Dropdown } from 'react-bootstrap';
import { CgLogOut } from 'react-icons/cg';

export default function UserProfileDropdown() {
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.clear();
        navigate("/login");
    };

    const avatarUrl = localStorage.getItem('avatar')

    return (
        <Dropdown style={{ backgroundColor: "rgba(235,245,255,255) !important" }}>
            <Dropdown.Toggle
                className="border-black"
                id="dropdown-basic"
                style={{ backgroundColor: "rgba(235,245,255,255)", borderRadius: "50%", width: '50px', height: '50px' }}
            >
                <img
                    className="profile-image bg-white"
                    src={avatarUrl}
                    alt="User profile"
                    style={{ borderRadius: "50%", width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
                />
            </Dropdown.Toggle>
            <Dropdown.Menu className="profile-menu">
                <Dropdown.Item><Link className="text-decoration-none text-dark" to="/">Home</Link></Dropdown.Item>
                <Dropdown.Item><Link className="text-decoration-none text-dark" to="/config/users">Config Users</Link></Dropdown.Item>
                <Dropdown.Item><Link className="text-decoration-none text-dark" to="/config/administrators">Config Admins</Link></Dropdown.Item>
                <Dropdown.Item className="logout-option">
                    <CgLogOut style={{ color: 'red' }} className="logout-icon" onClick={handleLogout} /> <Link className="text-decoration-none text-dark" onClick={handleLogout}>Log Out</Link>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}


