import ProjectActionsComponent from "./ProjectActionsComponent";
import ProjectHeaderComponent from "./ProjectHeaderCompnent";
import ProjectInfoComponent from "./ProjectInfoComponent";
import { Project } from "./styleProjectComponent";

const ProjectComponent = ({ InstagramProjectImage, BackgroundProjectImage }) => {
  return (
    <Project>
      <ProjectHeaderComponent
        mainImage={InstagramProjectImage}
        backgroundImage={BackgroundProjectImage}
      />
      <ProjectInfoComponent title='INSTAGRAM' technologies={['instagram']} description='projeto insta' />
      <ProjectActionsComponent codeUrl={''} demoUrl={''} />
    </Project>
  );
};

export default ProjectComponent;
