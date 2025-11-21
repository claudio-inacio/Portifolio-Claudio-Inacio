import ButtonSendToProject from "../../modern-icons/buttons/ButtonSendToProject";
import { ProjectActions } from "./styleProjectActionsComponent";
import { FaGithub } from "react-icons/fa";

import { MdOutlineVisibility } from "react-icons/md";



const ProjectActionsComponent = ({ demoUrl, codeUrl }) => {
  return (
    <ProjectActions>
      <ButtonSendToProject linkReference={demoUrl}  icon={<MdOutlineVisibility />} color="linear-gradient(135deg, #f2f2f2, #c9c9c9)" />
      <ButtonSendToProject linkReference={codeUrl} text='Ver Código' icon={<FaGithub />} color="linear-gradient(135deg, #f2f2f2, #c9c9c9)" />
    </ProjectActions>
  );
};

export default ProjectActionsComponent;
