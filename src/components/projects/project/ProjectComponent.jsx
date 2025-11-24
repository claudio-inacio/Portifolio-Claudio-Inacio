import ProjectActionsComponent from "./ProjectActionsComponent";
import ProjectHeaderComponent from "./ProjectHeaderCompnent";
import ProjectInfoComponent from "./ProjectInfoComponent";
import { Project } from "./styleProjectComponent";

const ProjectComponent = ({ projectData, backgroundImage }) => {
  return (
    <Project>
      <ProjectHeaderComponent
        mainImage={projectData?.image}
        backgroundImage={backgroundImage}
      />
      <ProjectInfoComponent data={projectData} title={projectData.title} technologies={projectData.technologies} description={projectData.description} />
      <ProjectActionsComponent codeUrl={projectData.codeUrl} demoUrl={projectData.demoUrl} />
    </Project>
  );
};

export default ProjectComponent;
