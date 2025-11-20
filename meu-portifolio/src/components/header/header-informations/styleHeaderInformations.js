import styled from "styled-components";

export const Informations = styled.div`
  @media (max-width: 500px) {
    display: ${({ show }) => (show ? "flex" : "none")};
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(8px);
    border: 2px solid ${({ theme }) => theme.secondaryDark};

    transition:
      opacity 0.3s ease,
      transform 0.3s ease;

    opacity: ${({ show }) => (show ? 1 : 0)};
    transform: ${({ show }) =>
      show ? "translateX(0%)" : "translateX(-15%)"};

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
      color: ${({ theme }) => theme.secondaryDark};
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

        &:hover {
          color: ${({ theme }) => theme.secondaryDark};
        }
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
