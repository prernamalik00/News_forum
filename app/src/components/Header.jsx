import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'react-bootstrap-icons';

function Header() {

    const [openSearch, setOpenSearch] = useState(false);
    const OpenSearch = (openstate) => {
        setOpenSearch(openstate);
    }
    return (
        <div class="sticky-top header text-color-light">
            <div className="d-flex user-header">
                <div className="container-fluid d-flex justify-content-between align-items-center"></div>
            </div>
            <div className="navigation">
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <div className="header-name">
                        <h2>KHABAREIN</h2>
                    </div>
                    <div className="search_bar">
                        <input />
                        <Search size={32} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header
