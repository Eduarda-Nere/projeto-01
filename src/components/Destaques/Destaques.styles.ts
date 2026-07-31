import styled from 'styled-components';

export const DestaquesSection = styled.section`
  padding: clamp(4.5rem, 9vw, 7.5rem) 0;
  background: #fff;
`;

export const Wrap = styled.div`
  max-width: ${({ theme }) => theme.layout.container};
  margin: 0 auto;
  padding: 0 clamp(1.25rem, 4vw, 3rem);
`;

export const SectionHeadCenter = styled.div<{ $visible: boolean }>`
  text-align: center;
  max-width: 700px;
  margin: 0 auto clamp(2.5rem, 5vw, 4rem);
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
  justify-content: center;

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
  max-width: 44ch;
  margin: 0 auto;
`;

export const Carousel = styled.div<{ $visible: boolean }>`
  margin-top: clamp(2rem, 4vw, 3rem);
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: scale(${({ $visible }) => ($visible ? 1 : 0.94)});
  transition: opacity .9s ${({ theme }) => theme.ease},
              transform .9s ${({ theme }) => theme.ease};
`;

export const Viewport = styled.div`
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.lineOnCream};
`;

export const Track = styled.div<{ $index: number }>`
  display: flex;
  transition: transform .7s ${({ theme }) => theme.ease};
  transform: translateX(-${({ $index }) => $index * 100}%);
`;

export const Slide = styled.article`
  min-width: 100%;
  display: grid;
  grid-template-columns: 1.1fr 1fr;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const SlideImg = styled.div`
  overflow: hidden;

  @media (max-width: 900px) {
    aspect-ratio: 16/9;
    width: 100%;
    min-height: 200px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform .6s ${({ theme }) => theme.ease};
  }

  ${Slide}:hover & img {
    transform: scale(1.04);
  }
`;

export const SlideInfo = styled.div`
  padding: clamp(1.6rem, 3vw, 3.2rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.colors.navy};
  color: ${({ theme }) => theme.colors.cream};

  @media (max-width: 900px) {
    padding: 1.8rem 1.5rem 2rem;
  }

  @media (max-width: 600px) {
    padding: 1.4rem 1.2rem 1.6rem;
  }
`;

export const Tag = styled.span`
  display: inline-block;
  width: fit-content;
  font-size: 0.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gold};
  background: rgba(210, 170, 78, 0.12);
  padding: 4px 14px;
  border-radius: 20px;
  margin-bottom: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const SlideTitle = styled.h3`
  font-size: clamp(1.3rem, 2vw, 1.9rem);
  color: #fff;
  margin-bottom: .6rem;

  @media (max-width: 900px) {
    font-size: 1.4rem;
  }

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

export const SlideDesc = styled.p`
  color: rgba(246, 242, 233, .75);
  font-size: clamp(0.9rem, 1vw, 1rem);
  line-height: 1.8;
  max-width: 46ch;

  @media (max-width: 900px) {
    font-size: 0.95rem;
    max-width: 100%;
  }

  @media (max-width: 600px) {
    font-size: 0.88rem;
  }
`;

export const SlideBtn = styled.a`
  margin-top: 1.3rem;
  width: fit-content;
  font-size: 0.72rem;
  padding: 0.6rem 1.4rem;
  font-weight: 600;
  letter-spacing: .06em;
  text-transform: uppercase;
  border: 1.5px solid ${({ theme }) => theme.colors.gold};
  border-radius: 999px;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.gold};
  color: ${({ theme }) => theme.colors.navyDeep};
  transition: all .25s ${({ theme }) => theme.ease};

  &:hover {
    background: ${({ theme }) => theme.colors.goldSoft};
    border-color: ${({ theme }) => theme.colors.goldSoft};
  }

  @media (max-width: 900px) {
    font-size: 0.7rem;
    padding: 0.5rem 1.2rem;
  }
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.8rem;

  @media (max-width: 600px) {
    flex-direction: column-reverse;
    gap: 1rem;
    align-items: center;
  }
`;

export const Arrows = styled.div`
  display: flex;
  gap: .7rem;

  @media (max-width: 600px) {
    gap: 0.5rem;
  }
`;

export const ArrowBtn = styled.button`
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

  &:hover {
    border-color: ${({ theme }) => theme.colors.gold};
    color: ${({ theme }) => theme.colors.gold};
  }

  @media (max-width: 600px) {
    width: 38px;
    height: 38px;
    font-size: 0.8rem;
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