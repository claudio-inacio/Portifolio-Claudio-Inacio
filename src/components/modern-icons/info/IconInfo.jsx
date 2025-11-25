import React from 'react';
import styled from 'styled-components';

const IconInfo = ({ message }) => {
  return (
    <StyledWrapper>
      <div className="tooltip">
        <div className="icon">i</div>
        <div className="tooltiptext">{message}</div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .tooltip {
    position: relative;
    display: inline-block;
    cursor: pointer;
    font-family: "Arial", sans-serif;
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }

  .tooltiptext {
    visibility: hidden;
    width: 300px;
    background-color: #333;
    color: #fff;
    text-align: left;
    border-radius: 5px;
    padding: 10px;
    position: absolute;
    z-index: 1;

    bottom: calc(100% + 8px); /* acima do ícone */
    right: 0; /* alinhado à direita do ícone */

    opacity: 0;
    transition: opacity 0.3s;
  }

  /* Setinha apontando para o ícone (para baixo) */
  .tooltiptext::after {
    content: "";
    position: absolute;

    top: 100%; 
    right: 10px; 

    border-width: 7px;
    border-style: solid;
    border-color: #504d4dff transparent transparent transparent;
  }

  .tooltip .icon {
    display: inline-block;
    width: 20px;
    height: 20px;
    background-color: #4caf50;
    color: #fff;
    border-radius: 50%;
    text-align: center;
    line-height: 20px;
  }
`;

export default IconInfo;
