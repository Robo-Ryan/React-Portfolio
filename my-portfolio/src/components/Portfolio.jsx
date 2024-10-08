import Project from './Project';

function Portfolio() {
  const projects = [
    {
      title: 'Project One',
      image: '/assets/project1.jpg',
      deployedLink: 'https://yourusername.github.io/project-one',
      githubLink: 'https://github.com/yourusername/project-one',
    },
    // ... Add at least five more projects
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
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;