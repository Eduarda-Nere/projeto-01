import styled from 'styled-components';

export const ProjectsSection = styled.section`
  background: ${({ theme }) => theme.colors.navy};
  color: ${({ theme }) => theme.colors.paper};
  padding: clamp(4.5rem, 9vw, 7.5rem) 0;
  position: relative;
  overflow: hidden;
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

  h2 {
    color: ${({ theme }) => theme.colors.paper};
  }

  p {
    color: ${({ theme }) => theme.colors.cream};
    opacity: .7;
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
`;

export const Description = styled.p`
  font-size: 1rem;
  max-width: 44ch;
  margin: 0 auto;
`;

export const Filters = styled.div<{ $visible: boolean }>`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2.5rem;
  justify-content: center;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? '0' : '44px')});
  transition: opacity .9s ${({ theme }) => theme.ease},
              transform .9s ${({ theme }) => theme.ease};

  @media (max-width: 620px) {
    gap: 0.4rem;
  }
`;

export const FilterBtn = styled.button<{ $active: boolean }>`
  background: ${({ $active }) => ($active ? 'var(--gold, #d2aa4e)' : 'rgba(255, 255, 255, 0.06)')};
  background: ${({ $active, theme }) => ($active ? theme.colors.gold : 'rgba(255, 255, 255, 0.06)')};
  border: 1px solid ${({ $active, theme }) => ($active ? theme.colors.gold : 'rgba(255, 255, 255, 0.12)')};
  color: ${({ $active, theme }) => ($active ? theme.colors.navyDeep : theme.colors.cream)};
  padding: 0.5rem 1.4rem;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ${({ theme }) => theme.ease};
  letter-spacing: 0.04em;
  opacity: ${({ $active }) => ($active ? 1 : 0.7)};

  &:hover {
    opacity: 1;
    background: ${({ $active, theme }) => ($active ? theme.colors.gold : 'rgba(255, 255, 255, 0.1)')};
  }

  @media (max-width: 620px) {
    font-size: 0.7rem;
    padding: 0.4rem 1rem;
  }
`;

export const ProjectGrid = styled.div<{ $visible: boolean }>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(1.5rem, 2.5vw, 2rem);
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: scale(${({ $visible }) => ($visible ? 1 : 0.94)});
  transition: opacity .9s ${({ theme }) => theme.ease},
              transform .9s ${({ theme }) => theme.ease};

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
    max-width: 420px;
    margin: 0 auto;
  }
`;

export const Card = styled.article`
  background: rgba(255, 255, 255, 0.04);
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition: all 0.45s ${({ theme }) => theme.ease};
  position: relative;
  cursor: pointer;
  animation: cardFade 0.5s ${({ theme }) => theme.ease};

  @keyframes cardFade {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(210, 170, 78, 0.3);
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.5);
  }
`;

export const CardMedia = styled.div`
  aspect-ratio: 4/3;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.7s ${({ theme }) => theme.ease};
  }

  ${Card}:hover & img {
    transform: scale(1.06);
  }
`;

export const CardTag = styled.span`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: ${({ theme }) => theme.colors.gold};
  color: ${({ theme }) => theme.colors.navyDeep};
  font-size: 0.6rem;
  font-weight: 600;
  padding: 0.25rem 0.9rem;
  border-radius: 999px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  opacity: 0;
  transform: translateY(-10px);
  transition: all 0.4s ${({ theme }) => theme.ease};

  ${Card}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const CardInfo = styled.div`
  padding: 1.4rem 1.5rem 1.8rem;

  h3 {
    font-size: 1.15rem;
    margin-bottom: 0.4rem;
    color: ${({ theme }) => theme.colors.paper};
    font-weight: 600;
  }
`;

export const CardExcerpt = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.cream};
  opacity: 0.55;
  line-height: 1.6;
  max-width: 30ch;
`;

export const CardMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.8rem;
  padding-top: 0.8rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);

  span {
    font-size: 0.7rem;
    color: ${({ theme }) => theme.colors.cream};
    opacity: 0.4;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  i {
    color: ${({ theme }) => theme.colors.gold};
    opacity: 0.6;
    transition: all 0.3s ${({ theme }) => theme.ease};
  }

  ${Card}:hover & i {
    opacity: 1;
    transform: translateX(4px);
  }
`;

export const ProjectsCta = styled.div<{ $visible: boolean }>`
  text-align: center;
  margin-top: 3rem;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? '0' : '44px')});
  transition: opacity .9s ${({ theme }) => theme.ease},
              transform .9s ${({ theme }) => theme.ease};

  a {
    display: inline-block;
    padding: .6rem 1.5rem;
    border: 1.5px solid rgba(255, 255, 255, 0.25);
    border-radius: 999px;
    color: ${({ theme }) => theme.colors.paper};
    text-transform: uppercase;
    font-size: .78rem;
    font-weight: 600;
    letter-spacing: .06em;
    cursor: pointer;
    transition: all .25s ${({ theme }) => theme.ease};

    &:hover {
      background: ${({ theme }) => theme.colors.gold};
      border-color: ${({ theme }) => theme.colors.gold};
      color: ${({ theme }) => theme.colors.navyDeep};
    }
  }
`;