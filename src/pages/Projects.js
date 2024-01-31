// import React from 'react';

// const Projects = () => {
//   return (
//     <>
//     <div>Projects</div>
//     </>
//   )
// }

// export default Projects

import React, { useState, useEffect } from 'react';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch data from your JSON file
    fetch('/path/to/your/projects.json')
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error fetching projects:', error));
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

  return (
    <div>
      <h1>Projects</h1>
      <div className="project-cards">
        {projects.map((project) => (
          <div key={project.projectName} className="project-card">
            <h2>{project.projectName}</h2>
            <img src={project.imageUrl} alt={project.projectName} />
            <p>{project.description}</p>
            <p>
              <strong>Github:</strong>{' '}
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                {project.githubUrl}
              </a>
            </p>
            <p>
              <strong>Website:</strong>{' '}
              <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer">
                {project.websiteUrl}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
