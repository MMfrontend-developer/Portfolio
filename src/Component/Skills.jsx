import React, { useEffect, useRef, useState } from 'react';

const skills = [
  { name: 'HTML5', level: 90 },
  { name: 'CSS3', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'React', level: 95 },
  { name: 'UI/UX Design', level: 90 },
  { name: 'Next js', level: 90 },
  { name: 'TypeScript', level: 80 },
  { name: 'Tailwind', level: 90 },
];

const SkillBar = ({ percent, animate }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (animate) {
      setWidth(percent);
    } else {
      setWidth(0);
    }
  }, [animate, percent]);

  return (
    <div className="skill-bar">
      <div
        className="skill-progress"
        style={{
          width: `${width}%`,
          transition: 'width 5s cubic-bezier(.4,0,.2,1)'
        }}
      ></div>
    </div>
  );
};

const Skills = () => {
  const sectionRef = useRef();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.4 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-title">Skills</h2>
        {skills.map((skill) => (
          <div className="skill-item" key={skill.name}>
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percent">{skill.level}%</span>
            </div>
            <SkillBar percent={skill.level} animate={animate} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;