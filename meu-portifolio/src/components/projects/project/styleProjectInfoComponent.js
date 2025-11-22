import styled from "styled-components";

export const ProjectInfo = styled.div`
  padding: 12px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  h3 {
    font-size: 1.1rem;
    font-weight: 600;
       color: ${({ theme }) => theme.colors.primary};
    margin: 0;
  }

  p {
    font-size: 0.92rem;
    color: #555;
    line-height: 1.35;
    margin: 0;
  }

  .tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .tech {
    background: #f0f0f0;
    padding: 8px 10px;
    border-radius: 10px;
    font-size: 0.78rem;
    color: #333;
    font-weight: 500;
  }

  @media (max-width: 710px) {
    padding: 12px;
    
    h3 {
      font-size: 1rem;
    }

    p {
      font-size: 0.85rem;
    }

    .tech {
      font-size: 0.72rem;
      padding: 4px 8px;
    }
  }
`;
