import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.colors.navy};
  color: rgba(250, 248, 244, 0.8);
`;

export const FooterTop = styled.div`
  max-width: ${({ theme }) => theme.layout.container};
  margin: 0 auto;
  padding: clamp(50px, 7vh, 90px) clamp(1.25rem, 4vw, 3rem) clamp(34px, 4vh, 60px);
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: clamp(32px, 4vw, 54px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.lineOnNavy};
  text-align: left;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 34px;
  }
`;

export const FooterBrand = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const FooterLogo = styled.div`
  flex-shrink: 0;

  img {
    height: 200px;
    width: auto;
    max-width: 100%;
  }

  @media (max-width: 1024px) {
    img {
      height: 180px;
    }
  }

  @media (max-width: 620px) {
    img {
      height: 140px;
    }
  }

  @media (max-width: 480px) {
    img {
      height: 120px;
    }
  }
`;

export const FooterBrandText = styled.div`
  p {
    font-size: clamp(0.87rem, 1vw, 0.96rem);
    line-height: 1.85;
    max-width: 360px;
    color: rgba(250, 248, 244, 0.55);
    text-align: justify;

    @media (max-width: 1024px) {
      max-width: 100%;
      text-align: center;
    }
  }
`;

export const FooterSocial = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 22px;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

export const SocialLink = styled.a`
  width: clamp(38px, 4vw, 42px);
  height: clamp(38px, 4vw, 42px);
  border-radius: 50%;
  border: 1px solid rgba(250, 248, 244, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(250, 248, 244, 0.55);
  font-size: clamp(0.87rem, 1vw, 1rem);
  transition: all 0.35s ${({ theme }) => theme.ease};

  &:hover {
    background: ${({ theme }) => theme.colors.gold};
    border-color: ${({ theme }) => theme.colors.gold};
    color: ${({ theme }) => theme.colors.ink};
    transform: translateY(-3px);
  }
`;

export const FooterCol = styled.div`
  @media (max-width: 1024px) {
    text-align: center;
  }

  h4 {
    font-size: clamp(0.66rem, 0.8vw, 0.76rem);
    font-family: ${({ theme }) => theme.fonts.body};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gold};
    margin-bottom: 22px;
    text-transform: uppercase;
    letter-spacing: .14em;
  }
`;

export const FooterContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  color: rgba(250, 248, 244, 0.55);
  font-size: clamp(0.87rem, 1vw, 0.96rem);
  margin-bottom: 16px;

  i {
    font-size: 1.05rem;
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
  padding: 22px clamp(1.25rem, 4vw, 3rem);
  text-align: center;
  font-size: clamp(0.72rem, 0.8vw, 0.82rem);
  color: rgba(250, 248, 244, 0.4);

  span {
    color: ${({ theme }) => theme.colors.gold};
  }
`;