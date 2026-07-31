import styled from 'styled-components';

export const HeroSection = styled.section<{ $bgImage: string }>`
  position: relative;
  color: ${({ theme }) => theme.colors.paper};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: linear-gradient(155deg, rgba(10, 21, 38, .82), rgba(15, 30, 56, .62)),
    url(${({ $bgImage }) => $bgImage});
  background-size: cover;
  background-position: center;
`;

export const Wrap = styled.div`
  max-width: ${({ theme }) => theme.layout.container};
  margin: 0 auto;
  padding: 0 clamp(1.25rem, 4vw, 3rem);
  width: 100%;
`;

export const HeroInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: clamp(2rem, 3.5vw, 3.25rem);
  min-height: 100vh;
  padding: calc(${({ theme }) => theme.layout.headerHeight} + 2rem) 0 4rem;
  max-width: 720px;
  width: 100%;

  @media (max-width: 980px) {
    padding-left: clamp(2rem, 6vw, 4rem);
  }

  @media (max-width: 620px) {
    padding-left: clamp(1rem, 3vw, 1.5rem);
  }
`;

export const HeroContent = styled.div<{ $visible: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const HeroNumber = styled.span<{ $visible: boolean }>`
  font-size: .78rem;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
  opacity: ${({ $visible }) => ($visible ? 0.9 : 0)};
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  gap: 12px;
  transform: translateX(${({ $visible }) => ($visible ? '0' : '-56px')});
  transition: opacity .9s ${({ theme }) => theme.ease} .08s,
              transform .9s ${({ theme }) => theme.ease} .08s;
`;

export const HeroLine = styled.span`
  display: inline-block;
  width: 30px;
  height: 1.5px;
  background: ${({ theme }) => theme.colors.gold};
  flex-shrink: 0;
`;

export const HeroTitle = styled.h1<{ $visible: boolean }>`
  font-size: clamp(2.2rem, 7vw, 4.8rem);
  line-height: 1.04;
  color: ${({ theme }) => theme.colors.paper};
  max-width: 20ch;
  margin-bottom: 0.75rem;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateX(${({ $visible }) => ($visible ? '0' : '-56px')});
  transition: opacity .9s ${({ theme }) => theme.ease} .16s,
              transform .9s ${({ theme }) => theme.ease} .16s;
`;

export const HeroDesc = styled.p<{ $visible: boolean }>`
  font-size: clamp(1rem, 1.4vw, 1.25rem);
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.cream};
  opacity: ${({ $visible }) => ($visible ? 0.82 : 0)};
  max-width: 46ch;
  margin-top: 0.75rem;
  transform: translateX(${({ $visible }) => ($visible ? '0' : '-56px')});
  transition: opacity .9s ${({ theme }) => theme.ease} .24s,
              transform .9s ${({ theme }) => theme.ease} .24s;
`;