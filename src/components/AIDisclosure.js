import React from 'react';
import './AIDisclosure.css';

export default function AIDisclosure() {
    return (
        <section className="ai-page pixel-text">
            <div className="ai-container">
                <h2 className="page-title glitch-text">AI AS A SKILL</h2>
                <p className="page-subtitle text-small">
                    Engineering Judgment + AI Tools = Multiplied Impact
                </p>

                <div className="ai-content retro-container">
                    <h3>WHY THIS PAGE EXISTS</h3>
                    <p className="text-small">
                        I use AI tools like Claude and GitHub Copilot extensively.
                        <br/>Not as a replacement for 15+ years of experience—
                        <br/>as a force multiplier that amplifies engineering judgment.
                    </p>

                    <div className="ai-example">
                        <h4>WHAT AI HELPS WITH:</h4>
                        <ul className="text-small">
                            <li>⚡ Rapid prototyping and iteration</li>
                            <li>⚡ Exploring unfamiliar languages (TypeScript, etc.)</li>
                            <li>⚡ Generating test cases and documentation</li>
                            <li>⚡ Debugging complex multi-threaded issues</li>
                            <li>⚡ Accelerating repetitive tasks</li>
                        </ul>
                    </div>

                    <div className="ai-example">
                        <h4>WHAT REQUIRES HUMAN EXPERTISE:</h4>
                        <ul className="text-small">
                            <li>🎯 Verifying AI output accuracy</li>
                            <li>🎯 Architectural decisions</li>
                            <li>🎯 Security vulnerability assessment</li>
                            <li>🎯 Code quality standards</li>
                            <li>🎯 Knowing when to override AI suggestions</li>
                        </ul>
                    </div>

                    <h4>THE BOTTOM LINE:</h4>
                    <p className="text-small">
                        AI is a tool—like Git, IDEs, or Stack Overflow.
                        <br/>The value comes from knowing WHEN to use it,
                        <br/>HOW to validate its output,
                        <br/>and WHEN to trust your own judgment instead.
                        <br/><br/>
                        15+ years across multiple languages and platforms
                        <br/>means I can spot bad code, questionable architecture,
                        <br/>and false claims instantly.
                    </p>

                    <div className="ai-quote retro-container">
                        <p className="text-small">
                            "AI doesn't replace engineering judgment.
                            <br/>It amplifies it for those who know how to wield it."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
