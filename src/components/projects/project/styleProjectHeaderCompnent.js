import styled from "styled-components";

export const ProjectHeader = styled.div`
  width: 100%;
  height: 170px;
  position: relative;
  border-radius: 14px 14px 0 0;
  overflow: hidden;

  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: center;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  .overlay {
    position: absolute;
    inset: 0;    
    z-index: 1;
  }

  .main-image {
    position: relative;
    z-index: 2;
    width: 100%;          
    max-width: 340px;   
    border-radius: 14px;
    object-fit: cover;
    box-shadow: 0 10px 25px rgba(0,0,0,0.38);

    transition: transform 0.25s ease;
  }

  @media (max-width: 710px) {
    height: 170px;
    .main-image {
      width: 100%;       
      max-width: 300px;  
    }
  }

  @media (min-width: 711px) {
    height: 170px;       

    .main-image {
      width: 100%;              
    }
  }
`;
