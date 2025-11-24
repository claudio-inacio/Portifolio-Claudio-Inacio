import styled from "styled-components";

export const AboutContainer = styled.section`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 20px;
  padding: 20px 24px 60px;
  display: flex;
  flex-direction: column;
  gap: 26px;

  @media (min-width: 768px) {
    padding: 40px 0;
    padding: 20px 24px 60px;
    gap: 32px;
  }
`;

export const Title = styled.h2`
  font-size: 1.9rem;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`;

export const SectionTitle = styled.h3`
  font-size: 1.4rem;
  margin-top: 12px;
  color: ${({ theme }) => theme.colors.black};
  font-weight: 600;
`;

export const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  text-align: justify;
  color: ${({ theme }) => theme.colors.black};
`;
