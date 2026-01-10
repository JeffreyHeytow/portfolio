import React from 'react';
import './AIDisclosure.css';

export default function AIDisclosure() {
    return (
        <section className="ai-page pixel-text">
            <div className="ai-container">
                <h2 className="page-title glitch-text">STRATEGIC AI ADOPTION</h2>
                <p className="page-subtitle text-small">
                    15 Years of Engineering Excellence + Active AI Learning
                </p>

                <div className="ai-content retro-container">
                    <h3>WHAT I BRING TO YOUR TEAM</h3>
                    <p className="text-small">
                        You're hiring a senior engineer with a proven 15-year track record
                        <br/>who's actively investing in AI skills to stay ahead of the curve.
                        <br/>I'm not an AI expert—I'm an engineering expert learning AI strategically.
                    </p>

                    <div className="ai-grid">
                        <div className="ai-box retro-container">
                            <h4>◆ CORE STRENGTH</h4>
                            <ul className="text-small">
                                <li>15+ years production systems</li>
                                <li>Security code review expertise</li>
                                <li>Built test frameworks from zero</li>
                                <li>Led Java 8→21 migrations</li>
                                <li>Mentored junior engineers</li>
                            </ul>
                        </div>

                        <div className="ai-box retro-container">
                            <h4>▲ ACTIVE LEARNING</h4>
                            <ul className="text-small">
                                <li>Enrolled in AI/ML courses</li>
                                <li>Hands-on with Claude & Copilot</li>
                                <li>Built KubeLearn with AI assist</li>
                                <li>Learning prompt engineering</li>
                                <li>Studying AI best practices</li>
                            </ul>
                        </div>

                        <div className="ai-box retro-container">
                            <h4>⚔ THE ADVANTAGE</h4>
                            <ul className="text-small">
                                <li>Won't make rookie AI mistakes</li>
                                <li>Knows when to verify outputs</li>
                                <li>Maintains security standards</li>
                                <li>Eager to grow with your team</li>
                                <li>Fast learner with foundation</li>
                            </ul>
                        </div>
                    </div>

                    <h3>WHY THIS COMBINATION WINS</h3>
                    <p className="text-small">
                        Many candidates are either experienced but resistant to AI,
                        <br/>or AI-savvy but lacking production battle scars.
                        <br/>I offer both: deep expertise plus the curiosity and drive
                        <br/>to integrate modern tools responsibly into proven workflows.
                    </p>

                    <div className="ai-quote retro-container">
                        <p className="text-small">
                            "Hire me for what I've already proven I can do.
                            <br/>Invest in me for where I'm actively headed."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
