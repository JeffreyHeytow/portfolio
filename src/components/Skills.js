import React from 'react';
import './Skills.css';

export default function Skills() {
    const skills = {
        "Frontend": ["React", "JavaScript (ES6+)", "HTML/CSS", "React Router", "Responsive Design"],
        "Backend": ["Java", "Node.js", "API Design", "Serverless Functions", "Redis"],
        "DevOps": ["Vercel", "Docker", "GitHub Actions", "CI/CD", "Linux"],
        "Security": ["Fortify", "Coverity", "Code Review", "Vulnerability Analysis", "Security Best Practices"],
        "QA & Testing": ["Test Automation", "Jest", "Integration Testing", "Framework Design", "Quality Processes"]
    };

    return (
        <section id="skills" className="skills">
            <div className="skills-container">
                <h2 className="section-title">Technical Skills</h2>
                <p className="section-subtitle">
                    A decade of experience building secure, scalable applications
                </p>
                
                <div className="skills-grid">
                    {Object.entries(skills).map(([category, items]) => (
                        <div key={category} className="skill-category">
                            <h3>{category}</h3>
                            <div className="skill-items">
                                {items.map((skill, index) => (
                                    <span key={index} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="experience-summary">
                    <div className="stat">
                        <div className="stat-number">10+</div>
                        <div className="stat-label">Years of Experience</div>
                    </div>
                    <div className="stat">
                        <div className="stat-number">2+</div>
                        <div className="stat-label">Years Security Reviews</div>
                    </div>
                    <div className="stat">
                        <div className="stat-number">Master's</div>
                        <div className="stat-label">Computer Science</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
