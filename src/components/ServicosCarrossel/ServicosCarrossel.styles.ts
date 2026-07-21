import styled from 'styled-components';

export const MarketsSection = styled.section`
  background: #fff;
  padding: clamp(4.5rem, 9vw, 7.5rem) 0;
`;

export const Wrap = styled.div`
  max-width: ${({ theme }) => theme.layout.container};
  margin: 0 auto;
  padding: 0 clamp(1.25rem, 4vw, 3rem);
`;

export const SectionHead = styled.div<{ $visible: boolean }>`
  margin-bottom: clamp(2.5rem, 5vw, 4rem);
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? '0' : '44px')});
  transition: opacity .9s ${({ theme }) => theme.ease},
              transform .9s ${({ theme }) => theme.ease};
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

  &::before {
    content: "";
    width: 26px;
    height: 1px;
    background: ${({ theme }) => theme.colors.gold};
  }
`;

export const Title = styled.h2`
  font-size: clamp(2rem, 3.6vw, 2.9rem);
  line-height: 1.08;
  margin-top: .9rem;
  margin-bottom: 1.4rem;
  color: ${({ theme }) => theme.colors.navy};
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.ink70};
  font-size: 1rem;
  max-width: 65ch;
`;

export const CarouselOuter = styled.div<{ $visible: boolean }>`
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: scale(${({ $visible }) => ($visible ? 1 : 0.94)});
  transition: opacity .9s ${({ theme }) => theme.ease},
              transform .9s ${({ theme }) => theme.ease};
`;

export const CarouselWrap = styled.div`
  overflow: hidden;
  position: relative;
`;

export const Track = styled.div`
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  cursor: grab;
  padding-bottom: .5rem;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  &.dragging {
    cursor: grabbing;
    scroll-snap-type: none;
  }
`;

export const Item = styled.div`
  flex: 0 0 auto;
  width: clamp(160px, 18vw, 220px);
  scroll-snap-align: start;
  user-select: none;
  position: relative;
  overflow: hidden;
  border-radius: 4px;

  @media (max-width: 768px) {
    width: clamp(140px, 30vw, 180px);
  }

  @media (max-width: 550px) {
    width: calc(50% - 0.75rem);
  }

  @media (max-width: 400px) {
    width: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    aspect-ratio: 2/3.15;
    object-fit: cover;
    pointer-events: none;
    transition: transform 0.5s ${({ theme }) => theme.ease};
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.8rem;
`;

export const Arrows = styled.div`
  display: flex;
  gap: .7rem;
`;

export const ArrowBtn = styled.button<{ $disabled: boolean }>`
  width: 44px;
  height: 44px;
  border: 1px solid ${({ theme }) => theme.colors.lineOnCream};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  transition: border-color .3s, color .3s;
  cursor: pointer;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.ink};
  opacity: ${({ $disabled }) => ($disabled ? 0.3 : 1)};
  pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'auto')};

  &:hover {
    border-color: ${({ theme }) => theme.colors.gold};
    color: ${({ theme }) => theme.colors.gold};
  }
`;

export const Dots = styled.div`
  display: flex;
  gap: .5rem;
`;

export const Dot = styled.button<{ $active: boolean }>`
  width: ${({ $active }) => ($active ? '22px' : '8px')};
  height: 8px;
  padding: 0;
  border: none;
  border-radius: ${({ $active }) => ($active ? '4px' : '50%')};
  background: ${({ $active, theme }) => ($active ? theme.colors.gold : theme.colors.lineOnCream)};
  transition: background .3s, width .3s;
  cursor: pointer;
`;