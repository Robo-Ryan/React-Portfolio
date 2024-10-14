import Project from './Project.tsx';

function Portfolio() {
  const projects = [
    {
      title: 'Employee Tracker',
      image: './employee_tracker_logo.jpg',
      githubLink: 'https://github.com/Robo-Ryan/Employee-Tracker',
    },
    {
      title: 'Vehicle Builder',
      image: './vehicle_builder_logo.jpg',
      githubLink: 'https://github.com/Robo-Ryan/ryans-vehicle-builder',
    },
    {
      title: 'ReadMe Generator',
      image: './readme.png',
      githubLink: 'https://github.com/Robo-Ryan/read-me-generator',
    },
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;