import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.colors.navy};
  color: rgba(250, 248, 244, 0.8);
`;

export const FooterTop = styled.div`
  max-width: ${({ theme }) => theme.layout.container};
  margin: 0 auto;
  padding: clamp(3rem, 6vw, 5rem) clamp(1.5rem, 4vw, 3rem) clamp(2rem, 4vh, 3rem);
  border-bottom: 1px solid ${({ theme }) => theme.colors.lineOnNavy};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const FooterBrand = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 24px;
  max-width: 800px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  svg {
    height: 90px;
    width: auto;
    display: block;

    .lopez-text {
      fill: #ffffff;
    }

    .linha {
      fill: ${({ theme }) => theme.colors.gold};
    }

    .engenharia-text {
      fill: ${({ theme }) => theme.colors.gold};
    }
  }

  @media (max-width: 480px) {
    svg {
      height: 76px;
    }
  }
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 550px;
  width: 100%;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const FooterTagline = styled.p`
  font-size: clamp(0.85rem, 0.9vw, 0.95rem);
  line-height: 1.7;
  color: rgba(250, 248, 244, 0.65);
  margin: 0 0 1.25rem 0;
  text-align: left;
  width: 100%;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const FooterContactWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 0.75rem;
  }
`;

const FooterContactBase = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(250, 248, 244, 0.65);
  font-size: clamp(0.85rem, 0.9vw, 0.95rem);

  i {
    color: ${({ theme }) => theme.colors.gold};
    font-size: 0.9rem;
    width: 18px;
    text-align: center;
    flex-shrink: 0;
  }

  span {
    white-space: nowrap;
  }

  @media (max-width: 768px) {
    span {
      white-space: normal;
    }
  }
`;

export const FooterContactWithIcon = styled(FooterContactBase)``;

export const FooterContactItem = styled(FooterContactBase).attrs({ as: 'a' })`
  text-decoration: none;
  transition: color 0.3s ${({ theme }) => theme.ease};

  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }
`;

export const FooterBottom = styled.div`
  max-width: ${({ theme }) => theme.layout.container};
  margin: 0 auto;
  padding: 22px clamp(1.5rem, 4vw, 3rem);
  text-align: center;
  font-size: clamp(0.7rem, 0.8vw, 0.8rem);
  color: rgba(250, 248, 244, 0.6);
`;