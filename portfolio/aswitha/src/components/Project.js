import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1',
      link: 'https://github.com/yourusername/project1',
    },
    
    // Add more projects as needed
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;