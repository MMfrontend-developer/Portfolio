import React from 'react';

const skills = [
  { name: 'HTML5', level: 90 },
  { name: 'CSS3', level: 80 },
  { name: 'JavaScript', level: 80 },
  { name: 'React', level: 85 },
  { name: 'UI/UX Design', level: 90 }
];

const Skills = () => (
  <section id="skills" className="section">
    <div className="section-container">
      <h2 className="section-title">Skills</h2>
      {skills.map(skill => (
        <div className="skill-item" key={skill.name}>
          <div className="skill-info">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;