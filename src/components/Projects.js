import React from 'react';
import './Projects.css';

export default function Projects() {
    return (
        <section className="projects-page pixel-text">
            <div className="projects-container">
                <h2 className="page-title glitch-text">EPIC QUESTS</h2>
                <p className="page-subtitle text-small">
                    Building legendary systems with modern tech
                </p>

                <div className="project-grid">
                    <div className="project-card retro-container">
                        <div className="project-header">
                            <h3>KubeLearn</h3>
                            <span className="status-badge">LIVE</span>
                        </div>
                        
                        <p className="project-description text-small">
                            AI-powered Kubernetes learning platform with interactive lessons,
                            real-time YAML validation, and drag-and-drop games.
                            Built with React, Google Gemini AI, and Redis rate limiting.
                        </p>
                        
                        <div className="tech-stack">
                            <span className="tech-badge">React</span>
                            <span className="tech-badge">Google Gemini AI</span>
                            <span className="tech-badge">Redis</span>
                            <span className="tech-badge">Vercel</span>
                            <span className="tech-badge">@dnd-kit</span>
                        </div>
                        
                        <div className="project-links">
                            <a 
                                href="https://kubelearn.jeffheytow.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="nes-button"
                            >
                                LIVE DEMO
                            </a>
                            <a 
                                href="https://github.com/JeffreyHeytow/kubelearn" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="nes-button"
                            >
                                VIEW CODE
                            </a>
                        </div>
                    </div>

                    <div className="project-card retro-container coming-soon">
                        <div className="project-header">
                            <h3>Java Adventure Game</h3>
                            <span className="status-badge soon">COMING SOON</span>
                        </div>
                        
                        <p className="project-description text-small">
                            Retro text-based adventure game built with Java.
                            Classic dungeon crawler with modern design patterns.
                            Stay tuned for the epic quest!
                        </p>
                        
                        <div className="tech-stack">
                            <span className="tech-badge">Java</span>
                            <span className="tech-badge">Game Design</span>
                            <span className="tech-badge">CLI</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
