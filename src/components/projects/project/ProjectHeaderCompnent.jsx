import { ProjectHeader } from "./styleProjectHeaderCompnent";

const ProjectHeaderComponent = ({ backgroundImage, mainImage }) => {
  return (
    <ProjectHeader background={backgroundImage}>
      <div className="overlay" />

      <img src={mainImage} alt="project main" className="main-image" />
    </ProjectHeader>
  );
};

export default ProjectHeaderComponent;
