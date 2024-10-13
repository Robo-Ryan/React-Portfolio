interface ProjectProps {
  title: string;
  image: string;
  deployedLink: string;
  githubLink: string;
}

function Project({ title, image, deployedLink, githubLink }: ProjectProps) {
    return (
      <div className="project-card">
        <img src={image} alt={`${title} screenshot`} />
        <h3>{title}</h3>
        <div className="project-links">
          <a href={deployedLink} target="_blank" rel="noopener noreferrer">
            Deployed App
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            GitHub Repo
          </a>
        </div>
      </div>
    );
  }
  
  export default Project;