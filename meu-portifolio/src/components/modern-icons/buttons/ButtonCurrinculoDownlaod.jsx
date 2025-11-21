import React from "react";
import styled from "styled-components";

const ButtonCurrinculoDownlaod = ({ handleDownload }) => {
  return (
    <StyledWrapper>
      <button className="download-button" onClick={() => handleDownload()}>
        <div className="docs">
          <svg
            viewBox="0 0 24 24"
            width={18}
            height={18}
            stroke="currentColor"
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1={16} y1={13} x2={8} y2={13} />
            <line x1={16} y1={17} x2={8} y2={17} />
            <polyline points="10 9 9 9 8 9" />
          </svg>

          <span className="label-normal">Curriculo</span>
          <span className="label-hover">Baixar</span>
        </div>

        <div className="download">
          <svg
            viewBox="0 0 24 24"
            width={24}
            height={24}
            stroke="currentColor"
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1={12} y1={15} x2={12} y2={3} />
          </svg>
        </div>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .download-button {
    padding: 10px;
    position: relative;
    border-width: 0;
    color: ${({ theme }) => theme.colors.white};
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 25px;
    cursor: pointer;
    border-radius: 6px;
    z-index: 1;
  }

  .docs {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #fff;
    min-height: 24px;
    padding: 0 8px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: all 0.4s ease;
    position: relative;
  }

  .label-normal,
  .label-hover {
    color: #fff;
  }

  .label-normal {
    opacity: 1;
    transition: opacity 0.2s;
  }

  .label-hover {
    opacity: 0;
    position: absolute;
    left: 30px;
    transition: opacity 0.2s;
  }

  .download-button:hover .label-normal {
    opacity: 0;
  }

  .download-button:hover .label-hover {
    opacity: 1;
  }

  .download {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 90%;
    margin: 0 auto;
    z-index: -1;
    border-radius: 6px;
    transform: translateY(0%);
    background-color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primaryDark};
    transition: all 0.4s ease;
  }

  .download-button:hover .download {
    transform: translateY(100%);
  }
`;

export default ButtonCurrinculoDownlaod;
