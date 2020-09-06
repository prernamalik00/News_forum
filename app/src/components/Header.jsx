import React from 'react'
//import Drawer from 'Drawer.jsx'

function Header() {
    return (
        <div class="sticky-top header">
            <div className="d-flex user-header">
                <div className="user-pic">
                </div>
                Hi Prerna...
            </div>
            <div className="d-flex navigation">
                <div className="navbar-container container-fluid">
                    <a href=""
                        className="home-link">
                        <div className="navbar-logo"></div>
                        <h2>Khabarein</h2>
                    </a>
                    <div className="menu-list">
                        <div className="search-bar">
                            <a href="#search" className="search-btn"></a>
                            <input type="text" className="search-text" name="" placeholder="Search..." autofocus />
                        </div>
                        <ul class="nav justify-content-end">
                            <li class="nav-item">
                                <a class="nav-link active" href="#Home">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#aboutus">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#contactus">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>


    )
}
export default Header
