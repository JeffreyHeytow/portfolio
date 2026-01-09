import React, { useState, useEffect } from 'react';
import './Experience.css';

export default function Experience() {
    const [xp, setXp] = useState(22499);

    useEffect(() => {
        const interval = setInterval(() => {
            setXp(prev => prev + Math.floor(Math.random() * 10) + 1);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    const bosses = [
        {
            title: "BOSS: DEFENSE CONTRACTOR",
            role: "Senior Software Engineer",
            period: "2022 - PRESENT",
            location: "Mission Critical Command & Control Systems",
            achievements: [
                "⚔️ Defeated Security Vulnerabilities with Static Analysis",
                "⚔️ Led Java 8→21 Modernization Campaign",
                "⚔️ Debugged Multi-threaded Concurrency Boss Battles",
                "⚔️ Protected Nation's Defense Systems",
                "⚔️ Collaborated with Military Stakeholders"
            ],
            xp: "+9999 XP",
            color: "red"
        },
        {
            title: "BOSS: EDTECH STARTUP",
            role: "Senior SDET (First Quality Hire)",
            period: "2019 - 2022",
            location: "Built QA Kingdom from Scratch",
            achievements: [
                "🏗️ Architected Entire Test Framework Empire",
                "🏗️ Reduced CI/CD Cycles: 2hrs → 90min",
                "🏗️ Built Grafana Dashboards for Quality Metrics",
                "🏗️ Mentored Junior Developers",
                "🏗️ Achieved Zero-Defect Weekly Releases"
            ],
            xp: "+7500 XP",
            color: "blue"
        },
        {
            title: "BOSS: CONSULTING FIRM",
            role: "QA Automation Engineer",
            period: "2015 - 2019",
            location: "Enterprise Client Consulting",
            achievements: [
                "🛡️ Reduced Manual Testing by 40%",
                "🛡️ Built REST API Test Suites",
                "🛡️ JMeter Load Tests (10k+ Users)",
                "🛡️ Selenium & Appium Automation",
                "🛡️ Python Deployment Utilities"
            ],
            xp: "+5000 XP",
            color: "green"
        }
    ];

    return (
        <section className="experience-page pixel-text">
            <div className="experience-container">
                <h2 className="page-title glitch-text">BOSS BATTLES</h2>
                <p className="page-subtitle text-small">
                    ▶ Epic Quests Completed • Legendary Achievements Unlocked ◀
                </p>

                <div className="bosses-grid">
                    {bosses.map((boss, index) => (
                        <div key={index} className={`boss-card retro-container boss-${boss.color}`}>
                            <div className="boss-header">
                                <h3 className="boss-title">{boss.title}</h3>
                                <div className="boss-meta">
                                    <span className="pixel-badge">{boss.role}</span>
                                    <span className="boss-period text-small">{boss.period}</span>
                                </div>
                                <p className="boss-location text-small">{boss.location}</p>
                            </div>

                            <div className="boss-achievements">
                                <h4>⭐ ACHIEVEMENTS UNLOCKED:</h4>
                                <ul className="text-small">
                                    {boss.achievements.map((achievement, i) => (
                                        <li key={i}>{achievement}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="boss-xp">{boss.xp}</div>
                        </div>
                    ))}
                </div>

                <div className="total-xp retro-container">
                    <h3>TOTAL EXPERIENCE POINTS</h3>
                    <div className="xp-display">{xp.toLocaleString()} XP</div>
                    <p className="level-display text-small">LEVEL 99 LEGENDARY ENGINEER</p>
                    <p className="xp-note text-small">⚡ Continuously Leveling Up ⚡</p>
                </div>

                <div className="skills-unlocked retro-container">
                    <h3>🎯 SKILLS UNLOCKED</h3>
                    <div className="skill-tags">
                        <span className="text-small">Java (Expert)</span>
                        <span className="text-small">Test Automation</span>
                        <span className="text-small">CI/CD</span>
                        <span className="text-small">Security Analysis</span>
                        <span className="text-small">Docker</span>
                        <span className="text-small">Kubernetes</span>
                        <span className="text-small">Grafana</span>
                        <span className="text-small">Python</span>
                        <span className="text-small">JavaScript</span>
                        <span className="text-small">React</span>
                        <span className="text-small">Mentorship</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
