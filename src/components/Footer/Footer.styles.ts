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
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 0.6fr;
  gap: clamp(5px, 0.8vw, 12px);
  align-items: center;
  justify-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 40px;
    justify-items: center;
  }
`;

export const FooterLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
  width: 100%;
  max-width: 650px;
  justify-content: flex-start;

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
    gap: 20px;
    max-width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin: 0;
  padding: 0;

  svg {
    height: 90px;
    width: auto;
    display: block;

    .lopez-text {
      fill: #ffffff;
    }

    .linha {
      fill: #d2aa4e;
    }

    .engenharia-text {
      fill: ${({ theme }) => theme.colors.gold};
    }
  }

  @media (max-width: 1024px) {
    justify-content: center;
    width: 100%;
  }

  @media (max-width: 768px) {
    svg {
      height: 100px;
    }
  }

  @media (max-width: 480px) {
    svg {
      height: 80px;
    }
  }
`;

export const FooterLeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  flex: 1;
  margin: 0;
  padding: 0;

  @media (max-width: 1024px) {
    align-items: center;
    text-align: center;
    width: 100%;
    padding: 0;
  }
`;

export const FooterBrandText = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;

  p {
    font-size: clamp(0.85rem, 0.9vw, 0.95rem);
    line-height: 1.7;
    max-width: 550px;
    color: rgba(250, 248, 244, 0.55);
    text-align: left;
    margin: 0;
    padding: 0;

    @media (max-width: 1024px) {
      text-align: center;
      max-width: 500px;
      margin: 0 auto;
    }

    @media (max-width: 768px) {
      max-width: 400px;
    }

    @media (max-width: 600px) {
      max-width: 320px;
    }

    @media (max-width: 480px) {
      max-width: 280px;
    }
  }
`;

export const FooterSocial = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 0;
  padding: 0;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

export const SocialLink = styled.a`
  width: clamp(34px, 3.5vw, 40px);
  height: clamp(34px, 3.5vw, 40px);
  border-radius: 50%;
  border: 1.5px solid rgba(250, 248, 244, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(250, 248, 244, 0.6);
  font-size: clamp(0.75rem, 0.8vw, 0.85rem);
  transition: all 0.35s ${({ theme }) => theme.ease};
  margin: 0;
  padding: 0;

  &:hover {
    background: ${({ theme }) => theme.colors.gold};
    border-color: ${({ theme }) => theme.colors.gold};
    color: ${({ theme }) => theme.colors.navyDeep};
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(210, 170, 78, 0.25);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
  max-width: 400px;
  justify-self: center;
  margin: 0;
  padding: 0;

  @media (max-width: 1024px) {
    align-items: center;
    text-align: center;
    max-width: 100%;
    justify-self: center;
  }
`;

export const FooterCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
  margin: 0;
  padding: 0;

  @media (max-width: 1024px) {
    align-items: center;
    text-align: center;
  }

  h4 {
    font-size: clamp(0.7rem, 0.8vw, 0.8rem);
    font-family: ${({ theme }) => theme.fonts.body};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gold};
    text-transform: uppercase;
    letter-spacing: 0.16em;
    margin-bottom: 4px;
    margin: 0;
    padding: 0;
  }
`;

export const FooterContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: rgba(250, 248, 244, 0.55);
  font-size: clamp(0.85rem, 0.9vw, 0.95rem);
  padding: 4px 0;
  cursor: default;
  margin: 0;

  i {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.gold};
    width: 20px;
    text-align: center;
    flex-shrink: 0;
  }

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

export const FooterBottom = styled.div`
  max-width: ${({ theme }) => theme.layout.container};
  margin: 0 auto;
  padding: 22px clamp(1.5rem, 4vw, 3rem);
  text-align: center;
  font-size: clamp(0.7rem, 0.8vw, 0.8rem);
  color: rgba(250, 248, 244, 0.35);
  border-top: 1px solid ${({ theme }) => theme.colors.lineOnNavy};

  span {
    color: ${({ theme }) => theme.colors.gold};
  }
`;