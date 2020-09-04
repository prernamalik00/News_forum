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
                {/* <div>
                    <Drawer />
                </div> */}
                <div className="header-name">
                    <h2>KHABAREIN</h2>
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
