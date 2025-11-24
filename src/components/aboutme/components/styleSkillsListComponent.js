import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 5px 0;
`;

export const Item = styled.li`
  background: ${({ theme }) => theme.colors.cardBg};
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};

  &:hover {
    transform: translateY(-2px);
    transition: 0.25s ease;
  }
`;
