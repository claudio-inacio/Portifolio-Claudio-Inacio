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
import eu from "../../image/eu.png";
import react from "../../image/structure.png";
import html from "../../image/html-5.png";
import css from "../../image/css.png";
import javaScript from "../../image/java-script.png";
import projeto from "../../image/projeto1.png";
import curriculoCSS from "../../image/curriculo.png";
import instagramCSS from "../../image/instagram.png";
import marketplaceCSS from "../../image/marketplace.png";
import geniusJS from "../../image/genius2.png";
import pedraPapelJS from "../../image/pedraPapel.png";
import listaFrutasJS from "../../image/listaFrutas.png";
import kenziehubREACT from "../../image/kenziehub.png";
import scrol from "../../image/avanco-rapido.gif";
import habitosREACT from "../../image/gestao.png";
import hamburgueriaREACT from "../../image/hamburgueria.png";
import { Link, animateScroll as scroll } from "react-scroll";
import CardProjeto from "../../components/CardProjeto/card";
import HeaderComponent from "../../components/header/HeaderComponent";


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
  console.log({showMenu})

  return (
    <Container>
      <HeaderComponent showClickMenu={showClickMenu} showMenu={showMenu} />

    </Container>
  );
};

export default Home;
      // <Apresentacao id="Apresentacao">
      //   <h3>Olá, seja bem vindo</h3>
      //   <h1>me chamo Claudio Inácio</h1>
      //   <h2 className="TextoPrincipal">
      //     Estudante de Desenvolvimento Front-End
      //   </h2>
      //   <h2>Apaixonado por Tecnlogia</h2>
      // </Apresentacao>
      // <ContainerSobreMim id="sobremim">
      //   <figure>
      //     <img src={eu} alt="teste" />
      //   </figure>

      //   <SobreMim>
      //     <h2>MEU PERFIL</h2>
      //     <span>
      //       Sou estudante de programação e apaixonado por Esportes. Tenho 27
      //       anos, estou a procura da minha primeira oportunidade como
      //       desenvolvedor FRONT-END
      //     </span>
      //     <DivButtons>
      //       <button onClick={() => tradeHabilit(1)}> Minhas Habilidades</button>
      //       <button onClick={() => tradeHabilit(2)}>Experiencia</button>
      //       <button onClick={() => tradeHabilit(3)}>Formação</button>
      //     </DivButtons>
      //     <DivInformations>
      //       {habilits && (
      //         <ol>
      //           <li>Html5, CSS3, JavaScript, ReactJS</li>
      //           <li>TypeScript</li>
      //           <li>REST API</li>
      //           <li>Context API</li>
      //           <li>SCRUM</li>
      //           <li>GIT</li>
      //           <li>GITHUB</li>
      //         </ol>
      //       )}
      //       {expirience && (
      //         <span>
      //           <ol>
      //             <li>Analista de Implantação</li>
      //             <li>Analista de Suporte nº2</li>
      //             <li>Suporte Tecnico</li>
      //           </ol>
      //         </span>
      //       )}
      //       {formation && (
      //         <span>
      //           <ol>
      //             <li>Desenvolvimento Front-End - Kenzie Academy 2022</li>
      //             <li>Sistemas de Informação - Unipar 2020</li>
      //             <li>Banco de dados Oracle - Udemy 2019</li>
      //           </ol>
      //         </span>
      //       )}
      //     </DivInformations>
      //   </SobreMim>
      // </ContainerSobreMim>
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