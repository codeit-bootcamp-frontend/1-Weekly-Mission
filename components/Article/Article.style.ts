import styled from 'styled-components';

export const ArticleContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ArticleSection = styled.div`
  display: flex;
  flex-direction: column;
  aliens-items: center;
  gap: 40px;

  @media ${({ theme }) => theme.device.mobile} {
    gap: 32px;
  }
`;

export const Paragraph = styled.p`
  color: var(--gray-100);
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -0.2px;

  span {
    font-size: 32px;
    color: var(--gray-60);
  }
`;

export const Keyword = styled.span`
  font-size: 32px;
  color: var(--gray-60);
`;
