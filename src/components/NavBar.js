import React from "react";
import logo from "../img/Logo.svg"
import "../css/components/nav-bar.css"

const NavBar = () => {
    return (
        <div className="nav-bar-container">
            <a href="#" className="nav-bar-logo"><img src={logo} alt="Logo" /></a>
            <ul className="nav-bar-list">
                <li className="nav-bar-item"><a href="#about-me-section">About</a></li>
                <li className="nav-bar-item"><a href="#work-section">Work</a></li>
                <li className="nav-bar-item"><a href="#">Contact</a></li>
            </ul>
        </div>
    )
}

export default NavBar