import styled from "styled-components";

export const TechnologieItem = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 14px;
  border: 1px solid #333;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: 0.2s ease;
  cursor: default;

  &:hover {
    transform: translateY(-4px);
    border-color: #6a7dfc;
    cursor: pointer;
    box-shadow: 0 0 12px #6a7dfc40;
  }
  &:hover span.tooltip {
    opacity: 1;
    visibility: visible;
    transform: translate(-50%, -10px);
  }

  /* MOBILE */
  @media (max-width: 710px) {
    width: 95px;
    height: 95px;
  }
`;

export const TechIcon = styled.div`
  font-size: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 710px) {
    font-size: 32px;
  }

  i {
    font-size: inherit;
  }
`;

export const TechName = styled.span`
  font-size: 0.9rem;
  font-weight: 800;
  color: #595959;

  @media (max-width: 710px) {
    font-size: 0.75rem;
  }
`;


export const Tooltip = styled.span`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 6px 10px;
  background-color: #b3b3b3;
  color: #fff;
  font-size: 0.75rem;
  border-radius: 6px;
  opacity: 0;
  visibility: hidden;
  transition: 0.25s ease;
  white-space: nowrap;
  pointer-events: none;
`;