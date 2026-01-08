import React from 'react';
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="sticky-navbar">
            <div className="nav-container">
                <div className="nav-logo">Jeff Heytow</div>
                <div className="nav-links">
                    <a href="#projects">Projects</a>
                    <a href="#journey">Journey</a>
                    <a href="#skills">Skills</a>
                    <a href="#book">Book</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </nav>
    );
}
