import { Projeto } from "./styleCard";

const CardProjeto = ({ projeto }) => {
  return (
    <Projeto>
      {/*<div className="card card0">
        <div className="border">
          <h3>{projeto.titulo}</h3>
          <figure>
            <a href={projeto.LinkProjeto} target="_blank">
              <img src={projeto.imagem} alt={projeto.desc} />
            </a>
          </figure>

          <div>
            <img src={projeto.css} alt="LOGO CSS" />
            <img src={projeto.html} alt="LOGO HTML" />
            {projeto.react && <img src={projeto.react} alt="LOGO REACT" />}
          </div>
        </div>
      </div>*/}
      <div className="container">
        <div className="containerCard">
          <div className="image">
            <a href={projeto.LinkProjeto} target="_blank">
              <img src={projeto.imagem} alt={projeto.desc} />
            </a>
          </div>
          <div className="texto">
            <h3>{projeto.titulo}</h3>
            <p>{projeto.descricao}</p>
          </div>
        </div>
      </div>
    </Projeto>
  );
};

export default CardProjeto;
