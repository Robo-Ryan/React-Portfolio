import Project from './Project.tsx';

function Portfolio() {
  const projects = [
    {
      title: 'Project One',
      image: '/assets/project1.jpg',
      deployedLink: 'https://yourusername.github.io/project-one',
      githubLink: 'https://github.com/yourusername/project-one',
    },
    {
      title: 'Project Two',
      image: '/assets/project2.jpg',
      deployedLink: 'https://yourusername.github.io/project-two',
      githubLink: 'github.com/yourusername/project-two',
    },
    {
      title: 'Project Three',
      image: '/assets/project3.jpg',
      deployedLink: 'https://yourusername.github.io/project-three',
      githubLink: 'github.com/yourusername/project-three',
    },
    {
      title: 'Project Four',
      image: '/assets/project4.jpg',
      deployedLink: 'https://yourusername.github.io/project-four',
      githubLink: 'github.com/yourusername/project-four',
    },
    {
      title: 'Project Five',
      image: '/assets/project5.jpg',
      deployedLink: 'https://yourusername.github.io/project-five',
      githubLink: 'github.com/yourusername/project-five',
    }
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