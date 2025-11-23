import styled from "styled-components";
export const Projeto = styled.div`
  @media (max-width: 426px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // background-color: red;
    border-radius: 5px;
    padding: 0px;
    margin: 0px;

    .texto {
      h3 {
        padding: 5px;
      }
      p {
        align-items: center;
        text-align: center;
      }
    }

    .containerCard {
      // background-color: blue;
      margin: 0px;
      padding: 0px;
    }
    .image {
      margin: 0px;
      padding: 0px;
      img {
        width: 200px;
        height: 250px;
      }
    }

    div {
      img {
        width: 30px;
        height: 30px;
        //margin: 5px;
      }
    }
    p {
      display: none;
    }
  }

  @media (min-width: 427px) {
    * {
      margin: 0px;
      padding: 0px;
      align-items: center;
    }
    margin: 5px;
    padding: 5px;
    .container {
      width: 25vw;
      padding: 30px;
      // position: sticky;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      overflow: hidden;
      //background-color: blue;
    }

    .containerCard {
      min-width: 22vw;
      height: 25vw;
      //position: relative;
      margin: 15px 5px;
      padding: 20px 15px;
      background-color: #fff;
      border-radius: 10px;
      flex-direction: column;
      transition: 0.5s ease-in-out;
      background-color: gray;
      .texto {
        margin-top: -100px;
        text-align: center;
        padding: 10px;
        color: green;

        transition: 0.3s ease-in-out;
        color: transparent;
      }
    }
    .texto:hover {
      transition-delay: 0.3s;
      color: black;
      cursor: pointer;
    }
    .containerCard:hover {
      height: 500px;
      cursor: pointer;
      color: black;
      transition: 0.3s ease-in-out;

      h3 {
        transition: 0.3s ease-in-out;
        transition-delay: 0.3s;
        color: black;
        font-size: 20px;
      }
      p {
        transition: 0.3s ease-in-out;
        transition-delay: 0.3s;
        color: black;
      }
    }

    .image {
      width: 15vw;
      height: 15vw;

      margin-top: -30px;
      margin-left: 35px;
      margin-bottom: 50px;

      img {
        width: 20vw;
        height: 15vw;
        max-width: 100%;
      }
    }

    // display: flex;
    // position: relative;
    // flex-direction: column;
    // justify-content: center;
    // align-items: center;
    // background-color: #191919;
    // border-radius: 5px;
    // margin: 15px;
    // height: 420px;
    // max-width: 300px;
    // .card {
    //   position: relative;
    //   max-width: 300px;
    //   height: 220px;
    //   margin: 30px 10px;
    //   padding: 20px 15px;
    //   background: #fff;
    //   border-radius: 10px;
    //   flex-direction: column;
    //   transition: 0.5s ease-in-out;
    //   background-color: #191919;

    //   figure {
    //     position: relative;
    //     width: 200px;
    //     height: 200px;
    //     top: -60px;
    //     left: 20px;
    //     z-index: 1;
    //   }

    //   img {
    //     max-width: 100%;
    //     height: 100%;
    //   }

    //   .texto {
    //     position: relative;
    //     margin-top: -120px;
    //     text-align: center;
    //     padding: 10px;
    //     color: white;
    //     visibility: ;
    //     transition: 0.3s ease-in-out;
    //   }
    //   //
    //    .texto:hover {
    //     color: red;
    //     cursor: pointer;
    //     visibility: visible;
    //   //     visibility: visible;
    //   //     transition-delay: 0.3s;
    //   //     cursor: pointer;
    //   //   }

    //   .card:hover {
    //     height: 500px;

    //     h3 {
    //       padding: 5px;
    //     }

    //     div {
    //       img {
    //         width: 45px;
    //         height: 45px;
    //         margin: 3px;
    //       }
    //     }
    //   }
    // }
    //
  }
`;
