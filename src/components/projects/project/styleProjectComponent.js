import styled from "styled-components";

export const Project = styled.div`
  width: 100%;
  max-width: 300px;
  background: #ffffff;
  border-radius: 14px;
  overflow: hidden; 
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  gap: 12px;

  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 22px rgba(0,0,0,0.12);
  }

  @media (max-width: 710px) {
    max-width: 100%;
        max-width: 300px;
    border-radius: 12px;
  }

  @media (min-width: 711px) {
    max-width: 300px;
    border-radius: 14px;
  }
`;
