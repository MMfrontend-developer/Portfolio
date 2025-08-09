import React from 'react';

const experiences = [
  {
    role: 'Frontend Developer',
    company: 'Gigs-tech solution.',
    period: '2024 - Present',
    details: [
      'Developed and maintained web apps with React and JavaScript.',
      'Collaborated with designers to deliver pixel-perfect UIs.',
      'Optimized performance and accessibility across projects.'
    ]
  },
  {
    role: 'UI Designer',
    company: 'Tech Solutions Inc ',
    period: '2024 - 2025',
    details: [
      'Designed user interfaces for web and mobile apps.',
      'Worked closely with developers to implement responsive designs.',
      'Conducted user research and usability testing.'
    ]
  }
];

const Experience = () => (
  <section id="experience" className="section">
    <div className="section-container">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {experiences.map((exp, idx) => (
          <div className="timeline-item" key={idx}>
            <div className="timeline-content">
              <h3>{exp.role} <span className="period">{exp.period}</span></h3>
              <h4>{exp.company}</h4>
              <ul>
                {exp.details.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;