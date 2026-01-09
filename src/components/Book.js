import React from 'react';
import './Book.css';

export default function Book() {
    return (
        <section className="book-page">
            <div className="book-container">
                <div className="book-content pixel-text">
                    <div className="animated-little-bug">
                        <img src="/images/bug-hello.png" alt="Little Bug" className="bug-float" />
                    </div>
                    
                    <h2 className="section-title">⭐ SIDE QUEST COMPLETED ⭐</h2>
                    <h3 className="book-title">"Little Bug, Big Bug!"</h3>
                    
                    <p className="book-description text-small">
                        From morning light until stars at night,
                        <br/>Big Bug and Little Bug share an incredible day
                        <br/>celebrating the special bond between father and son!
                        <br/><br/>
                        A heartwarming children's book featuring gentle rhymes,
                        <br/>captivating illustrations, and the simple pleasures of life.
                        <br/>Written and illustrated by self-taught artist Jeffrey P. Heytow,
                        <br/>this enchanting tale celebrates family bonds and core memories.
                    </p>
                    
                    <div className="book-features">
                        <div className="feature">
                            <span className="feature-icon">👨‍👦</span>
                            <span className="text-small">Father-Son Adventure</span>
                        </div>
                        <div className="feature">
                            <span className="feature-icon">🎨</span>
                            <span className="text-small">Self-Illustrated</span>
                        </div>
                        <div className="feature">
                            <span className="feature-icon">◆</span>
                            <span className="text-small">Gentle Rhymes</span>
                        </div>
                        <div className="feature">
                            <span className="feature-icon">⭐</span>
                            <span className="text-small">Easy-to-Read</span>
                        </div>
                    </div>
                    
                    <div className="book-stats retro-container">
                        <div className="stat-row">
                            <span className="stat-label">PERFECT FOR:</span>
                            <span className="stat-value text-small">Dads, Step-Dads, Grandpas & Kids</span>
                        </div>
                        <div className="stat-row">
                            <span className="stat-label">IDEAL FOR:</span>
                            <span className="stat-value text-small">Read-Aloud Sessions & Story Time</span>
                        </div>
                        <div className="stat-row">
                            <span className="stat-label">AGES:</span>
                            <span className="stat-value text-small">Toddlers to Elementary • All Ages</span>
                        </div>
                    </div>
                    
                    <a 
                        href="https://www.amazon.com/Little-Bug-Big-Jeffrey-Heytow/dp/B0CK3HKVW7" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="nes-button"
                    >
                        ▣ VIEW ON AMAZON
                    </a>
                </div>
            </div>
        </section>
    );
}
