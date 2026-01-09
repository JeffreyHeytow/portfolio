import React, { useState } from 'react';
import './Journey.css';

export default function Journey() {
    const [currentLevel, setCurrentLevel] = useState(0);

    const levels = [
        {
            title: "LEVEL 1: THE SOUND WARRIOR",
            period: "20 YEARS",
            icon: "♫",
            story: [
                "In Chicago's underground, a young hero",
                "mastered the ancient art of SOUND.",
                "",
                "Club DJ, Party DJ, Master of Ceremonies—",
                "commanding crowds with epic beats.",
                "",
                "Even touring Willie Nelson's legendary bus,",
                "hosting events as the ultimate MC.",
                "",
                "From turntables to tour buses,",
                "RHYTHM IS POWER."
            ]
        },
        {
            title: "LEVEL 2: THE TRANSFORMATION",
            period: "CAREER PIVOT",
            icon: "▲",
            story: [
                "The hero sensed a greater calling...",
                "",
                "He entered DePaul University's halls",
                "of Computer Science.",
                "",
                "Trading vinyl for variables,",
                "beats for bytes.",
                "",
                "Master's degree obtained.",
                "",
                "NEW CLASS: SOFTWARE ENGINEER"
            ]
        },
        {
            title: "LEVEL 3: THE CODE CRUSADES",
            period: "10+ YEARS",
            icon: "◆",
            story: [
                "Armed with Java, Python, and resolve,",
                "the hero joined CRITICAL MISSIONS:",
                "",
                "→ Defense systems protected",
                "→ Vulnerabilities vanquished",
                "→ Frameworks architected from zero",
                "→ Teams mentored",
                "",
                "Three kingdoms served successfully.",
                "",
                "ACHIEVEMENT: Senior Engineer"
            ]
        },
        {
            title: "LEVEL 4: THE STORY SCRIBE",
            period: "2023",
            icon: "▣",
            story: [
                "A secret side quest emerged...",
                "",
                "The hero became a self-taught",
                "artist and author.",
                "",
                "\"Little Bug, Big Bug!\" was born—",
                "a tale of fathers and sons.",
                "",
                "Written. Illustrated. Published.",
                "",
                "RARE ACHIEVEMENT UNLOCKED"
            ]
        }
    ];

    const nextLevel = () => {
        setCurrentLevel((prev) => (prev + 1) % levels.length);
    };

    const prevLevel = () => {
        setCurrentLevel((prev) => (prev - 1 + levels.length) % levels.length);
    };

    const level = levels[currentLevel];

    return (
        <section className="journey-page pixel-text">
            <div className="journey-container">
                <h2 className="page-title glitch-text">THE HERO'S JOURNEY</h2>
                <p className="page-subtitle text-small">
                    ▶ Four Legendary Quests ◀
                </p>

                <div className="level-carousel">
                    <button onClick={prevLevel} className="nav-arrow left">◀</button>
                    
                    <div className="level-card retro-container">
                        <div className="level-header">
                            <span className="level-icon">{level.icon}</span>
                            <h3 className="level-title">{level.title}</h3>
                            <span className="level-period pixel-badge">{level.period}</span>
                        </div>
                        
                        <div className="level-story text-small">
                            {level.story.map((line, index) => (
                                <p key={index} className={line === '' ? 'spacer' : ''}>
                                    {line}
                                </p>
                            ))}
                        </div>
                        
                        <div className="level-indicator">
                            {levels.map((_, index) => (
                                <span 
                                    key={index} 
                                    className={`dot ${index === currentLevel ? 'active' : ''}`}
                                    onClick={() => setCurrentLevel(index)}
                                />
                            ))}
                        </div>
                    </div>
                    
                    <button onClick={nextLevel} className="nav-arrow right">▶</button>
                </div>

                <div className="journey-quote retro-container text-small">
                    <p>
                        "From commanding crowds to commanding code,<br/>
                        from spinning records to spinning tales—<br/>
                        every quest has shaped the legend."
                    </p>
                </div>
            </div>
        </section>
    );
}
