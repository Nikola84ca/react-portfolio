import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import ProjectCards from '../components/ProjectCards';
import Footer from '../components/Footer';

const Projects = () => {
  return (
    <>
    <div>
    <Navbar/>
    <ProjectCards/>
    <Footer/>
    </div>
    </>
  )
}

export default Projects

// import React, { useState, useEffect } from 'react';
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'

// function Projects() {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     // Fetch data from your JSON file
//     fetch('../projects.json')
//       .then((response) => response.json())
//       .then((data) => setProjects(data))
//       .catch((error) => console.error('Error fetching projects:', error));
//   }, []); 

//   return (
//     <div>
//       <Navbar/>
//       <div className="project-cards">
//         {projects.map((project) => (
//           <div key={project.projectName} className="project-card">
//             <h2>{project.projectName}</h2>
//             <img src={project.imageUrl} alt={project.projectName} />
//             <p>{project.description}</p>
//             <p>
//               <strong>Github:</strong>{' '}
//               <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
//                 {project.githubUrl}
//               </a>
//             </p>
//             <p>
//               <strong>Website:</strong>{' '}
//               <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer">
//                 {project.websiteUrl}
//               </a>
//             </p>
//           </div>
//         ))}
//       </div>
//       <Footer/>
//     </div>
//   );
// }

// export default Projects;
