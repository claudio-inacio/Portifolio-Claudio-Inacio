import styled from "styled-components";

export const HeadlineImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 400px;

    height: auto;
    border-radius: 50px;
    image-rendering: crisp-edges;
  }
  @media (max-width: 710px) {
    img {
      max-width: 300px;
      width: 70%;
    }
  }
  @media (max-width: 711px) {
    img {
      width: 100%;
    }
  }
`;
