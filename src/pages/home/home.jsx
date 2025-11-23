import {
  Apresentacao,
  Carrossel,
  Container,
  ContainerProjetos,
  ContainerProjetosSem,
  ContainerSobreMim,
  DivButtons,
  DivInformations,
  DivProjeto,
  Header,
  Informations,
  Projeto,
  SobreMim,
  SemCarrossel,
  SocialPages,
  Contato,
} from "./styleHome";
import {
  BsLinkedin,
  BsGithub,
  BsInstagram,
  BsArrowLeftSquareFill,
  BsArrowRightSquareFill,
} from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { useRef, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import CardProjeto from "../../components/CardProjeto/card";
import HeaderComponent from "../../components/header/HeaderComponent";
import HeadLineComponent from "../../components/headline/HeadLineComponent";
import TechnologiesComponent from "../../components/technologies/TechnologiesComponent";
import { ProjetosREACT } from "../../utils";
import ProjectsComponent from "../../components/projects/ProjectsComponent";

const Home = () => {
  const carrosselHTML = useRef(null);
  const carrosselJS = useRef(null);
  const carrosselREACT = useRef(null);

  const [habilits, setHabilits] = useState(true);
  const [expirience, setExpirience] = useState(false);
  const [formation, setFormation] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const tradeHabilit = (number) => {
    if (number == 1 && habilits == false) {
      setHabilits(!habilits);
      setExpirience(false);
      setFormation(false);
    } else if (number == 2 && expirience == false) {
      setExpirience(!expirience);
      setHabilits(false);
      setFormation(false);
    } else if (number == 3 && formation == false) {
      setFormation(!formation);
      setHabilits(false);
      setExpirience(false);
    }
  };

  const slideLeftHTML = (e) => {
    setTimeout(() => {
      e.preventDefault();
      carrosselHTML.current.scrollLeft -= carrosselHTML.current.offsetWidth;
      console.log(carrosselHTML.current.offsetWidth);
    }, 300);
  };

  const slideRightHTML = (e) => {
    setTimeout(() => {
      e.preventDefault();
      carrosselHTML.current.scrollLeft += carrosselHTML.current.offsetWidth;
      console.log(carrosselHTML.current.offsetWidth);
    }, 300);
  };

  const slideLeftJS = (e) => {
    setTimeout(() => {
      e.preventDefault();
      carrosselJS.current.scrollLeft -= carrosselJS.current.offsetWidth;
      console.log(carrosselJS.current.offsetWidth);
    }, 300);
  };
  const slideRightJS = (e) => {
    setTimeout(() => {
      e.preventDefault();
      carrosselJS.current.scrollLeft += carrosselJS.current.offsetWidth;
      console.log(carrosselJS.current.offsetWidth);
    }, 300);
  };

  const slideLeftREACT = (e) => {
    setTimeout(() => {
      e.preventDefault();
      carrosselREACT.current.scrollLeft -= carrosselREACT.current.offsetWidth;
      console.log(carrosselREACT.current.offsetWidth);
    }, 300);
  };
  const slideRightREACT = (e) => {
    setTimeout(() => {
      e.preventDefault();
      carrosselREACT.current.scrollLeft += carrosselREACT.current.offsetWidth;
      console.log(carrosselREACT.current.offsetWidth);
    }, 300);
  };

  const showClickMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Container>
      <HeaderComponent showClickMenu={showClickMenu} showMenu={showMenu} />
      <HeadLineComponent />
      <TechnologiesComponent />
      <ProjectsComponent />
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
