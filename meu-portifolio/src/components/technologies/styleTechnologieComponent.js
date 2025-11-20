import styled, { keyframes } from "styled-components";

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

export const TechnologieContainer = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: flex-start;
  align-items: center;
  padding: 40px 0;

  .carousel-track {
    display: flex;
    gap: 20px;
    animation: ${scroll} 30s linear infinite;
    animation-play-state: running;
  }

  h2 {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    font-size: clamp(22px, 4vw, 35px);
    max-width: 100%;
  }

  @media (max-width: 710px) {
    h2 {
      color: ${({ theme }) => theme.colors.primary};
      font-size: 22px;
      font-weight: bold;
    }

    .carousel-track {
      gap: 30px;
      animation-duration: 15s;
    }
  }
`;
