import styled from "styled-components";

export const InformationListItem = styled.li`
  list-style: none;
  cursor: pointer;
  font-weight: bolder;

  @media (max-width: 426px) {
    padding: 5px;
    margin: 5px;
    border-radius: 5px;
    text-align: center;

    .link {
      position: relative;
      color: ${({ theme }) => theme.colors.secondary};
      text-decoration: none;
      display: inline-block;
      padding: 8px;
      border-radius: 5px;
      transition: 0.4s;
      overflow: hidden;
    }

    .link::after {
      content: "";
      position: absolute;
      width: 0%;
      height: 3px;
      bottom: 0;
      left: 0;
      background-color: ${({ theme }) => theme.colors.primary};
      transition: width 0.3s ease;
      border-radius: 50px;
    }

    .link:hover {
      color: ${({ theme }) => theme.colors.primary};
    }

    .link:hover::after {
      width: 100%;
    }
  }

  @media (min-width: 427px) {
    display: flex;
    justify-content: center;
    align-items: center;

    .link {
      position: relative;
      width: 100%;
      text-align: center;
      color: ${({ theme }) => theme.colors.secondaryDark};
      font-size: 18px;
      padding: 10px;
      text-decoration: none;
      transition: 0.3s ease;
      display: inline-block;
      overflow: hidden;
    }

    .link::after {
      content: "";
      position: absolute;
      width: 0%;
      height: 3px;
      background-color: ${({ theme }) => theme.colors.primary};
      bottom: 0;
      left: 0;
      transition: width 0.3s ease;
      border-radius: 50px;
    }

    .link:hover {
      transform: translateY(-2px);
      color: ${({ theme }) => theme.colors.primary};
    }

    .link:hover::after {
      width: 100%;
    }
  }
`;
