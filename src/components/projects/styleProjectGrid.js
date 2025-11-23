import styled from "styled-components";

export const ProjectsGridContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 20px;
  padding: 40px 40px;
  max-width: 1200px;
  margin: 0 auto;


  grid-template-columns: 1fr;

  @media (min-width: 700px) {

    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1300px) {

    grid-template-columns: repeat(3, 1fr);
  }
`;
