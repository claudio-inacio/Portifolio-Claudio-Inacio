import { ProjectInfo } from "./styleProjectInfoComponent";


const ProjectInfoComponent = ({ title, description, technologies }) => {
  return (
    <ProjectInfo>
      <h3>{title}</h3>
      <p>{description}</p>

      <div className="tech-list">
        {technologies?.map((tech, index) => (
          <span key={`tech-tecnologi-${tech}-${index}`} className="tech">{tech}</span>
        ))}
      </div>
    </ProjectInfo>
  );
};

export default ProjectInfoComponent;
