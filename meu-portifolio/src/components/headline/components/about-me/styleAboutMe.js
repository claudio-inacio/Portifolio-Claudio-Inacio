import styled from "styled-components";

export const AboutContainer = styled.div`
  @media (max-width: 500px) {

    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(8px);


    transition:
      opacity 0.3s ease,
      transform 0.3s ease;



    position: fixed;
    top: 50px;
    left: 12px;
    width: 150px;
    min-height: 200px;
    padding: 18px;

    border-radius: 8px;
    z-index: 999;

    p {
      font-size: 22px;
      align-self: flex-end;
      margin-bottom: 10px;
      cursor: pointer;
      font-weight: bold;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 18px;
      margin: 0;
      padding: 0;
      list-style: none;

      li {
        color: white;
        font-size: 16px;
        cursor: pointer;
        transition: 0.2s;

      }
    }
  }

  /* DESKTOP A PARTIR DE 501PX */
  @media (min-width: 501px) {
    height: 80px;
    align-items: center;
    width: 70%;

    ul {
      display: flex;
      justify-content: center;
      overflow-x: hidden;
      min-width: 100%;
      align-items: center;
      text-align: center;
      height: 100%;
    }

    p {
      display: none;
    }
  }
`;
