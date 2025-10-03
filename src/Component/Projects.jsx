import React from 'react';

const projects = [
  {
    title: 'OxBank – Modern Banking App',
    description:
      'A secure and intuitive online banking platform for managing accounts, transactions, and budgets with real-time analytics.',
    tech: ['React', 'Javascript', 'CSS3'],
    link: 'https://oxbank-oll1.vercel.app/',
    image: '/Oxbank.png',
  },
  {
    title: 'E-Commerce Store',
    description:
      'A full-featured and responsive e-commerce website with product listings, shopping cart, user authentication, and payment integration.',
    tech: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    link: 'https://shapora-store.vercel.app/',
    image: '/ecommerce.png',
  },
  {
    title: 'Weather Sphere',
    description:
      'A sleek weather dashboard providing real-time weather updates, forecasts, and animated weather visuals for any location of your choice.',
    tech: ['JavaScript', 'API Integration', 'CSS3'],
    link: 'http://weather-sphere-gilt.vercel.app',
    image: '/weather.png',
  },
  {
    title: 'Smart Calculator',
    description:
      'A responsive calculator app supporting basic, quadratic, scientific, and advanced operations, built for speed, agility and usability.',
    tech: ['HTML5', 'CSS3', 'Javascript'],
    link: 'http://my-calculator-theta-murex.vercel.app',
    image: '/calculator.png',
  },
];

const Projects = () => (
  <section id="projects" className="section">
    <div className="section-container">
      <h2 className="section-title">Projects</h2>
      {/* ✅ Responsive grid: 1 col mobile, 2 cols tablet, 3 cols desktop */}
      <div className="projects-grid grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => {
          const isLast = idx === projects.length - 1;
          return (
            <div
              key={idx}
              className={`project-card ${
                isLast && projects.length % 3 !== 0
                  ? 'lg:col-span-3 flex justify-center'
                  : ''
              }`}
            >
              <div className="project-info max-w-md w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  style={{
                    width: '100%',
                    maxHeight: 150,
                    objectFit: 'cover',
                    borderRadius: '10px',
                    marginBottom: '1rem',
                  }}
                />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="technologies">
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  View Project
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Projects;
