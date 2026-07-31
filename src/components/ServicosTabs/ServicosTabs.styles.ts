import styled from 'styled-components';

export const SvBlock = styled.div`
  margin-top: clamp(3.5rem, 7vw, 6rem);
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
  color: ${({ theme }) => theme.colors.navy};
`;

export const TabsWrap = styled.div<{ $visible: boolean }>`
  display: flex;
  gap: clamp(2rem, 4vw, 4.5rem);
  align-items: flex-start;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? '0' : '44px')});
  transition: opacity .9s ${({ theme }) => theme.ease},
              transform .9s ${({ theme }) => theme.ease};

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const TabsList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 260px;
  position: relative;
  border-left: 1px solid ${({ theme }) => theme.colors.lineOnCream};

  @media (max-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
    border-left: none;
    width: 100%;
    flex: 0 0 auto;
    gap: 0;
  }

  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

export const TabIndicator = styled.span<{ $top: number; $height: number }>`
  position: absolute;
  left: -1px;
  top: 0;
  width: 2px;
  height: ${({ $height }) => $height}px;
  background: ${({ theme }) => theme.colors.gold};
  transform: translateY(${({ $top }) => $top}px);
  transition: transform .5s ${({ theme }) => theme.ease}, height .5s ${({ theme }) => theme.ease};

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const TabButton = styled.button<{ $active: boolean }>`
  text-align: left;
  padding: 1.15rem 0 1.15rem 1.5rem;
  font-size: .98rem;
  font-weight: ${({ $active }) => ($active ? 600 : 500)};
  color: ${({ $active, theme }) => ($active ? theme.colors.navy : theme.colors.ink70)};
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.body};
  transition: color .3s, padding-left .3s;
  padding-left: ${({ $active }) => ($active ? '1.9rem' : '1.5rem')};

  &:hover {
    color: ${({ theme }) => theme.colors.navy};
  }

  @media (max-width: 1024px) {
    padding: 0.8rem 1.2rem;
    font-size: 0.9rem;
    flex: 0 0 calc(50% - 0.5rem);
    text-align: center;
    border-bottom: 2px solid ${({ $active, theme }) => ($active ? theme.colors.gold : 'transparent')};
    margin-bottom: -2px;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 0.7rem 1rem;
  }

  @media (max-width: 550px) {
    flex: 0 0 100%;
    text-align: left;
    padding: 0.8rem 0 0.8rem 1.2rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lineOnCream};
    border-left: 2px solid ${({ $active, theme }) => ($active ? theme.colors.gold : 'transparent')};
    margin-bottom: 0;
    font-size: 0.9rem;
  }

  @media (max-width: 400px) {
    font-size: 0.82rem;
    padding: 0.7rem 0 0.7rem 1rem;
  }
`;

export const Panels = styled.div`
  flex: 1;
`;

export const Panel = styled.div`
  animation: panelFade .6s ease;

  @keyframes panelFade {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  h3 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: clamp(1.3rem, 2vw, 1.8rem);
    color: ${({ theme }) => theme.colors.navy};
    font-weight: 600;
  }

  p {
    color: ${({ theme }) => theme.colors.ink70};
    margin-top: 1.1rem;
    max-width: 60ch;
    line-height: 1.8;
  }

  ul {
    margin-top: 1.3rem;
    display: flex;
    flex-direction: column;
    gap: .6rem;
  }

  li {
    font-size: .92rem;
    color: ${({ theme }) => theme.colors.ink};
    display: flex;
    gap: .7rem;
    align-items: baseline;

    &::before {
      content: '';
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.gold};
      flex-shrink: 0;
    }
  }
`;