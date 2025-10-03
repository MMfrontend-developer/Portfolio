import React from 'react';

const experiences = [
  {
    role: 'Frontend Developer',
    company: 'Gigs-tech solution.',
    period: ' Sept 2024 - July 2025',
    details: [
      'Developed and maintained web apps with Next.js, Tailwind CSS, React and JavaScript.',
      'Collaborated with designers to deliver pixel-perfect UIs.',
      'Optimized performance and accessibility across projects.'
    ]
  },
  {
    role: 'Frontend Developer / UI Designer',
    company: 'Miatos Solution',
    period: 'March 2023 - June 2024',
    details: [
      'Delivered Frontend solutions across various projects leveraging Next.js, Tailwind CSS, and React.',
      'Worked closely with developers to implement responsive designs.',
      'UI/UX implementation through user-centered design principles.'
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