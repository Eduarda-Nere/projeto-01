import styled from 'styled-components';

export const HeroSection = styled.section`
  position: relative;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.paper};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const HeroBg = styled.video`
  position: absolute;
  top: -10%;
  left: 0;
  width: 100%;
  height: 120%;
  z-index: -2;
  object-fit: cover;
  will-change: transform;
`;

export const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;
  background: linear-gradient(155deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.46));
`;

export const Wrap = styled.div`
  max-width: ${({ theme }) => theme.layout.container};
  margin: 0 auto;
  padding: 0 clamp(1.5rem, 4vw, 3rem);
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
  max-width: 100%;
  width: 100%;
`;

export const HeroContent = styled.div<{ $visible: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
`;

export const HeroTitle = styled.h1<{ $visible: boolean }>`
  font-size: clamp(3.7rem, 8.5vw, 6rem);
  line-height: 1;
  color: ${({ theme }) => theme.colors.paper};
  max-width: 16ch;
  margin: 0;
  margin-bottom: 0.75rem;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? '0' : '44px')});
  text-shadow: 0 4px 48px rgba(0, 0, 0, .6);
  letter-spacing: -0.03em;
  transition: opacity .9s ${({ theme }) => theme.ease} .16s,
              transform .9s ${({ theme }) => theme.ease} .16s;
`;

export const HeroDesc = styled.p<{ $visible: boolean }>`
  font-size: clamp(0.9rem, 1.2vw, 1.1rem);
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.85);
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  max-width: 60ch;
  margin: 0;
  margin-top: 0.75rem;
  transform: translateY(${({ $visible }) => ($visible ? '0' : '44px')});
  text-shadow: 0 1px 24px rgba(0, 0, 0, .4);
  transition: opacity .9s ${({ theme }) => theme.ease} .24s,
              transform .9s ${({ theme }) => theme.ease} .24s;
`;