import styled from 'styled-components';

export const AboutSection = styled.section`
  background: ${({ theme }) => theme.colors.paper};
  padding: clamp(3rem, 6vw, 5rem) 0;
`;

export const Wrap = styled.div`
  max-width: ${({ theme }) => theme.layout.container};
  margin: 0 auto;
  padding: 0 clamp(1.25rem, 4vw, 3rem);
`;

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(2.5rem, 6vw, 5rem);
  align-items: center;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const AboutMedia = styled.div<{ $bgImage: string; $visible: boolean }>`
  aspect-ratio: 4/5;
  position: relative;
  overflow: hidden;
  background-image: url(${({ $bgImage }) => $bgImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  max-height: 700px;

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateX(${({ $visible }) => ($visible ? '0' : '-56px')});
  transition: opacity .9s ${({ theme }) => theme.ease},
              transform .9s ${({ theme }) => theme.ease};

  &::after {
    content: "";
    position: absolute;
    inset: 10px;
    border: 1px solid ${({ theme }) => theme.colors.gold};
    opacity: 0.5;
    pointer-events: none;
  }

  @media (max-width: 980px) {
    order: 2;
    max-height: 400px;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    max-height: 300px;
  }
`;

export const AboutCopy = styled.div<{ $visible: boolean }>`
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateX(${({ $visible }) => ($visible ? '0' : '56px')});
  transition: opacity .9s ${({ theme }) => theme.ease},
              transform .9s ${({ theme }) => theme.ease};

  @media (max-width: 980px) {
    order: 1;
    width: 100%;
  }
`;

export const Title = styled.h2`
  font-size: clamp(1.9rem, 3.4vw, 2.5rem);
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: 1.4rem;
  max-width: 18ch;

  @media (max-width: 980px) {
    max-width: 100%;
  }
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.ink70};
  margin-bottom: 1.1rem;
  max-width: 52ch;

  @media (max-width: 980px) {
    max-width: 100%;
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;