import styled from 'styled-components';

export const ProcessSection = styled.section`
  background: ${({ theme }) => theme.colors.navy};
  color: ${({ theme }) => theme.colors.paper};
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
  color: ${({ theme }) => theme.colors.paper};
`;

export const Timeline = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  position: relative;
  padding-top: 1px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
    padding-top: 0;
  }
`;

export const Step = styled.div<{ $visible: boolean; $delay: number }>`
  padding: 2.4rem 1.8rem 2rem;
  border-right: 1px solid ${({ theme }) => theme.colors.lineOnNavy};
  border-top: 1px solid ${({ theme }) => theme.colors.lineOnNavy};
  position: relative;

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? '0' : '44px')});
  transition: opacity .9s ${({ theme }) => theme.ease} ${({ $delay }) => $delay}s,
              transform .9s ${({ theme }) => theme.ease} ${({ $delay }) => $delay}s;

  &::before {
    content: "";
    position: absolute;
    top: -2px;
    left: 0;
    width: 34px;
    height: 3px;
    background: ${({ theme }) => theme.colors.gold};
    z-index: 2;
  }

  &:last-child {
    border-right: none;
  }

  @media (max-width: 1200px) {
    padding: 2rem 1.5rem 1.8rem;

    &:nth-child(2) {
      border-right: none;
    }

    &::before {
      height: 3px;
      top: -2px;
    }
  }

  @media (max-width: 620px) {
    padding: 1.6rem 1rem 1.4rem;
    border-right: none !important;
    border-top: none !important;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lineOnNavy};

    &::before {
      height: 3px;
      top: -2px;
    }

    &:first-child {
      border-top: 1px solid ${({ theme }) => theme.colors.lineOnNavy} !important;
    }

    &:last-child {
      border-bottom: none;
    }
  }
`;

export const StepTitle = styled.h3`
  color: ${({ theme }) => theme.colors.paper};
  font-size: 1.28rem;
  margin-bottom: .75rem;
`;

export const StepDesc = styled.p`
  color: ${({ theme }) => theme.colors.cream};
  opacity: .68;
  font-size: .92rem;
  max-width: 28ch;
`;