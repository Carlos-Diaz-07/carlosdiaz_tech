import React from "react";
import logo from "../img/Logo.svg"
import "../css/components/nav-bar.css"

const NavBar = () => {
    return (
        <div id="nav-bar-container">
            <a href="#" id="nav-bar-logo"><img src={logo} alt="Logo" /></a>
            <ul id="nav-bar-list">
                <li className="nav-bar-item"><a href="#">About</a></li>
                <li className="nav-bar-item"><a href="#">Work</a></li>
                <li className="nav-bar-item"><a href="#">Contact</a></li>
            </ul>
        </div>
    )
}

export default NavBar