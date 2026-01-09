import React from 'react';
import './Contact.css';

export default function Contact() {
    return (
        <section className="contact-page pixel-text">
            <div className="contact-container">
                <h2 className="page-title glitch-text">LET'S CONNECT</h2>
                <p className="page-subtitle text-small">
                    Whether it's about code, books, or beats - I'd love to hear from you
                </p>
                
                <div className="contact-methods">
                    <button 
                        onClick={() => window.location.href = 'mailto:heytow1@gmail.com'}
                        className="contact-card nes-button"
                    >
                        <div className="contact-icon">📧</div>
                        <h3>EMAIL ME</h3>
                        <p className="text-small">Send a message</p>
                    </button>
                    
                    <a 
                        href="https://linkedin.com/in/jeffheytow" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="contact-card nes-button"
                    >
                        <div className="contact-icon">💼</div>
                        <h3>LINKEDIN</h3>
                        <p className="text-small">Connect professionally</p>
                    </a>
                    
                    <a 
                        href="https://github.com/JeffreyHeytow" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="contact-card nes-button"
                    >
                        <div className="contact-icon">💻</div>
                        <h3>GITHUB</h3>
                        <p className="text-small">Check out my code</p>
                    </a>
                </div>
                
                <div className="location retro-container">
                    <span className="text-small">📍 Greater Chicago Area | Remote</span>
                </div>
            </div>
            
            <footer className="footer">
                <p className="text-small">© 2026 Jeffrey Heytow. Built with React.</p>
                <p className="footer-links text-small">
                    <a href="https://kubelearn.jeffheytow.com" target="_blank" rel="noopener noreferrer">KubeLearn</a>
                    <span> • </span>
                    <a href="https://www.amazon.com/Little-Bug-Big-Jeffrey-Heytow/dp/B0CK3HKVW7" target="_blank" rel="noopener noreferrer">Amazon Author</a>
                </p>
            </footer>
        </section>
    );
}
