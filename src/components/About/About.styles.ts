import styled from 'styled-components';

export const AboutSection = styled.section`
  background: #fff;
  padding: clamp(4.5rem, 9vw, 7.5rem) 0;
`;

export const Wrap = styled.div`
  max-width: ${({ theme }) => theme.layout.container};
  margin: 0 auto;
  padding: 0 clamp(1.25rem, 4vw, 3rem);
`;

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: .95fr 1.05fr;
  gap: clamp(2.5rem, 6vw, 5rem);
  align-items: center;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const AboutMedia = styled.div<{ $bgImage: string; $visible: boolean }>`
  aspect-ratio: 4/5;
  position: relative;
  overflow: hidden;
  background-image: url(${({ $bgImage }) => $bgImage});
  background-size: cover;
  background-position: center;

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateX(${({ $visible }) => ($visible ? '0' : '-56px')});
  transition: opacity .9s ${({ theme }) => theme.ease},
              transform .9s ${({ theme }) => theme.ease};

  &::after {
    content: "";
    position: absolute;
    inset: 10px;
    border: 1px solid rgba(210, 170, 78, .5);
    pointer-events: none;
  }

  @media (max-width: 980px) {
    order: 2;
  }
`;

export const AboutCopy = styled.div<{ $visible: boolean }>`
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateX(${({ $visible }) => ($visible ? '0' : '56px')});
  transition: opacity .9s ${({ theme }) => theme.ease},
              transform .9s ${({ theme }) => theme.ease};

  @media (max-width: 980px) {
    order: 1;
  }
`;

export const Eyebrow = styled.span`
  font-size: .72rem;
  font-weight: 600;
  letter-spacing: .22em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
  display: inline-flex;
  align-items: center;
  gap: .6em;
  margin-bottom: 1rem;

  &::before {
    content: "";
    width: 26px;
    height: 1px;
    background: ${({ theme }) => theme.colors.gold};
  }
`;

export const Title = styled.h2`
  font-size: clamp(1.9rem, 3.4vw, 2.5rem);
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: 1.4rem;
  max-width: 18ch;
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.ink70};
  margin-bottom: 1.1rem;
  max-width: 52ch;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: clamp(1.5rem, 3vw, 3rem);
  margin-top: 2.2rem;

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, auto);
  }
`;

export const StatItem = styled.div`
  strong {
    display: block;
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: clamp(1.8rem, 2.4vw, 2.6rem);
    color: ${({ theme }) => theme.colors.navy};
  }

  span {
    font-size: .76rem;
    letter-spacing: .08em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.ink70};
  }
`;