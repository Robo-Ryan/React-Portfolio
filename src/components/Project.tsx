interface ProjectProps {
  title: string;
  image: string;
  githubLink: string;
}

function Project({ title, image, githubLink }: ProjectProps) {
    return (
      <div className="project-card">
        <img src={image} alt={`${title} screenshot`} />
        <h3>{title}</h3>
        <div className="project-links">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            GitHub Repo
          </a>
        </div>
      </div>
    );
  }
  
  export default Project;