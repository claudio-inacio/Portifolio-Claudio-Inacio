import React from "react";
import styled from "styled-components";

const ButtonSendToProject = ({
  color = "#00ad54",
  text = "Ver projeto",
  linkReference,
  icon, // <- novo ícone recebido por prop
}) => {
  return (
    <StyledWrapper style={{ "--clr": color }}>
      <button
        onClick={() => window.open(linkReference, "_blank")}
        className="button"
      >
        <span className="button-decor" />

        <div className="button-content">
          <div className="button__icon">
            {icon ? (
              icon
            ) : (
              /* ícone padrão caso nada seja enviado */
              <svg
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
              >
                <circle opacity="0.5" cx={25} cy={25} r={23} fill="url(#grad)" />
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M34.42 15.93c.382-1.145-.706-2.234-1.851-1.852l-18.568 
                    6.189c-1.186.395-1.362 2-.29 2.644l5.12 3.072a1.464 1.464 
                    0 001.733-.167l5.394-4.854a1.464 1.464 0 011.958 
                    2.177l-5.154 4.638a1.464 1.464 0 00-.276 
                    1.841l3.101 5.17c.644 1.072 2.25.896 
                    2.645-.29L34.42 15.93z"
                />
                <defs>
                  <linearGradient
                    id="grad"
                    x1="25"
                    y1="2"
                    x2="25"
                    y2="48"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#fff" stopOpacity="0.8" />
                    <stop offset="1" stopColor="#fff" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            )}
          </div>

          <span className="button__text">{text}</span>
        </div>
      </button>
    </StyledWrapper>
  );
};







const StyledWrapper = styled.div`
  --clr: #00ad54;

  .button {
    text-decoration: none;
    line-height: 1;
    border-radius: 1.5rem;
    overflow: hidden;
    position: relative;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.05);
    background: #ffffff;
    color: #121212;
    border: none;
    cursor: pointer;
    padding: 0;
  }

  .button-decor {
    position: absolute;
    inset: 0;
    background: var(--clr);
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    z-index: 0;
  }

  .button-content {
    display: flex;
    align-items: center;
    font-weight: 600;
    position: relative;
    z-index: 1;
  }

  .button__icon {
    width: 35px;
    height: 40px;
    background: var(--clr);
    display: grid;
    place-items: center;
  }

  .button__text {
    padding: 1px 1.5rem 1px;
    padding-left: 0.75rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 150px;
    transition: color 0.2s ease;
  }

  .button:hover .button__text {
    color: #fff;
  }

  .button:hover .button-decor {
    transform: translateX(0);
  }
`;



export default ButtonSendToProject;
