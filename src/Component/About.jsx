import React, { useRef, useEffect, useState } from 'react';

const facts = [
  { emoji: "🌟", text: "React, JavaScript, and modern CSS" },
  { emoji: "🚀", text: "Built a finance dashboard for 500+ users" },
  { emoji: "🎨", text: "Designed a portfolio for a local artist collective" },
  { emoji: "🤝", text: "Open-source contributor & mentor" }
];

const About = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`section about-section about-fade-in${visible ? ' visible' : ''}`}
    >
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text about-slide-in">
            <p className="about-intro">
              <span className="about-wave">👋</span> Hi, I’m <span className="about-highlight">Muhammad!</span>
              <br />
              I’m passionate about building <span className="about-highlight">beautiful</span>, <span className="about-highlight">performant</span>, and <span className="about-highlight">accessible</span> web apps.
              <br />
              My journey began with curiosity and a love for design, and now I blend <span className="about-highlight">creativity</span> with <span className="about-highlight">code</span> every day.
            </p>
            <ul className="about-facts">
              {facts.map((fact, i) => (
                <li className="about-fact" style={{ animationDelay: `${0.3 + i * 0.2}s` }} key={i}>
                  <span className="about-emoji">{fact.emoji}</span> {fact.text}
                </li>
              ))}
            </ul>
            <p className="about-outro" style={{ animationDelay: "1.2s" }}>
              When I’m not coding, I enjoy <span className="about-highlight">Sport</span>, exploring <span className="about-highlight">new tech</span>, and sharing knowledge with others.
            </p>
          </div>
          <div className="about-image">
            <img src="/professional profile picture.jpg" alt="Muhammad Muhyideen" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;