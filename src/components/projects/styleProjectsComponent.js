import styled from "styled-components";

export const ProjectsContainer = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  h2 {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    font-size: clamp(22px, 4vw, 35px);
    max-width: 100%;
  }


  @media (max-width: 710px) {
    flex-direction: column;
    h2 {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: bold;
      font-size: clamp(22px, 4vw, 35px);
      max-width: 100%;
    }
  }

  @media (min-width: 711px) {
    h2 {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: bold;
      font-size: clamp(22px, 4vw, 35px);
      max-width: 100%;
    }
    justify-content: center;

    padding-left: 50px;
    padding-rigth: 100px;
  }
`;
export const TitleHeader = styled.div`

  display: flex;
  flex-direction: row;

`;

