import MeImageDontBackgorund from "./../../image/eu-portifolio-removebg-preview.png";
import ProjectHeaderComponent from "./project/ProjectHeaderCompnent";
import { ProjectsContainer } from "./styleProjectsComponent";
import BackgroundProjectImage from "../../image/background-image.jpeg";
import InstagramProjectImage from "../../image/instagram-projetct-portifolio.png";
import EcommerceProjectImage from "../../image/eccomerce-prject-portifolio.png";
import ProjectComponent from "./project/ProjectComponent";
import { MdOutlineVisibility } from "react-icons/md";

export const arrayProjectsInfo = [
  {
    title: "E-COMMERCE",
    technologies: ["HTML", "CSS"],
    description:
      "Case de estudo moldando o layout de um ecommerce visando melhorar as tecnicas de HTML e CSS, com botões e inputs ainda não acionaveis.",
    demoUrl: "https://ecommerce-html-css-peach.vercel.app/#",
    codeUrl: "https://github.com/claudio-inacio/ecommerce-html-css",
    image: EcommerceProjectImage,
  },

  {
    title: "INSTAGRAM",
    technologies: ["HTML", "CSS"],
    description:
      "Case de estudo recriando a página inicial do Instagram usando apenas HTML e CSS, com foco em boas práticas de semântica e estilização.",
    demoUrl: "https://rede-social-html-css.vercel.app/",
    codeUrl: "https://github.com/claudio-inacio/rede-social-html-css",
    image: InstagramProjectImage,
  },
  {
    title: "CURRICULO",
    technologies: ["HTML", "CSS"],
    description:
      "Case de estudo simples. Meu primeiro projeto desenvolvido, buscando conhecer as TAGS semanticas e alinhamentos em CSS.",
    demoUrl: "https://curriculum-html-css.vercel.app/",
    codeUrl: "https://github.com/claudio-inacio/curriculum-html-css",
    image: InstagramProjectImage,
  },
];
const ProjectsComponent = ({ showMenu, showClickMenu }) => {
  return (
    <ProjectsContainer>
      {arrayProjectsInfo.map((project) => {
        return <ProjectComponent projectData={project} backgroundImage={BackgroundProjectImage} />;
      })}
    </ProjectsContainer>
  );
};

export default ProjectsComponent;
