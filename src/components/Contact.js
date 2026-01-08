import React from 'react';
import './Contact.css';

export default function Contact() {
    const handleEmailClick = (e) => {
        e.preventDefault();
        window.location.href = 'mailto:jeff@jeffheytow.com';
    };

    return (
        <section id="contact" className="contact-page">
            <div className="contact-container">
                <h2 className="section-title">Let's Connect</h2>
                <p className="section-subtitle">
                    Whether it's about code, books, or beats - I'd love to hear from you
                </p>
                
                <div className="contact-methods">
                    <button 
                        onClick={handleEmailClick}
                        className="contact-card"
                    >
                        <div className="contact-icon">📧</div>
                        <h3>Email Me</h3>
                        <p>Send a message</p>
                    </button>
                    
                    <a 
                        href="https://linkedin.com/in/jeffheytow" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="contact-card"
                    >
                        <div className="contact-icon">💼</div>
                        <h3>LinkedIn</h3>
                        <p>Connect professionally</p>
                    </a>
                    
                    <a 
                        href="https://github.com/JeffreyHeytow" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="contact-card"
                    >
                        <div className="contact-icon">💻</div>
                        <h3>GitHub</h3>
                        <p>Check out my code</p>
                    </a>
                </div>
                
                <div className="location">
                    📍 Greater Chicago Area | Remote
                </div>
            </div>
            
            <footer className="footer">
                <p>© 2026 Jeffrey Heytow. Built with React.</p>
                <p className="footer-links">
                    <a href="https://kubelearn.jeffheytow.com" target="_blank" rel="noopener noreferrer">KubeLearn</a>
                    <span>•</span>
                    <a href="https://www.amazon.com/Little-Bug-Big-Jeffrey-Heytow/dp/B0CK3HKVW7" target="_blank" rel="noopener noreferrer">Amazon Author Page</a>
                </p>
            </footer>
        </section>
    );
}
