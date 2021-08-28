import React from "react";
import logo from "../img/Logo.svg"

const NavBar = () => {
    return (
        <nav className="nav-bar-container">
            <a href="#top" className="nav-bar-logo"><img src={logo} alt="Logo" /></a>
            <ul className="nav-bar-list">
                <li className="nav-bar-item"><a href="#about-me-section">About</a></li>
                <li className="nav-bar-item"><a href="#work-section">Work</a></li>
                <li className="nav-bar-item"><a href="#contact-section">Contact</a></li>
            </ul>
        </nav>
    )
}

export default NavBar