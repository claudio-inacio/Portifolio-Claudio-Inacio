import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: 426px) {
    background-color: rgb(16, 16, 16);
  }
  background-color: rgb(16, 16, 16);
`;

export const Header = styled.div`
  position: fixed;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #2f1ae8;
  @media (max-width: 426px) {
    padding: 10px 0px 10px 10px;

    .divHamburguer {
      display: block;
    }
  }
  @media (min-width: 427px) {
    width: 100vw;
    .divHamburguer {
      display: none;
    }
  }
`;

export const Inforamtions = styled.div`
  @media (max-width: 426px) {
    display: ${(props) => (props.show ? "felx" : "none")};
    transform: translateX(0%);
    background-color: #2f1ae8;
    opacity: 1;
    transition: opacity 0.5s;
    position: absolute;
    border-radius: 3px;
    height: 50vh;
    width: 120px;
    padding: 0px 32px;
    top: 0.5%;
    left: 0%;

    p {
      font-size: 25px;
      display: block;
    }

    ul {
      margin-top: 10px;
      margin-left: -15px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 25%;
      li {
        padding: 5px;
        margin: 5px;
        border-radius: 5px;
        text-align: center;
      }

      li:hover {
        background-color: #556dfa;
        transition: 0.5s;
        text-decoration: none;
      }
      li a {
        color: white;
        text-decoration: none;
      }
    }
  }

  @media (min-width: 427px) {
    height: 80px;

    align-items: center;
    width: 70%;

    ul {
      display: flex;
      justify-content: space-around;
      overflow-x: hidden;
      min-width: 100%;
      align-items: center;
      text-align: center;
      height: 100%;
    }

    li {
      border-radius: 3px;
      padding: 0px;

      font-weight: bold;
      display: flex;
      font-size: 25px;
      color: white;
      overflow: hidden;
      width: 100%;
      margin: auto;
    }

    li:hover {
      cursor: pointer;
    }

    a {
      width: 80%;
      text-align: center;
      margin: auto;
      font-size: 1.9vw;
    }

    .links:hover {
      transition: 0.9s;
      background-color: #040042;
      border-radius: 5px;
    }
    // li:focus {
    //   border-bottom: solid 2px;
    //   transition: 0.2s;
    //   color: red;
    // }

    p {
      display: none;
    }
  }
`;

export const SocialPages = styled.div`
  @media (max-width: 426px) {
    display: flex;
    width: 200px;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;

    .icon {
      color: black;
    }
    .icon:hover {
      color: white;
    }
  }

  @media (min-width: 427px) {
    display: flex;
    width: 30%;
    flex-wrap: nowrap;
    justify-content: flex-end;
    //background-color: red;
    a {
      margin: 5px;
      width: 30%;

      //background-color: blue;
    }
    .icon {
      color: black;
    }
    .icon:hover {
      color: white;
    }
  }
`;

export const Apresentacao = styled.div`
  height: 100vh;
  min-width: 100%;
  h2 {
    color: #2f1ae8;
  }

  @media (max-width: 426px) {
    //background-color: rgb(16, 16, 16);

    padding-top: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;

    h3 {
      margin: 15px;
      margin-top: 50px;
      font-size: 20px;
    }

    h1 {
      margin: 10px;
    }
    h2 {
      padding: 15px;
    }
  }
  @media (min-width: 427px) {
    padding-top: 150px;
    height: 100%;
    color: white;
    text-align: center;

    h3 {
      font-size: 30px;
    }
    h1 {
      margin-top: 80px;
      font-size: 50px;
    }
    h2 {
      font-size: 40px;
      margin-top: 60px;
    }

    figure {
      margin-top: 25px;

      img {
        width: 100px;
        height: 100px;
        transform: rotate(90deg);
        // transform-origin: left top 0;
      }
      img:hover {
        cursor: pointer;
      }
    }
  }
`;

export const ContainerSobreMim = styled.div`
  height: 100vh;
  min-height: 800px;
  display: flex;
  align-items: flex-start;

  @media (max-width: 426px) {
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding-top: 30px;
    color: white;
    background-color: #191919;
    img {
      width: 280px;
      height: 280px;
    }
  }
  @media (min-width: 427px) {
    background-color: #191919;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    //background-color: red;
    figure {
      margin-top: -250px;
    }
    img {
      padding-left: 15px;
      width: 200px;
      height: 400px;
      border-radius: 5px;
    }
  }
`;
export const SobreMim = styled.div`
  @media (max-width: 426px) {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      margin-top: 15px;
      width: 300px;
      text-align: center;
    }
  }
  @media (min-width: 427px) {
    text-align: center;
    max-width: 700px;
    width: 100%;
    //min-width: 500px;
    min-height: 500px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: -250px;
    H2 {
      font-size: 50px;
      color: white;
      padding-bottom: 30px;
    }
    span {
      display: flex;
      color: gray;
      font-size: 20px;

      //background-color: blue;
      flex-wrap: wrap;
    }
  }
`;

export const DivButtons = styled.div`
  @media (max-width: 426px) {
    margin-top: 10px;
    border-top: 2px solid white;
    button {
      background-color: transparent;
      color: white;
      margin: 5px;
      border: none;
      padding: 2px 5px 10px 5px;
    }
    button:hover {
      border-bottom: 2px solid #2f1ae8;
      transition: 50ms;
    }
  }

  @media (min-width: 427px) {
    margin-top: 25px;
    background-color: #403637;
    width: 80%;
    height: 50px;
    justify-content: center;
    align-items: center;
    button {
      background-color: transparent;
      color: white;
      margin: 5px;
      border: none;
      padding: 2px 5px 10px 5px;
      margin-left: 25px;
      margin-right: 25px;
      font-size: 15px;
    }
    button:hover {
      border-bottom: 2px solid #2f1ae8;
      transition: 300ms;
      cursor: pointer;
      color: #2f1ae8;
    }
    button:focus {
      border-bottom: 2px solid #2f1ae8;
      transition: 50ms;
    }
  }
`;

export const DivInformations = styled.div`
  @media (max-width: 426px) {
    min-height: 120px;
    border-bottom: 2px solid white;
    margin-top: 15px;
    padding-bottom: 15px;
  }
  @media (min-width: 427px) {
    margin-left: 50px;
    max-width: 100%;
    margin-top: 15px;
    min-height: 220px;

    align-items: center;
    ol {
      align-items: flex-start;
      margin-left: 30px;
      max-width: 300px;
      width: 100%;
      color: white;
      // background-color: green;
      max-height: 100%;

      display: flex;
      flex-direction: column;
      li {
        padding: 5px;
        height: 100%;
      }
    }
  }
`;

export const ContainerProjetosSem = styled.div`
  color: white;
  color: white;
  @media (max-width: 426px) {
    display: none;
  }
  @media (min-width: 427px) {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    justify-content: center;
    align-items: center;

    .projetosTitle {
      padding-top: 10px;
      font-size: 60px;
      color: #2f1ae8;
    }
    .prjectLenguage {
      margin-top: 25px;
      margin-bottom: -10px;
      color: orange;
    }
    h3 {
      padding: 40px 10px 10px 10px;
    }
  }
`;

export const SemCarrossel = styled.div`
  @media (max-width: 426px) {
    display: none;
  }

  @media (min-width: 427px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    margin-left: 10px;
  }
`;

export const DivProjeto = styled.div`
  @media (max-width: 426px) {
    display: flex;
    flex-direction: row;
    margin-top: 15px;
    justify-content: center;
    align-items: center;
    color: white;
    transition-timing-function: ease;
    transition-duration: 2s;
    transition-delay: 1s;
  }
  @media (min-width: 427px) {
    display: flex;
    flex-direction: row;
    margin-top: 15px;
    justify-content: center;
    align-items: center;
    color: white;
    transition-timing-function: ease;
    transition-duration: 2s;
    transition-delay: 1s;
  }
`;

//export const Projeto = styled.div`
//  @media (max-width: 426px) {
//    display: flex;
//    flex-direction: column;
//    justify-content: center;
//    align-items: center;
//    background-color: #191919;
//    border-radius: 5px;
//
//    h3 {
//      padding: 5px;
//    }
//    img {
//      width: 200px;
//      height: 250px;
//    }
//    div {
//      img {
//        width: 30px;
//        height: 30px;
//        margin: 5px;
//      }
//    }
//  }
//  @media (min-width: 427px) {
//    display: flex;
//    flex-direction: column;
//    justify-content: center;
//    align-items: center;
//    background-color: #191919;
//    border-radius: 5px;
//
//    h3 {
//      padding: 5px;
//    }
//    img {
//      width: 300px;
//      height: 350px;
//    }
//    div {
//      img {
//        width: 50px;
//        height: 50px;
//        margin: 5px;
//      }
//    }
//  }
//`;

export const ContainerProjetos = styled.div`
  color: white;
  color: white;
  @media (max-width: 426px) {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    justify-content: center;
    align-items: center;

    h2 {
      margin-bottom: 15px;
    }
    h3 {
      padding: 40px 10px 10px 10px;
    }
  }
  @media (min-width: 427px) {
    display: none;
  }
`;

export const Carrossel = styled.div`
  @media (max-width: 426px) {
    display: flex;
    flex-direction: row;
    max-width: 210px;
    max-height: 100%;
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    margin-left: 10px;
    ::-webkit-scrollbar {
      display: none;
    }
    div {
      margin-right: 10px;
    }
  }
  @media (min-width: 427px) {
    display: none;
  }
`;

export const Contato = styled.div`
  background-color: #2f1ae8;
  width: 100%;
  height: 100%;
  color: white;
  font-size: 25px;
  text-align: center;
`;
