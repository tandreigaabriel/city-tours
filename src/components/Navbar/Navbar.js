import React from 'react';
import "./Navbar.scss";
import logo from "../../logo.png";
import Title from '../Title/Title'

export default function Navbar() {
    return (
        
        <nav className="navbar">
            <img src={logo} alt="tandreig" />
            <Title/>
            <ul className="nav-links">
                <li>
                    <a href="/" className="nav-link">Home</a>
                </li>
                <li>
                    <a href="/" className="nav-link">About</a>
                </li>
                <li>
                    <a href="/" className="nav-link active">Tours</a>
                </li>
            </ul>
        </nav>
    )
}