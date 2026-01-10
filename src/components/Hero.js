import React, { useState, useEffect } from 'react';
import './Hero.css';

export default function Hero() {
    const [codeSnippets, setCodeSnippets] = useState([]);
    const [currentBadge, setCurrentBadge] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

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
        // Alternate: 0.5s visible, 0.5s invisible
        const interval = setInterval(() => {
            setIsVisible(prev => {
                if (!prev) {
                    // Was invisible, now show and advance badge
                    setCurrentBadge(c => (c + 1) % badges.length);
                }
                return !prev;
            });
        }, 500); // Toggle every 0.5s

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const createSnippet = () => {
            return {
                code: allCodeSnippets[Math.floor(Math.random() * allCodeSnippets.length)],
                // Random horizontal drift (-20% to +20% from center)
                horizontalDrift: (Math.random() - 0.5) * 40,
                id: Date.now() + Math.random()
            };
        };

        // Create snippet every 0.5s
        const interval = setInterval(() => {
            setCodeSnippets(prev => {
                // Remove old snippets, add new one
                const newSnippets = [...prev.filter(s => Date.now() - s.id < 8000), createSnippet()];
                return newSnippets;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero-page pixel-text">
            <div className="matrix-rain"></div>
            
            <div className="hero-content">
                {/* Code snippets spawn in center, float up randomly */}
                {codeSnippets.map((snippet) => (
                    <div 
                        key={snippet.id}
                        className="code-particle retro-container"
                        style={{
                            '--horizontal-drift': `${snippet.horizontalDrift}%`
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
                        <span className={`rotating-badge ${isVisible ? 'visible' : 'hidden'}`}>
                            ▶ {badges[currentBadge]}
                        </span>
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
