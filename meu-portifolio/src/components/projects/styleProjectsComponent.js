import styled from "styled-components";

export const ProjectsContainer = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-top: 200px;
  margin-bottom: 200px;
  align-items: center;
  gap: 30px;

  @media (max-width: 710px) {
    padding: 20px 0;
    flex-direction: column;
  }

  @media (min-width: 711px) {
    padding-top: 100px;
    flex-direction: row; 
    justify-content: center;
    align-items: start;
     gap: 30px;
  }
`;
