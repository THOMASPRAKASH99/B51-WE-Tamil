import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return <>
  
  {/* <!-- Sidebar --> */}
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            
            {/* <!-- Sidebar - Brand --> */}
            <Link to='/dashboard' className="sidebar-brand d-flex align-items-center justify-content-center">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </Link>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0"/>

           
            {/* <!-- Nav Item - Dashboard --> */}
            <li className="nav-item">
                <Link to={'/dashboard'} className="nav-link">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                    </Link>
            </li>


            {/* <!-- Nav Item - Pages Collapse Menu --> */}
            <li className="nav-item">
                <Link to={'/add-user'} className="nav-link">
                <i className="fa-solid fa-users"></i>
                    <span>AddUser</span>
                </Link>
            
            </li>

            <li className="nav-item">
                <Link to={'/nested'} className="nav-link">
                <i className="fa-solid fa-folder"></i>
                    <span>Nested Routing</span>
                </Link>
            
            </li>

            <li className="nav-item">
                <Link to={'/useref'} className="nav-link">
                <i class="fa-solid fa-book"></i>
                    <span>Hook-useRef</span>
                </Link>
            
            </li>


            {/* <!-- Divider --> */}
            <hr className="sidebar-divider"/>

        </ul>
        </>
}

export default Sidebar