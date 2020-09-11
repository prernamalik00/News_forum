import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'react-bootstrap-icons';

function Header() {
    const [search, setSearch] = useState(false)
    const changeVisibility = () => {
        setSearch(!search)
    }
    return (
        <div class="sticky-top header">
            <div className="d-flex user-header">
            </div>
            <div className="d-flex navigation">
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
                </div>
            </div>
        </div>
    )
}
export default Header
