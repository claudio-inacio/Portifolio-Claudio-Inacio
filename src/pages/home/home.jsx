import {
  Container,
} from "./styleHome";


import { useRef, useState } from "react";

import HeaderComponent from "../../components/header/HeaderComponent";
import HeadLineComponent from "../../components/headline/HeadLineComponent";
import TechnologiesComponent from "../../components/technologies/TechnologiesComponent";

import ProjectsComponent from "../../components/projects/ProjectsComponent";
import AboutMe from "../../components/aboutme/AboutMeComponent";

const Home = () => {
  const carrosselHTML = useRef(null);
  const carrosselJS = useRef(null);
  const carrosselREACT = useRef(null);

  const [habilits, setHabilits] = useState(true);
  const [expirience, setExpirience] = useState(false);
  const [formation, setFormation] = useState(false);
  const [showMenu, setShowMenu] = useState(false);


  const showClickMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Container>
      <HeaderComponent showClickMenu={showClickMenu} showMenu={showMenu} />
      <HeadLineComponent />
      <TechnologiesComponent />
      <ProjectsComponent />
      <AboutMe />
    </Container>
  );
};

export default Home;

// <ContainerProjetos>
//   <h2 className="projetosTitle">Meus projetos</h2>
//   <h2>ReactJS</h2>
//   <DivProjeto>
//     <BsArrowLeftSquareFill
//       size={30}
//       color="white"
//       cursor="pointer"
//       onClick={slideLeftREACT}
//     />
//     <Carrossel ref={carrosselREACT}>
//       {ProjetosREACT.map((projeto) => {
//         return <CardProjeto projeto={projeto} />;
//       })}
//     </Carrossel>
//     <BsArrowRightSquareFill
//       size={30}
//       color="white"
//       cursor="pointer"
//       onClick={slideRightREACT}
//     />
//   </DivProjeto>

//   <h2>HTML/CSS/JavaScript</h2>

//   <DivProjeto>
//     <BsArrowLeftSquareFill
//       size={30}
//       color="white"
//       cursor="pointer"
//       onClick={slideLeftJS}
//     />
//     <Carrossel ref={carrosselJS}>
//       {ProjetosJS.map((projeto) => {
//         return <CardProjeto projeto={projeto} />;
//       })}
//     </Carrossel>
//     <BsArrowRightSquareFill
//       size={30}
//       color="white"
//       cursor="pointer"
//       onClick={slideRightJS}
//     />
//   </DivProjeto>
//   <h2>HTML/CSS</h2>
//   <DivProjeto>
//     <BsArrowLeftSquareFill
//       size={30}
//       color="white"
//       cursor="pointer"
//       onClick={slideLeftHTML}
//     />
//     <Carrossel ref={carrosselHTML}>
//       {ProjetosCSS.map((projeto) => {
//         return <CardProjeto projeto={projeto} />;
//       })}
//     </Carrossel>
//     <BsArrowRightSquareFill
//       size={30}
//       color="white"
//       cursor="pointer"
//       onClick={slideRightHTML}
//     />
//   </DivProjeto>
// </ContainerProjetos>

// <ContainerProjetosSem id="projetos">
//   <h2 className="projetosTitle">Meus projetos</h2>
//   <h2 className="prjectLenguage">ReactJS</h2>
//   <DivProjeto>
//     <SemCarrossel>
//       {ProjetosREACT.map((projeto) => {
//         return <CardProjeto projeto={projeto} />;
//       })}
//     </SemCarrossel>
//   </DivProjeto>

//   <h2 className="prjectLenguage">HTML/CSS/JavaScript</h2>
//   <DivProjeto>
//     <SemCarrossel>
//       {ProjetosJS.map((projeto) => {
//         return <CardProjeto projeto={projeto} />;
//       })}
//     </SemCarrossel>
//   </DivProjeto>
//   <h2 className="prjectLenguage">HTML/CSS</h2>
//   <DivProjeto>
//     <SemCarrossel>
//       {ProjetosCSS.map((projeto) => {
//         return <CardProjeto projeto={projeto} />;
//       })}
//     </SemCarrossel>
//   </DivProjeto>
// </ContainerProjetosSem>
// <Contato id="contato">
//   <span>E-mail para contato: inacio.unipar@gmail.com</span>
// </Contato>
