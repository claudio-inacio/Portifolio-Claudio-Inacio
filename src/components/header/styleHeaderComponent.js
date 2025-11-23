import styled from "styled-components";

export const Header = styled.div`
position: fixed;
top: 0;
left: 50%;
transform: translateX(-50%);
height: 50px;
box-shadow: 2px 3px 26px 0px rgba(0,0,0,0.33);
width: 80%;         
max-width: 90%;  
display: flex;
align-items: center;
justify-content: space-between;

background-color: #ffffff;
margin: 20px 0;      
border: 2px solid #dcdcdc;
border-radius: 20px;  
z-index: 999;       

  @media (max-width: 499px) {
  padding: 10px;
    .divHamburguer {
      
      display: block;
    }
  }
  @media (min-width: 500px) {
    width: 100vw;
    .divHamburguer {
      display: none;
    }
  }
`;

