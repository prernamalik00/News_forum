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
                <div className="header-name">
                    <h2>KHABAREIN</h2>
                </div>
                <div className="search_bar">
                    {search && <motion.input
                        type="text"
                        autoFocus
                        initial={{ width: 0 }}
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
            </div>
        </div>
    )
}
export default Header
