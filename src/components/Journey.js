import React, { useState, useEffect } from 'react';
import './Journey.css';

export default function Journey() {
    const [position, setPosition] = useState(0);
    const [facingLeft, setFacingLeft] = useState(false);
    const [justMoved, setJustMoved] = useState(false);
    
    const levels = [
        {
            title: "LEVEL 1",
            subtitle: "THE SOUND WARRIOR",
            period: "20 YEARS",
            icon: "♫",
            description: "Mastered Chicago's underground music scene as DJ, MC, and voiceover artist"
        },
        {
            title: "LEVEL 2",
            subtitle: "THE TRANSFORMATION",
            period: "CAREER PIVOT",
            icon: "▲",
            description: "Earned Master's in Computer Science from DePaul University"
        },
        {
            title: "LEVEL 3",
            subtitle: "CODE CRUSADES",
            period: "10+ YEARS",
            icon: "◆",
            description: "Built defense systems, frameworks, and led engineering teams"
        },
        {
            title: "LEVEL 4",
            subtitle: "STORY SCRIBE",
            period: "2023",
            icon: "▣",
            description: "Published \"Little Bug, Big Bug!\" as self-taught author & illustrator"
        }
    ];

    useEffect(() => {
        const delay = justMoved ? 500 : 2000; // 0.5s pause after moving, 2s to move
        
        const timeout = setTimeout(() => {
            if (justMoved) {
                // Just paused, now ready to move again
                setJustMoved(false);
            } else {
                // Move to next position
                setPosition(prev => {
                    // Moving forward
                    if (!facingLeft) {
                        if (prev < 4) {
                            setJustMoved(true);
                            return prev + 1;
                        }
                        // At end, turn around
                        setFacingLeft(true);
                        setJustMoved(true);
                        return 4;
                    }
                    
                    // Moving backward
                    if (prev > 0) {
                        setJustMoved(true);
                        return prev - 1;
                    }
                    // At start, turn around
                    setFacingLeft(false);
                    setJustMoved(true);
                    return 0;
                });
            }
        }, delay);

        return () => clearTimeout(timeout);
    }, [position, facingLeft, justMoved]);

    return (
        <section className="journey-page pixel-text">
            <div className="journey-container">
                <h2 className="page-title glitch-text">THE HERO'S JOURNEY</h2>
                <p className="page-subtitle text-small">
                    ▶ Watch the Legend Unfold ◀
                </p>

                <div className="timeline-path">
                    {levels.map((level, index) => (
                        <div 
                            key={index}
                            className="timeline-level visible"
                        >
                            <div className="level-marker">
                                <span className="level-icon">{level.icon}</span>
                            </div>
                            <div className="level-content retro-container">
                                <h3>{level.title}</h3>
                                <h4>{level.subtitle}</h4>
                                <span className="level-period pixel-badge">{level.period}</span>
                                <p className="text-small">{level.description}</p>
                            </div>
                        </div>
                    ))}
                    
                    {/* Jester walks and pauses between cards */}
                    <img 
                        src="/images/jester.png" 
                        alt="Hero" 
                        className={`jester-sprite ${facingLeft ? 'facing-left' : ''}`}
                        style={{
                            left: `calc(${position * 25}% - 35px)`
                        }}
                    />
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
