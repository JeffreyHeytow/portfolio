import React from 'react';
import './Book.css';

export default function Book() {
    return (
        <section id="book" className="book">
            <div className="book-container">
                <div className="book-content">
                    <div className="animated-little-bug">
                        <img src="/images/bug-hello.png" alt="Little Bug" className="bug-float" />
                    </div>
                    
                    <h2 className="section-title">Children's Author & Illustrator</h2>
                    <h3 className="book-title">"Little Bug, Big Bug!"</h3>
                    
                    <p className="book-description">
                        Written and illustrated by self-taught artist Jeffrey P. Heytow, this enchanting 
                        children's book captures the magic of family bonds and creative storytelling. With 
                        gentle rhymes and captivating illustrations, this endearing tale takes young readers 
                        on a delightful journey.
                    </p>
                    
                    <div className="book-features">
                        <div className="feature">
                            <span className="feature-icon">✨</span>
                            <span>Self-Illustrated</span>
                        </div>
                        <div className="feature">
                            <span className="feature-icon">📖</span>
                            <span>Rhyming Story</span>
                        </div>
                        <div className="feature">
                            <span className="feature-icon">❤️</span>
                            <span>Family Themes</span>
                        </div>
                    </div>
                    
                    <a 
                        href="https://www.amazon.com/Little-Bug-Big-Jeffrey-Heytow/dp/B0CK3HKVW7" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="book-link"
                    >
                        📚 View on Amazon
                    </a>
                </div>
            </div>
        </section>
    );
}
