import React from 'react';
import './SideNav.css';

export default function SideNav({ currentPage, setCurrentPage }) {
    const navItems = [
        { id: 'home', label: 'Home', icon: '🏠' },
        { id: 'projects', label: 'Projects', icon: '🚀' },
        { id: 'journey', label: 'Journey', icon: '🎵' },
        { id: 'skills', label: 'Skills', icon: '💻' },
        { id: 'book', label: 'Book', icon: '📚' },
        { id: 'contact', label: 'Contact', icon: '📧' }
    ];

    return (
        <nav className="side-nav">
            <div className="nav-logo">
                <span className="logo-text">JH</span>
            </div>
            
            <div className="nav-items">
                {navItems.map(item => (
                    <button
                        key={item.id}
                        className={`nav-item ${currentPage === item.id ? 'active' : ''}`}
                        onClick={() => setCurrentPage(item.id)}
                        title={item.label}
                    >
                        <span className="nav-icon">{item.icon}</span>
                        <span className="nav-label">{item.label}</span>
                    </button>
                ))}
            </div>
            
            <div className="nav-footer">
                <a href="https://github.com/JeffreyHeytow" target="_blank" rel="noopener noreferrer" title="GitHub">
                    <span>💻</span>
                </a>
                <a href="https://linkedin.com/in/jeffheytow" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                    <span>💼</span>
                </a>
            </div>
        </nav>
    );
}
