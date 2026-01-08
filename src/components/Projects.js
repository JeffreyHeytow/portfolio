import React from 'react';
import './Projects.css';

export default function Projects() {
    const projects = [
        {
            title: "KubeLearn",
            description: "An interactive Kubernetes learning platform with gamified drag-and-drop YAML building, AI-powered generation, and comprehensive tutorials.",
            tech: ["React", "Google Gemini AI", "Redis", "Vercel", "@dnd-kit"],
            features: [
                "Drag-and-drop YAML game with real-time validation",
                "AI-powered YAML generator with rate limiting",
                "Redis-based request tracking for security",
                "Deployed with CI/CD pipeline"
            ],
            liveUrl: "https://kubelearn.jeffheytow.com",
            githubUrl: "https://github.com/JeffreyHeytow/kubelearn",
            featured: true
        },
        {
            title: "Java Adventure Game",
            description: "Classic text-based adventure game built in Java, featuring a rich story, inventory management, and puzzle-solving mechanics.",
            tech: ["Java", "Swing", "Object-Oriented Design"],
            features: [
                "Multi-threaded game engine",
                "Save/load game state",
                "Custom UI with Java Swing",
                "Extensible plugin architecture"
            ],
            liveUrl: null,
            githubUrl: null,
            featured: false,
            comingSoon: true
        }
    ];

    return (
        <section id="projects" className="projects">
            <div className="projects-container">
                <h2 className="section-title">Featured Projects</h2>
                <p className="section-subtitle">
                    Building interactive experiences with modern web technologies
                </p>
                
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div 
                            key={index} 
                            className={`project-card ${project.featured ? 'featured' : ''} ${project.comingSoon ? 'coming-soon' : ''}`}
                        >
                            {project.featured && <div className="featured-badge">⭐ Featured</div>}
                            {project.comingSoon && <div className="coming-soon-badge">Coming Soon</div>}
                            
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            
                            <div className="project-features">
                                <strong>Key Features:</strong>
                                <ul>
                                    {project.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div className="project-tech">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="tech-badge">{tech}</span>
                                ))}
                            </div>
                            
                            <div className="project-links">
                                {project.liveUrl && (
                                    <a 
                                        href={project.liveUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="project-link"
                                    >
                                        🚀 View Live
                                    </a>
                                )}
                                {project.githubUrl && (
                                    <a 
                                        href={project.githubUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="project-link"
                                    >
                                        💻 View Code
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
