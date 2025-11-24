import styled from "styled-components";

export const Block = styled.div`
  padding: 14px 16px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Company = styled.h4`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
`;

export const Role = styled.p`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black};
`;

export const Text = styled.p`
  font-size: 0.93rem;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.black};
`;
