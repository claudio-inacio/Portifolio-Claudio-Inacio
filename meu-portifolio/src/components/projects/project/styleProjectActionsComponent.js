import styled from "styled-components";

export const ProjectActions = styled.div`  
  display: flex;
  justify-content: space-between;
  // gap: 12px;
  padding: 10px;

  .btn {
    flex: 1;
    text-align: center;
    padding: 10px 0;
    border-radius: 10px;
    font-size: 0.92rem;
    font-weight: 600;
    text-decoration: none;
    color: #fff;
    transition: 0.2s ease;
  }

  .demo {
    background: #007bff;
  }

  .demo:hover {
    background: #006ae0;
  }

  .code {
    background: #222;
  }

  .code:hover {
    background: #111;
  }

  @media (max-width: 710px) {
    padding: 12px;

    .btn {
      font-size: 0.85rem;
      padding: 9px 0;
    }
  }
`;
