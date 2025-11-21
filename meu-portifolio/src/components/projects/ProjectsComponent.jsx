import MeImageDontBackgorund from "./../../image/eu-portifolio-removebg-preview.png";
import ProjectHeaderComponent from "./project/ProjectHeaderCompnent";
import { ProjectsContainer } from "./styleProjectsComponent";
import BackgroundProjectImage from "../../image/background-image.jpeg";
import InstagramProjectImage from "../../image/instagram-projetct-portifolio.png";
import ProjectComponent from "./project/ProjectComponent";
import { MdOutlineVisibility } from "react-icons/md";


const ProjectsComponent = ({ showMenu, showClickMenu }) => {
  return (
    <ProjectsContainer>
      <ProjectComponent BackgroundProjectImage={BackgroundProjectImage} InstagramProjectImage={InstagramProjectImage}/>      
    </ProjectsContainer>
  );
};

export default ProjectsComponent;
