import React from 'react';
import './Skills.css';

export default function Skills() {
    const skillCategories = [
        {
            title: "Test Framework & Automation",
            skills: ["Framework Architecture", "Selenium WebDriver", "REST Assured", "TestNG", "JUnit", "API Testing", "UI Testing", "Performance Testing"]
        },
        {
            title: "CI/CD & Infrastructure",
            skills: ["GitHub Actions", "Jenkins", "Docker", "Kubernetes", "Pipeline Optimization", "Build Systems", "Release Automation"]
        },
        {
            title: "Languages & Development",
            skills: ["Java (Expert)", "Python", "JavaScript", "TypeScript", "React", "Node.js", "REST APIs"]
        },
        {
            title: "Security & Testing",
            skills: ["Fortify", "Coverity", "Static Analysis", "Security Code Review", "Vulnerability Remediation"]
        },
        {
            title: "Observability & Tools",
            skills: ["Grafana", "Dashboards", "Metrics", "Alerting", "Logging", "Performance Analysis"]
        }
    ];

    return (
        <section className="skills-page pixel-text">
            <div className="skills-container">
                <h2 className="page-title glitch-text">SKILL TREE</h2>
                <p className="page-subtitle text-small">
                    Technical abilities unlocked through 10+ years of quests
                </p>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category retro-container">
                            <h3>{category.title}</h3>
                            <div className="skill-tags">
                                {category.skills.map((skill, i) => (
                                    <span key={i} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="education retro-container">
                    <h3>▲ EDUCATION</h3>
                    <div className="edu-item">
                        <span className="edu-degree">Master of Science</span>
                        <span className="text-small">Computer Science & Game Development</span>
                        <span className="text-small">DePaul University, Chicago IL</span>
                    </div>
                    <div className="edu-item">
                        <span className="edu-degree">Bachelor of Arts</span>
                        <span className="text-small">Broadcast Journalism</span>
                        <span className="text-small">Columbia College Chicago, Chicago IL</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
