// src/components/Projects/Projects.styles.ts
import styled from 'styled-components';

export const ProjectsSection = styled.section`
  background: ${({ theme }) => theme.colors.paper};
  padding: clamp(3rem, 6vw, 5rem) 0;
  scroll-margin-top: 80px;
`;

export const Wrap = styled.div`
  max-width: ${({ theme }) => theme.layout.container};
  margin: 0 auto;
  padding: 0 clamp(1.5rem, 4vw, 3rem);
`;

export const SectionHead = styled.div<{ $visible: boolean }>`
  text-align: center;
  max-width: 700px;
  margin: 0 auto clamp(2.5rem, 5vw, 4rem);
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? '0' : '44px')});
  transition: opacity .9s ${({ theme }) => theme.ease},
              transform .9s ${({ theme }) => theme.ease};
`;

export const Title = styled.h2`
  font-size: clamp(1.9rem, 3.4vw, 2.5rem);
  line-height: 1.08;
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: 1rem;
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.ink70};
  font-size: 1rem;
  line-height: 1.7;
  max-width: 52ch;
  margin: 0 auto;
`;

export const CardsGrid = styled.div<{ $visible: boolean }>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? '0' : '44px')});
  transition: opacity .9s ${({ theme }) => theme.ease},
              transform .9s ${({ theme }) => theme.ease};

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div<{ $bgImage: string }>`
  position: relative;
  aspect-ratio: 4/5;
  border-radius: 1.5rem;
  overflow: hidden;
  background-image: url(${({ $bgImage }) => $bgImage});
  background-size: cover;
  background-position: center;
  cursor: pointer;
  transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 600px) {
    aspect-ratio: 4/3;
  }
`;

export const CardOverlay = styled.div<{ $isHovered: boolean }>`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(10, 21, 38, 0.85) 0%,
    rgba(10, 21, 38, 0.3) 50%,
    rgba(10, 21, 38, 0.1) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2rem;
  transition: background 0.5s ${({ theme }) => theme.ease};

  ${({ $isHovered }) =>
    $isHovered &&
    `
    background: linear-gradient(
      to top,
      rgba(10, 21, 38, 0.92) 0%,
      rgba(10, 21, 38, 0.6) 60%,
      rgba(10, 21, 38, 0.2) 100%
    );
  `}

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transform: translateY(0);
  transition: transform 0.5s ${({ theme }) => theme.ease};
`;

export const CardTag = styled.span`
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
  opacity: 0.8;
`;

export const CardTitle = styled.h3`
  font-size: clamp(1.3rem, 1.6vw, 1.8rem);
  font-weight: 500;
  color: #ffffff;
  line-height: 1.2;
  transition: transform 0.5s ${({ theme }) => theme.ease};
`;

export const CardDescription = styled.p<{ $isHovered: boolean }>`
  font-size: 0.9rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  max-height: ${({ $isHovered }) => ($isHovered ? '180px' : '0')};
  opacity: ${({ $isHovered }) => ($isHovered ? 1 : 0)};
  overflow: hidden;
  transition: max-height 0.5s ${({ theme }) => theme.ease},
              opacity 0.4s ${({ theme }) => theme.ease},
              margin 0.4s ${({ theme }) => theme.ease};
  margin-top: ${({ $isHovered }) => ($isHovered ? '0.5rem' : '0')};

  @media (max-width: 768px) {
    max-height: ${({ $isHovered }) => ($isHovered ? '300px' : '0')};
  }
`;