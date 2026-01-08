import React from 'react';
import './Journey.css';

export default function Journey() {
    return (
        <section id="journey" className="journey">
            <div className="journey-container">
                <h2 className="section-title">My Journey</h2>
                <p className="section-subtitle">
                    From turntables to terminals - a story of reinvention
                </p>
                
                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-icon music">🎵</div>
                        <div className="timeline-content">
                            <h3>Music Industry</h3>
                            <span className="timeline-period">20 years</span>
                            <p>
                                In the pulsating heart of Chicago's nightlife, I orchestrated symphonies of beats 
                                that made the city sway. As a professional DJ, audio engineer, producer, and salesman, 
                                I traveled the country's highways with a nomad's spirit, chasing the rhythm of adventure 
                                from my tour bus.
                            </p>
                        </div>
                    </div>
                    
                    <div className="timeline-item">
                        <div className="timeline-icon education">🎓</div>
                        <div className="timeline-content">
                            <h3>The Pivot</h3>
                            <span className="timeline-period">Career Transition</span>
                            <p>
                                Life's turntables spun a different tune. I transitioned from DJ to scholar, 
                                earning a Master's in Computer Science from DePaul University. This wasn't just 
                                a career change—it was a reinvention, bringing the same creativity and passion 
                                from music into the world of technology.
                            </p>
                        </div>
                    </div>
                    
                    <div className="timeline-item">
                        <div className="timeline-icon tech">💻</div>
                        <div className="timeline-content">
                            <h3>Software Engineering</h3>
                            <span className="timeline-period">10+ years</span>
                            <p>
                                Senior Software Engineer at Solipsys (RTX subsidiary), working on mission-critical 
                                command and control software for the U.S. Armed Forces. Specialized in security code 
                                reviews, Java development, QA automation, and building robust systems that scale.
                            </p>
                        </div>
                    </div>
                    
                    <div className="timeline-item">
                        <div className="timeline-icon author">📚</div>
                        <div className="timeline-content">
                            <h3>Children's Author & Illustrator</h3>
                            <span className="timeline-period">2023</span>
                            <p>
                                Published "Little Bug, Big Bug!" - a self-illustrated children's book 
                                that captures the magic of family bonds and creative storytelling. As a self-taught 
                                artist and first-time author, I combined my technical precision with creative expression.
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="philosophy">
                    <blockquote>
                        "Whether I'm writing code, crafting stories, or mixing beats, I approach every project 
                        with the same philosophy: attention to detail, creative problem-solving, and a commitment 
                        to excellence."
                    </blockquote>
                </div>
            </div>
        </section>
    );
}
