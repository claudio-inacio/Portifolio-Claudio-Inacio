import styled from "styled-components";

export const SocialPages = styled.div`
  @media (max-width: 426px) {
    display: flex;
    width: 200px;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;

    .icon {
      color: black;
    }
    .icon:hover {
      color: white;
    }
  }

  @media (min-width: 427px) {
    display: flex;
    width: 30%;
    flex-wrap: nowrap;
    justify-content: flex-end;
    a {
      margin: 5px;
      width: 30%;

    }
    div {
      margin: 5px;
      width: 30%;

    }
    .icon {
      color: black;
    }
    .icon:hover {
      color: white;
    }
  }
`;