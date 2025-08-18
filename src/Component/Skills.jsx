import React from 'react';

const skills = [
  { name: 'HTML5', level: 90 },
  { name: 'CSS3', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'React', level: 95 },
  { name: 'UI/UX Design', level: 90 },
  { name: 'Next js', level: 90 },
  { name: 'Tailwind', level: 90 },
];

const Skills = () => (
  <section id="skills" className="skills-section">
    <div className="section-container">
      <h2 className="section-title">Skills</h2>
      {skills.map((skill) => (
        <div className="skill-item" key={skill.name}>
          {/* Rounded badge for skill name + percent */}
          <div className="skill-info">
  <span className="skill-name">{skill.name}</span>
  <span className="skill-percent">{skill.level}%</span>
</div>


          {/* Progress bar */}
          <div className="skill-bar">
            <div
              className="skill-progress"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
