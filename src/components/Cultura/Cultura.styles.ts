import styled from 'styled-components';

export const CulturaSection = styled.section`
  background: ${({ theme }) => theme.colors.navy};
  color: ${({ theme }) => theme.colors.cream};
  padding: clamp(4rem, 8vw, 7rem) 0;
  position: relative;
  overflow: hidden;
`;

export const Wrap = styled.div`
  max-width: ${({ theme }) => theme.layout.container};
  margin: 0 auto;
  padding: 0 clamp(1.5rem, 4vw, 3rem);
`;

export const SectionHead = styled.div<{ $visible: boolean }>`
  text-align: center;
  max-width: 700px;
  margin: 0 auto clamp(3rem, 6vw, 5rem);
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY($({ $visible }) => ($visible ? '0' : '32px'));
  transition: opacity 0.9s ${({ theme }) => theme.ease},
              transform 0.9s ${({ theme }) => theme.ease};
`;

export const Title = styled.h2`
  font-size: clamp(2rem, 3.6vw, 2.9rem);
  line-height: 1.08;
  color: ${({ theme }) => theme.colors.cream};
  margin: 0 0 1rem;

  span {
    color: ${({ theme }) => theme.colors.gold};
  }
`;

export const Subtitle = styled.p`
  font-size: clamp(0.9rem, 1vw, 1rem);
  line-height: 1.7;
  color: rgba(250, 248, 244, 0.7);
  margin: 0 auto;
  max-width: 52ch;
`;

export const CardsGrid = styled.div<{ $visible: boolean }>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: clamp(1.25rem, 2vw, 2rem);
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY($({ $visible }) => ($visible ? '0' : '32px'));
  transition: opacity 0.9s ${({ theme }) => theme.ease} 0.1s,
              transform 0.9s ${({ theme }) => theme.ease} 0.1s;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.article<{ $delay: number; $visible: boolean }>`
  position: relative;
  padding: 2rem 1.5rem;
  border: 1px solid rgba(210, 170, 78, 0.35);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.02);
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY($({ $visible }) => ($visible ? '0' : '24px'));
  transition: opacity 0.8s ${({ theme }) => theme.ease} ${({ $delay }) => $delay}s,
              transform 0.8s ${({ theme }) => theme.ease} ${({ $delay }) => $delay}s,
              border-color 0.3s ${({ theme }) => theme.ease},
              background 0.3s ${({ theme }) => theme.ease};

  &:hover {
    border-color: ${({ theme }) => theme.colors.gold};
    background: rgba(210, 170, 78, 0.06);
  }
`;

export const CardNumber = styled.span`
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  color: ${({ theme }) => theme.colors.gold};
  opacity: 0.85;
`;

export const CardTitle = styled.h3`
  font-size: clamp(1.05rem, 1.4vw, 1.25rem);
  font-weight: 500;
  color: ${({ theme }) => theme.colors.cream};
  line-height: 1.25;
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.display};
`;

export const CardText = styled.p`
  font-size: clamp(0.82rem, 0.9vw, 0.9rem);
  line-height: 1.7;
  color: rgba(250, 248, 244, 0.7);
  margin: 0;
`;