import React, { useState, useEffect } from 'react';
import './Journey.css';

export default function Journey() {
    const [jesterPosition, setJesterPosition] = useState(0);
    const [visibleLevels, setVisibleLevels] = useState([0]);
    const [facingLeft, setFacingLeft] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

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
        // Pause 3s at each level, 5s at end
        const pauseTime = isPaused ? (jesterPosition === levels.length ? 5000 : 3000) : 0;
        
        const timeout = setTimeout(() => {
            setIsPaused(false);
            
            setJesterPosition(prev => {
                // Moving forward
                if (!facingLeft && prev < levels.length) {
                    setVisibleLevels(Array.from({ length: prev + 1 }, (_, i) => i));
                    setIsPaused(true);
                    return prev + 1;
                }
                
                // At end, pause then turn around
                if (!facingLeft && prev === levels.length) {
                    setFacingLeft(true);
                    return prev;
                }
                
                // Moving backward
                if (facingLeft && prev > 0) {
                    setIsPaused(true);
                    return prev - 1;
                }
                
                // Back at start, turn around and restart
                if (facingLeft && prev === 0) {
                    setFacingLeft(false);
                    setVisibleLevels([0]);
                    setIsPaused(true);
                    return 0;
                }
                
                return prev;
            });
        }, pauseTime || 100);

        return () => clearTimeout(timeout);
    }, [jesterPosition, facingLeft, isPaused]);

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
                            className={`timeline-level ${visibleLevels.includes(index) ? 'visible' : ''}`}
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
                    
                    {/* Jester flips based on direction */}
                    <img 
                        src="/images/jester.png" 
                        alt="Hero" 
                        className={`jester-sprite ${facingLeft ? 'facing-left' : ''}`}
                        style={{
                            left: `calc(${jesterPosition * 25}% - 35px)`
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
