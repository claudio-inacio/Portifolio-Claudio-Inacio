import styled from "styled-components";

export const AboutMeInfo = styled.div`
  box-sizing: border-box;
  max-width: 100%; 
  flex-shrink: 1; 
  overflow: hidden;

  /* MOBILE */
  @media (max-width: 710px) {
    display: flex;
    flex-direction: column;
    gap: 14px;
    align-items: center;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(10px);

    padding: 18px;
    border-radius: 8px;
    width: 100%;
    margin: 0 auto;
    text-align: center;

    h1 {
      color: ${({ theme }) => theme.colors.primary};
      font-size: 22px;
      font-weight: bold;
    }

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.colors.secondaryDark};
      line-height: 1.4;
      max-width: 100%;
    }

    button {
      margin-top: 8px;
      max-width: 100%;
    }
  }

  /* DESKTOP */
  @media (min-width: 711px) {
    display: flex;
    flex-direction: column;
    gap: 18px;
    justify-content: center;
    align-items: flex-start;

    padding: 24px 32px;

    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(10px);
    border-radius: 10px;

    /* largura adaptável */
    width: clamp(280px, 40vw, 550px);

    h1 {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: bold;
      font-size: clamp(22px, 4vw, 35px);
      max-width: 100%;
    }

    span {
      color: ${({ theme }) => theme.colors.secondaryDark};
      line-height: 1.5;
      font-size: clamp(14px, 1.6vw, 18px);
      max-width: 100%;
    }

    button {
      padding: 12px 22px;
      background: ${({ theme }) => theme.colors.primary};
      border-radius: 8px;
      color: white;
      font-weight: bold;
      font-size: clamp(14px, 1.6vw, 18px);
      transition: 0.2s;
      cursor: pointer;
      max-width: 100%;

      &:hover {
        background: ${({ theme }) => theme.colors.primaryDark};
      }
    }
  }
`;
