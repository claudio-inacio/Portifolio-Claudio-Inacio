
import { ProjectsContainer, TitleHeader } from "./styleProjectsComponent";
import BackgroundProjectImage from "../../image/background-image.jpeg";
import BackgroundProjectImage2 from "../../image/background-image-2.jpeg";
import BackgroundProjectImage3 from "../../image/background-image-3.png";
import BurguerHeroProjectImage from "../../image/hamburgueria-project.png";
import InstagramProjectImage from "../../image/instagram-projetct-portifolio.png";
import ListaDeFrutasProjectImage from "../../image/lista-de-frutas-projeto.png";
import GabrielDoCellProjectImage from "../../image/gabriel-do-cel-project.png";
import PortifolioProjectImage from "../../image/portifolio-project.png";
import CurriculoProjectImage from "../../image/curriculo-projeto.png";
import PedraPapelTesouraProjectImage from "../../image/project-pedra-papel-tesoura.png";
import EcommerceProjectImage from "../../image/ecommerce-project.png";
import JogoGeniusPrjectImage from "../../image/jogo-genius-projeto.png";
import ProjectComponent from "./project/ProjectComponent";
import ProjectsGrid from "./ProjectGrid";
import IconInfo from "../modern-icons/info/IconInfo";

export const arrayProjectsInfo = [
  {
    title: "MEU PORTIFÓLIO",
    technologies: ["HTML", "CSS", 'REACTJS', 'STYLED-COMPONENTS'],
    description:
      "Esse portifolio também foi desenvolvido com React juntamente com Styled-Components... Caso tenha interesse o código esta disponivel :)",
    demoUrl: null,
    codeUrl: "https://github.com/claudio-inacio/Portifolio-Claudio-Inacio",
    image: PortifolioProjectImage,

  },
  {
    title: "GABRIEL DO CELL",
    technologies: ["HTML", "CSS", 'REACTJS', 'SASS'],
    description:
      "Landing Page desenvolvida como catálogo para facilitar a exibição dos produtos disponíveis para os clientes da Gabriel do Cell. (As imagens dos produtos são ilustrativas, utilizadas apenas para composição do portfólio.)",
    demoUrl: "https://gabirel-do-cell.vercel.app/#my_products",
    codeUrl: "https://github.com/claudio-inacio/gabirel-do-cell/tree/master",
    image: GabrielDoCellProjectImage,
  },
  {
    title: "BURGUER HERO",
    technologies: ["HTML", "CSS", 'REACTJS'],
    description:
      "Case de estudo, colocando em pratica conceitos importantes de ReactJs, como componentização, estados, redux, manipulação de listas, entre outros... O projeto simula um pedido de delivery até o pagamento.",
    demoUrl: "https://hamburgueria-react-gamma.vercel.app/",
    codeUrl: "https://github.com/claudio-inacio/hamburgueria-react",
    image: BurguerHeroProjectImage,

  },
  {
    title: "LISTA DE PRODUTOS",
    technologies: ["HTML", "CSS", "JAVASCRIPT"],
    description:
      "Case de estudo utilizando alguns conceitos mais aprofundados de JavaScript, aqui o usuário pode inserir e remover produtos do carrinho.",
    demoUrl: "https://lista-de-produtos-six.vercel.app/",
    codeUrl: "https://github.com/claudio-inacio/lista-de-produtos",
    image: ListaDeFrutasProjectImage,

  },
  {
    title: "PEDRA, PAPEL, TESOURA.",
    technologies: ["HTML", "CSS", "JAVASCRIPT"],
    description:
      "Um jogo desenvolvido com o objetivo de colocar em prática conceitos básicos de JavaScript, trabalhando lógica, eventos e interações visuais. O projeto simula as escolhas de pedra, papel e tesoura, determinando o vencedor conforme as regras clássicas.",
    demoUrl: "https://jogo-pedra-papel-tesoura-sable.vercel.app/",
    codeUrl: "https://github.com/claudio-inacio/jogo-pedra-papel-tesoura",
    image: PedraPapelTesouraProjectImage,

  },
  {
    title: "JOGO GÊNIUS",
    technologies: ["HTML", "CSS", 'JAVASCRIPT'],
    description:
      "Um jogo desenvolvido com o objetivo de por em pratica conceitos basicos de JavaScript. trabalhando lógica, eventos e interações visuais. O projeto simula as sequências de cores clássicas do jogo.",
    demoUrl: "https://jogo-da-memoria-mu-olive.vercel.app/",
    codeUrl: "https://github.com/claudio-inacio/jogo-da-memoria",
    image: JogoGeniusPrjectImage,

  },
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
    image: CurriculoProjectImage,

  },
];
const ProjectsComponent = ({ showMenu, showClickMenu }) => {
  return (
    <ProjectsContainer>
      <TitleHeader >
       <h2>Projetos</h2>
        <IconInfo  message='Algumas das tecnologias mencionadas acima não estão presentes nos meus projetos pessoais, porém fazem parte do meu dia a dia no trabalho.'/>
      </TitleHeader>
      <ProjectsGrid>
        {arrayProjectsInfo.map((project) => {
          return (
            <ProjectComponent
              key={project.id}
              projectData={project}
              backgroundImage={BackgroundProjectImage3}
            />
          );
        })}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default ProjectsComponent;

