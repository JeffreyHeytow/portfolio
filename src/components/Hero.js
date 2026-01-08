import React from 'react';
import './Hero.css';

export default function Hero() {
    return (
        <section className="hero-page">
            <div className="matrix-bg"></div>
            
            <div className="hero-content">
                <div className="bug-coding-scene">
                    <img src="/images/bug-jug.png" alt="Bug Coding" className="bug-typing" />
                    
                    <div className="code-particle" style={{top: '10%', left: '20%', animationDelay: '0s'}}>
                        const code = '💻';
                    </div>
                    <div className="code-particle" style={{top: '20%', right: '15%', animationDelay: '0.5s'}}>
                        function build() {'{'}
                    </div>
                    <div className="code-particle" style={{bottom: '30%', left: '10%', animationDelay: '1s'}}>
                        return &lt;App /&gt;;
                    </div>
                    <div className="code-particle" style={{bottom: '20%', right: '20%', animationDelay: '1.5s'}}>
                        console.log('🚀');
                    </div>
                    <div className="code-particle" style={{top: '50%', left: '5%', animationDelay: '2s'}}>
                        let magic = true;
                    </div>
                    <div className="code-particle" style={{top: '60%', right: '10%', animationDelay: '2.5s'}}>
                        {'}'} // ✨
                    </div>
                </div>
                
                <h1 className="hero-title">
                    Hi, I'm <span className="highlight">Jeff Heytow</span>
                </h1>
                
                <p className="hero-subtitle">
                    Software Engineer • Children's Book Author • Former DJ
                </p>
                
                <p className="hero-description">
                    From orchestrating beats in Chicago's nightlife to crafting code and children's stories, 
                    I bring creativity and technical excellence to everything I build.
                </p>
                
                <div className="social-links">
                    <a href="https://github.com/JeffreyHeytow" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                    <a href="https://linkedin.com/in/jeffheytow" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                    <a href="https://www.amazon.com/Little-Bug-Big-Jeffrey-Heytow/dp/B0CK3HKVW7" target="_blank" rel="noopener noreferrer">
                        Amazon
                    </a>
                </div>
            </div>
        </section>
    );
}
