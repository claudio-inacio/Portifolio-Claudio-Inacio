import TechnologieComponent from "./components/TechnologieComponent";
import { TechnologieContainer } from "./styleTechnologieComponent";
import { useRef } from "react";


export const tecnologiesIconsArray = [
  {
    name: "HTML-5",
    exibeName: false,
    icon: <i class="devicon-html5-plain-wordmark colored" />,
    description: "Linguagem base para estruturar páginas web e conteúdo visual."
  },
  {
    name: "CSS-3",
    exibeName: false,
    icon: <i class="devicon-css3-plain-wordmark colored" />,
    description: "Responsável por estilos, layout, responsividade e animações."
  },
  {
    name: "JAVA SCRIPT",
    exibeName: true,
    icon: <i class="devicon-javascript-plain colored" />,
    description: "Linguagem que adiciona interatividade e lógica às páginas web."
  },
  {
    name: "TYPE SCRIPT",
    exibeName: true,
    icon: <i class="devicon-typescript-plain colored" />,
    description: "Superset do JavaScript com tipagem estática e maior segurança."
  },
  {
    name: "REACT",
    exibeName: false,
    icon: <i class="devicon-react-original-wordmark colored" />,
    description: "Biblioteca para criar interfaces modernas, reativas e escaláveis."
  },
  {
    name: "REACT-ROUTER",
    exibeName: false,
    icon: <i class="devicon-reactrouter-plain-wordmark colored" />,
    description: "Gerencia rotas e navegação em aplicações React single-page."
  },
  {
    name: "TAILWIND-CSS",
    exibeName: false,
    icon: <i class="devicon-tailwindcss-plain-wordmark colored" />,
    description: "Framework de CSS utilitário para criação rápida de interfaces."
  },
  {
    name: "NEXT-JS",
    exibeName: false,
    icon: <i class="devicon-nextjs-original-wordmark colored" />,
    description: "Framework React com SSR, performance e otimização automáticos."
  },
  {
    name: "SASS",
    exibeName: false,
    icon: <i class="devicon-sass-original colored" />,
    description: "Pré-processador CSS com variáveis, mixins e organização avançada."
  },
  {
    name: "STYLED COMPONENTS",
    exibeName: false,
    icon: <i class="devicon-styledcomponents-plain colored" />,
    description: "Estilização de componentes React usando CSS dentro do JavaScript."
  },
  {
    name: "REDUX",
    exibeName: true,
    icon: <i class="devicon-redux-original colored" />,
    description: "Gerenciador de estado previsível para aplicações React complexas."
  },
  {
    name: "AXIOS",
    exibeName: false,
    icon: <i class="devicon-axios-plain-wordmark colored" />,
    description: "Cliente HTTP usado para consumir APIs com suporte a promessas."
  },
  {
    name: "POSTMAN",
    exibeName: true,
    icon: <i class="devicon-postman-plain colored" />,
    description: "Ferramenta para testar e documentar APIs de forma simples e rápida."
  },
  {
    name: "NGROK",
    exibeName: false,
    icon: <i class="devicon-ngrok-original colored" />,
    description: "Cria túneis seguros que expõem servidores locais à internet."
  },
];




const TechnologiesComponent = () => {
  const trackRef = useRef(null);

  const handlePause = () => {
    if (trackRef.current) {
      trackRef.current.style.animationPlayState = "paused";
    }
  };

  const handleResume = () => {
    if (trackRef.current) {
      trackRef.current.style.animationPlayState = "running";
    }
  };

  return (
    <TechnologieContainer>
      <h2>Tecnologias</h2>

      <div className="carousel-track" ref={trackRef}>
        {[...tecnologiesIconsArray, ...tecnologiesIconsArray].map(
          (tech, index) => (
            <TechnologieComponent
              key={index}
              icon={tech.icon}
              description={tech.description}
              exibeName={tech.exibeName}
              name={tech.name}
              onMouseEnter={handlePause}
              onMouseLeave={handleResume}
            />
          )
        )}
      </div>
    </TechnologieContainer>
  );
};

export default TechnologiesComponent;


