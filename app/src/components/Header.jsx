import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search } from 'react-bootstrap-icons';

function Header() {
    const [search, setSearch] = useState(false)
    const changeVisibility = () => {
        setSearch(!search)
    }
    return (
        <div class="sticky-top header">
            <div className="d-flex user-header">
                <div className="user-pic">
                </div>
                Hi Prerna...
            </div>
            <div className="d-flex navigation">
<<<<<<< HEAD
                <div className="header-name">
                    <h2>KHABAREIN</h2>
                </div>
                <div className="search_bar">
                    {search && <motion.input
                        type="text"
                        autoFocus
                        initial={{ width: "20px" }}
                        animate={{ width: "auto" }}
                        transition={{ type: "tween" }}
                    />}
                    <Search size={32} onClick={changeVisibility} />
                </div>
                <div className="menu-list">
                    <ul>
                        <li className="active"><a href="#home">HOME</a></li>
                        <li><a href="#about">ABOUT US</a></li>
                        <li><a href="#contact">CONTACT US</a></li>
                    </ul>
                </div>
=======
                <div className="navbar-container container">
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
<<<<<<< HEAD
                
>>>>>>> Changing header css
            </div>
        </div>
=======
            </div>
        </div>


>>>>>>> changing header.scss
    )
}
export default Header
