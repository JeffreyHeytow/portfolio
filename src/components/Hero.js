import React, { useState, useEffect } from 'react';
import './Hero.css';

export default function Hero() {
    const [codeSnippets, setCodeSnippets] = useState([]);

    const allCodeSnippets = [
        'const hero = "Jeff";',
        'function conquer() {',
        'return <Adventure />;',
        'let destiny = true;',
        'console.log("🎮");',
        '} // Quest complete',
        'import { Courage }',
        'class LegendBuilder {',
        'async beginJourney()',
        'const skills = [];',
        'while(learning) {',
        'skills.push(power);',
        '}',
        'export default Hero;',
        'if (challenge) solve();',
        '// Level Up! 🚀'
    ];

    useEffect(() => {
        const createSnippet = () => {
            return {
                code: allCodeSnippets[Math.floor(Math.random() * allCodeSnippets.length)],
                left: `${20 + Math.random() * 60}%`, // Centered around name area
                id: Date.now() + Math.random()
            };
        };

        // Initial snippets
        setCodeSnippets([createSnippet(), createSnippet(), createSnippet()]);

        // Add new snippet every 2 seconds
        const interval = setInterval(() => {
            setCodeSnippets(prev => {
                const newSnippets = [...prev, createSnippet()].slice(-5); // Keep max 5
                return newSnippets;
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero-page pixel-text">
            <div className="matrix-rain"></div>
            
            {/* Code snippets floating up from name */}
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
            
            <div className="hero-content">
                <div className="bug-center">
                    <img src="/images/bug-jug.png" alt="The Legendary Coder" className="bug-typing" />
                </div>
                
                <div className="title-block">
                    <h1 className="hero-title">
                        <span className="glitch-text">JEFF HEYTOW</span>
                    </h1>
                    <div className="subtitle-container">
                        <span className="blink-badge">▶ Defender of Code</span>
                        <span className="blink-badge">▶ Teller of Tales</span>
                        <span className="blink-badge">▶ Beat Wizard</span>
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
