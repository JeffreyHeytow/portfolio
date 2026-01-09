import React from 'react';
import './SideNav.css';

export default function SideNav({ currentPage, setCurrentPage }) {
    const navItems = [
        { id: 'projects', label: 'Projects', icon: '▲' },
        { id: 'journey', label: 'Journey', icon: '♪' },
        { id: 'experience', label: 'XP', icon: '⚔' },
        { id: 'skills', label: 'Skills', icon: '◆' },
        { id: 'book', label: 'Book', icon: '▣' },
        { id: 'ai', label: 'AI', icon: '◉' },
        { id: 'contact', label: 'Contact', icon: '●' }
    ];

    return (
        <nav className="side-nav pixel-text">
            <div className="nav-logo" onClick={() => setCurrentPage('home')} style={{cursor: 'pointer'}}>
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
        </nav>
    );
}
