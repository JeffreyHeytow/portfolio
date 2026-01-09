import React, { useState, useEffect } from 'react';
import './Hero.css';

export default function Hero() {
    const [codeSnippets, setCodeSnippets] = useState([]);
    const [currentBadge, setCurrentBadge] = useState(0);

    const allCodeSnippets = [
        'const hero = "Jeff";',
        'function conquer()',
        'let destiny = true;',
        '} // Quest done',
        'import { Courage }',
        'class Legend {',
        'async begin()',
        'export Champion;'
    ];

    const badges = [
        'Defender of Code',
        'Teller of Tales',
        'Beat Wizard'
    ];

    useEffect(() => {
        // Rotate badges every 1.5 seconds
        const badgeInterval = setInterval(() => {
            setCurrentBadge(prev => (prev + 1) % badges.length);
        }, 1500);

        return () => clearInterval(badgeInterval);
    }, []);

    useEffect(() => {
        const createSnippet = () => {
            return {
                code: allCodeSnippets[Math.floor(Math.random() * allCodeSnippets.length)],
                left: `${20 + Math.random() * 60}%`,
                id: Date.now() + Math.random()
            };
        };

        // Start with 2 snippets
        setCodeSnippets([createSnippet(), createSnippet()]);

        // Add new snippet every 5 seconds (drastically reduced)
        const interval = setInterval(() => {
            setCodeSnippets(prev => {
                const newSnippets = [...prev, createSnippet()].slice(-3); // Keep max 3
                return newSnippets;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero-page pixel-text">
            <div className="matrix-rain"></div>
            
            <div className="hero-content">
                {/* Code snippets inside hero-content only */}
                {codeSnippets.map((snippet) => (
                    <div 
                        key={snippet.id}
                        className="code-particle retro-container"
                        style={{
                            left: snippet.left
                        }}
                    >
                        {snippet.code}
                    </div>
                ))}
                
                <div className="bug-center">
                    <img src="/images/bug-jug.png" alt="The Legendary Coder" className="bug-typing" />
                </div>
                
                <div className="title-block">
                    <h1 className="hero-title">
                        <span className="glitch-text">JEFF HEYTOW</span>
                    </h1>
                    <div className="subtitle-container">
                        <span className="rotating-badge">▶ {badges[currentBadge]}</span>
                    </div>
                </div>
                
                <p className="hero-story">
                    A legendary journey through sound and silicon...
                    <br/>From commanding Chicago's underground music scene
                    <br/>to architecting systems that defend nations,
                    <br/>crafting tales that spark young imaginations.
                </p>
                
                <div className="social-links-retro">
                    <a href="https://github.com/JeffreyHeytow" target="_blank" rel="noopener noreferrer" className="nes-button">
                        GITHUB
                    </a>
                    <a href="https://linkedin.com/in/jeffheytow" target="_blank" rel="noopener noreferrer" className="nes-button">
                        LINKEDIN
                    </a>
                    <a href="https://www.amazon.com/Little-Bug-Big-Jeffrey-Heytow/dp/B0CK3HKVW7" target="_blank" rel="noopener noreferrer" className="nes-button">
                        AMAZON
                    </a>
                </div>
            </div>
        </section>
    );
}
