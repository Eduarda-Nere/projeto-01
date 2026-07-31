import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.colors.navy};
  color: rgba(250, 248, 244, 0.8);
`;

export const FooterTop = styled.div`
  max-width: ${({ theme }) => theme.layout.container};
  margin: 0 auto;
  padding: clamp(50px, 7vh, 90px) clamp(1.25rem, 4vw, 3rem) clamp(34px, 4vh, 60px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.lineOnNavy};
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: clamp(40px, 6vw, 80px);
  align-items: center;
  justify-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 40px;
    justify-items: center;
    max-width: 600px;
    margin: 0 auto;
  }

  @media (max-width: 600px) {
    max-width: 100%;
    padding: 0 0.5rem;
    gap: 30px;
  }
`;

export const FooterLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
  width: 100%;
  max-width: 550px;
  justify-content: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
    gap: 6px;
    max-width: 100%;
    padding: 0 1rem;
  }

  @media (max-width: 600px) {
    padding: 0 0.5rem;
    gap: 4px;
  }
`;

export const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  img {
    width: 200px;
    height: auto;
    max-width: 100%;
    object-fit: contain;
    display: block;
  }

  @media (max-width: 1024px) {
    margin-bottom: -15px;
  }

  @media (max-width: 600px) {
    margin-bottom: -15px;
  }
`;

export const FooterLeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  flex: 1;

  @media (max-width: 1024px) {
    align-items: center;
    text-align: center;
    width: 100%;
    gap: 15px;
    margin-top: -15px;
  }

  @media (max-width: 600px) {
    gap: 15px;
    margin-top: -15px;
  }
`;

export const FooterBrandText = styled.div`
  width: 100%;

  p {
    font-size: clamp(0.85rem, 0.9vw, 0.95rem);
    line-height: 1.7;
    max-width: 400px;
    color: rgba(250, 248, 244, 0.55);
    text-align: left;

    @media (max-width: 1024px) {
      text-align: center;
      max-width: 100%;
      word-wrap: break-word;
      hyphens: auto;
      padding: 0 0.5rem;
      font-size: 0.9rem;
      line-height: 1.6;
      margin: 0;
    }
  }

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
  }
`;

export const FooterSocial = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media (max-width: 1024px) {
    justify-content: center;
    gap: 10px;
  }

  @media (max-width: 600px) {
    gap: 8px;
  }
`;

export const SocialLink = styled.a`
  width: clamp(40px, 4vw, 46px);
  height: clamp(40px, 4vw, 46px);
  border-radius: 50%;
  border: 1.5px solid rgba(250, 248, 244, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(250, 248, 244, 0.6);
  font-size: clamp(0.9rem, 1vw, 1.05rem);
  transition: all 0.35s ${({ theme }) => theme.ease};

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

  @media (max-width: 1024px) {
    width: 40px;
    height: 40px;
    font-size: 0.9rem;
  }

  @media (max-width: 600px) {
    width: 36px;
    height: 36px;
    font-size: 0.8rem;
  }
`;

export const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
  max-width: 350px;
  justify-self: center;

  @media (max-width: 1024px) {
    align-items: center;
    text-align: center;
    max-width: 100%;
    padding: 0 1rem;
    gap: 4px;
  }

  @media (max-width: 600px) {
    padding: 0 0.5rem;
    gap: 2px;
  }
`;

export const FooterCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;

  @media (max-width: 1024px) {
    align-items: center;
    text-align: center;
    gap: 4px;
  }

  h4 {
    font-size: clamp(0.7rem, 0.8vw, 0.8rem);
    font-family: ${({ theme }) => theme.fonts.body};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gold};
    text-transform: uppercase;
    letter-spacing: 0.16em;
    margin-bottom: 4px;

    @media (max-width: 1024px) {
      margin-bottom: 2px;
    }
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
  width: 100%;
  justify-content: flex-start;

  i {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.gold};
    width: 20px;
    text-align: center;
    flex-shrink: 0;
  }

  @media (max-width: 1024px) {
    justify-content: center;
    width: auto;
    max-width: 100%;
    word-wrap: break-word;
    hyphens: auto;
    padding: 2px 0;
    font-size: 0.85rem;
    gap: 10px;
  }

  @media (max-width: 600px) {
    font-size: 0.8rem;
    gap: 8px;
    padding: 1px 0;
  }
`;

export const FooterBottom = styled.div`
  max-width: ${({ theme }) => theme.layout.container};
  margin: 0 auto;
  padding: 22px clamp(1.25rem, 4vw, 3rem);
  text-align: center;
  font-size: clamp(0.7rem, 0.8vw, 0.8rem);
  color: rgba(250, 248, 244, 0.35);
  border-top: 1px solid ${({ theme }) => theme.colors.lineOnNavy};

  span {
    color: ${({ theme }) => theme.colors.gold};
  }

  @media (max-width: 600px) {
    padding: 22px 1rem;
  }
`;