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
  Inforamtions,
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

const ProjetosCSS = [
  {
    titulo: "Instagram Kenzie",
    LinkProjeto:
      "https://noturno-extra-s3-estilizar-rede-social-claudio-inacio.vercel.app/",
    imagem: instagramCSS,
    desc: "Projeto instagram da Kenzie",
    css: css,
    html: html,
    react: "",
    descricao:
      "Projeto desenvolvido com as tecnologias HTML e CSS, com a intenção de realizar uma copia do intagram... desenvolvendo assim as habilidades de estilo e marcação de texto",
  },
  {
    titulo: "loja de Roupas",
    LinkProjeto:
      "https://noturno-entrega-s4-ecommerce-parte1-claudio-inacio.vercel.app/",
    imagem: marketplaceCSS,
    desc: "Projeto Marketplaces",
    css: css,
    html: html,
    react: "",
    descricao:
      "Projeto desenvolvido com as tecnologias HTML e CSS, que consiste em uma replica visual de um e-comerce que poderia ser utilizado para ralizar a venda de qualquer tipo de produto... desenvolvendo assim as habilidades de estilo e marcação de texto",
  },
  {
    titulo: "Estilo de Curriculo",
    LinkProjeto:
      "https://noturno-entrega-curriculo-guru-claudio-inacio.vercel.app/",
    imagem: curriculoCSS,
    desc: "projeto curriculo",
    css: css,
    html: html,
    react: "",
    descricao:
      "Projeto desenvolvido com as tecnologias HTML e CSS, nesse projeto desenvolvemos a parte visual de um curriculo... um otimo projeto para treinar as praticas de posicionamento com CSS",
  },
];

const ProjetosJS = [
  {
    titulo: "Jogo Genius",
    LinkProjeto: "https://jogo-genius-lovat.vercel.app/",
    imagem: geniusJS,
    desc: "Jogo Genius Utilizando JS",
    css: css,
    html: html,
    react: javaScript,
    descricao:
      "Projeto realizado em dupla, que consiste em um jogo que tem como objetivo acertar a sequencia de cores que vão ascendendo ao longo das rodadas. Projeto desenvolvido utilizando as tecnologias CSS, HTML e JavaScript.. um ótimo projeto para treinar a logica de programação e tambem as habilidades em CSS",
  },
  {
    titulo: "Jogo Pedra-Papel-Tesoura",
    LinkProjeto:
      "https://noturno-m1-entrega-s6-pedra-papel-tesoura-claudio-inacio.vercel.app/",
    imagem: pedraPapelJS,
    desc: "Jogo Pedra Papel Tesoura utilizando JS",
    css: css,
    html: html,
    react: javaScript,
    descricao:
      "Projeto desenvolvido para aprendizado pessoal, utilizando as tecnologias HTML, CSS e JavaScript.. esse projeto tem como objetivo recriar o famoso jogo PEDRA-PAPEL-TESOURA, onde o jogador testa a sua sorte contra a maquina cada vez que escolhe qual objeto vai jogar.",
  },
  {
    titulo: "Lista de Frutas",
    LinkProjeto:
      "https://entrega-continuacao-lista-produtos-noturno-claudio-inacio.vercel.app/",
    imagem: listaFrutasJS,
    desc: "Lista de Frutas com JS",
    css: css,
    html: html,
    react: javaScript,
    descricao:
      "Projeto desenvolvido com as tecnologias HTML, CSS e JavaScript, esse projeto simula um pequeno ecommerce de alimentos, onde podemos estar realizando algumas ações como pesquisa e adição do produto ao carrinho de compras",
  },
];

const ProjetosREACT = [
  {
    titulo: "Kenzie Hub",
    LinkProjeto: "https://kenzie-hub-azure-one.vercel.app/",
    imagem: kenziehubREACT,
    desc: "Site Onde voce pode cadastrar os seus projetos",
    css: css,
    html: javaScript,
    react: react,
    descricao:
      "Meu primeiro projeto que possui um CRUD completo. Desenvolvido em REACT.JS o projeto consiste basicamente em um app para cadastrarmos as tecnologias que estamos estudando, nesse app temos cadastro de usuário, login de usuário, cadastro de linguagens, listagem das linguagens cadastradas, o usuário pode também realizar a exclusão das linguagens do seu painel, além de avançar o nível em que ele se encontra no momento.",
  },
  {
    titulo: "Gestão de Habitos",
    LinkProjeto: "https://gestao-habitos-kenzie-academy-g2-s4.vercel.app",
    imagem: habitosREACT,
    desc: "Site voltado para o usuario cadastrar os seus habitos",
    css: css,
    html: javaScript,
    react: react,
    descricao:
      "Aplicação desenvolvida em grupo, utilizando ReactJS e algumas de suas bibliotecas.. projeto que ajudou muito no desenvolvimento tecnico e tambem social. Nesta aplicação o foco é o usuario com TDAH, onde ele pode estar criando e gerenciando todos os seus habitos, atividades e metas.. sejam elas diarias semanais ou mensais.",
  },
  {
    titulo: "Hamburgueria Kenzie",
    LinkProjeto: "https://hamburgueria-chi-two.vercel.app/",
    imagem: hamburgueriaREACT,
    desc: "Site que simula uma hamburgueria",
    css: css,
    html: javaScript,
    react: react,
    descricao:
      "Projeto elaborado para desenvolvimento pessoal, utilizando a tecnologia ReactJS.. esta aplicação foi desenvolvida com o intuito de ser uma lanchonete, onde o usuario pode pesquisar os produtos, adicionar e remover o mesmo ao carrinho de compras, tendo sempre a informação do valor total do seu pedido. ",
  },
];

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
      <Header>
        <Inforamtions show={showMenu}>
          <ul>
            <p onClick={showClickMenu}>x</p>
            <li>
              <Link
                activeClass="active"
                className="links"
                to="Apresentacao"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="links"
                activeClass="active"
                to="sobremim"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Minhas Informações
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="links"
                to="projetos"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Portifólio
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="links"
                to="contato"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contato
              </Link>
            </li>
          </ul>
        </Inforamtions>
        <div className="divHamburguer">
          <AiOutlineMenu size={25} onClick={showClickMenu} color="black" />
        </div>
        <SocialPages>
          <a
            href="https://www.linkedin.com/in/claudio-in%C3%A1cio-felipe-junior/"
            target="_blank"
          >
            <BsLinkedin className="icon" size={30} />
          </a>
          <a href="https://github.com/claudio-inacio" target="_blank">
            <BsGithub size={30} className="icon" />
          </a>
          <a href="https://www.instagram.com/c.inaciio/" target="_blank">
            <BsInstagram size={30} className="icon" />
          </a>
        </SocialPages>
      </Header>
      <Apresentacao id="Apresentacao">
        <h3>Olá, seja bem vindo</h3>
        <h1>me chamo Claudio Inácio</h1>
        <h2 className="TextoPrincipal">
          Estudante de Desenvolvimento Front-End
        </h2>
        <h2>Apaixonado por Tecnlogia</h2>
      </Apresentacao>
      <ContainerSobreMim id="sobremim">
        <figure>
          <img src={eu} alt="teste" />
        </figure>

        <SobreMim>
          <h2>MEU PERFIL</h2>
          <span>
            Sou estudante de programação e apaixonado por Esportes. Tenho 27
            anos, estou a procura da minha primeira oportunidade como
            desenvolvedor FRONT-END
          </span>
          <DivButtons>
            <button onClick={() => tradeHabilit(1)}> Minhas Habilidades</button>
            <button onClick={() => tradeHabilit(2)}>Experiencia</button>
            <button onClick={() => tradeHabilit(3)}>Formação</button>
          </DivButtons>
          <DivInformations>
            {habilits && (
              <ol>
                <li>Html5, CSS3, JavaScript, ReactJS</li>
                <li>TypeScript</li>
                <li>REST API</li>
                <li>Context API</li>
                <li>SCRUM</li>
                <li>GIT</li>
                <li>GITHUB</li>
              </ol>
            )}
            {expirience && (
              <span>
                <ol>
                  <li>Analista de Implantação</li>
                  <li>Analista de Suporte nº2</li>
                  <li>Suporte Tecnico</li>
                </ol>
              </span>
            )}
            {formation && (
              <span>
                <ol>
                  <li>Desenvolvimento Front-End - Kenzie Academy 2022</li>
                  <li>Sistemas de Informação - Unipar 2020</li>
                  <li>Banco de dados Oracle - Udemy 2019</li>
                </ol>
              </span>
            )}
          </DivInformations>
        </SobreMim>
      </ContainerSobreMim>
      <ContainerProjetos>
        <h2 className="projetosTitle">Meus projetos</h2>
        <h2>ReactJS</h2>
        <DivProjeto>
          <BsArrowLeftSquareFill
            size={30}
            color="white"
            cursor="pointer"
            onClick={slideLeftREACT}
          />
          <Carrossel ref={carrosselREACT}>
            {ProjetosREACT.map((projeto) => {
              return <CardProjeto projeto={projeto} />;
            })}
          </Carrossel>
          <BsArrowRightSquareFill
            size={30}
            color="white"
            cursor="pointer"
            onClick={slideRightREACT}
          />
        </DivProjeto>

        <h2>HTML/CSS/JavaScript</h2>

        <DivProjeto>
          <BsArrowLeftSquareFill
            size={30}
            color="white"
            cursor="pointer"
            onClick={slideLeftJS}
          />
          <Carrossel ref={carrosselJS}>
            {ProjetosJS.map((projeto) => {
              return <CardProjeto projeto={projeto} />;
            })}
          </Carrossel>
          <BsArrowRightSquareFill
            size={30}
            color="white"
            cursor="pointer"
            onClick={slideRightJS}
          />
        </DivProjeto>
        <h2>HTML/CSS</h2>
        <DivProjeto>
          <BsArrowLeftSquareFill
            size={30}
            color="white"
            cursor="pointer"
            onClick={slideLeftHTML}
          />
          <Carrossel ref={carrosselHTML}>
            {ProjetosCSS.map((projeto) => {
              return <CardProjeto projeto={projeto} />;
            })}
          </Carrossel>
          <BsArrowRightSquareFill
            size={30}
            color="white"
            cursor="pointer"
            onClick={slideRightHTML}
          />
        </DivProjeto>
      </ContainerProjetos>

      <ContainerProjetosSem id="projetos">
        <h2 className="projetosTitle">Meus projetos</h2>
        <h2 className="prjectLenguage">ReactJS</h2>
        <DivProjeto>
          <SemCarrossel>
            {ProjetosREACT.map((projeto) => {
              return <CardProjeto projeto={projeto} />;
            })}
          </SemCarrossel>
        </DivProjeto>

        <h2 className="prjectLenguage">HTML/CSS/JavaScript</h2>
        <DivProjeto>
          <SemCarrossel>
            {ProjetosJS.map((projeto) => {
              return <CardProjeto projeto={projeto} />;
            })}
          </SemCarrossel>
        </DivProjeto>
        <h2 className="prjectLenguage">HTML/CSS</h2>
        <DivProjeto>
          <SemCarrossel>
            {ProjetosCSS.map((projeto) => {
              return <CardProjeto projeto={projeto} />;
            })}
          </SemCarrossel>
        </DivProjeto>
      </ContainerProjetosSem>
      <Contato id="contato">
        <span>E-mail para contato: inacio.unipar@gmail.com</span>
      </Contato>
    </Container>
  );
};

export default Home;
