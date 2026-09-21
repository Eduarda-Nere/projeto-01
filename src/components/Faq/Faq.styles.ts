import styled from 'styled-components';

export const FaqSection = styled.section`
    background: ${({ theme }) => theme.colors.paper};
    padding: ${({ theme }) =>
        `calc(${theme.layout.sectionGapHalf} * 1.1) 0 ${theme.layout.sectionGapHalf}`};
    scroll-margin-top: 80px;
`;

export const FaqList = styled.div<{ $visible: boolean }>`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? '0' : '44px')});
  transition: opacity .9s ${({ theme }) => theme.ease},
              transform .9s ${({ theme }) => theme.ease};
`;

export const FaqItem = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.lineOnCream};

  &:last-child {
    border-bottom: none;
  }
`;

export const FaqQuestion = styled.button`
  width: 100%;
  padding: 1.5rem 0;
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.15rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.navy};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  text-align: left;
  transition: color .5s ${({ theme }) => theme.ease},
              font-weight .5s ${({ theme }) => theme.ease};
  gap: 1.5rem;
  line-height: 1.5;

  &[aria-expanded="true"] {
    color: ${({ theme }) => theme.colors.navy};
    font-weight: 600;
  }
`;

export const FaqIcon = styled.span<{ $open: boolean }>`
  flex: 0 0 22px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  margin-top: 0.15rem;
  color: ${({ theme }) => theme.colors.gold};
  transform: rotate(${({ $open }) => ($open ? '45deg' : '0deg')});
  transition: transform .4s ${({ theme }) => theme.ease};

  svg {
    width: 100%;
    height: 100%;
    stroke: currentColor;
    stroke-width: 1.3;
    fill: none;
    stroke-linecap: round;
  }
`;

export const FaqAnswer = styled.div<{ $open: boolean }>`
  max-height: ${({ $open }) => ($open ? '600px' : '0')};
  overflow: hidden;
  padding: ${({ $open }) => ($open ? '5px 0 1.5rem 0' : '0')};
  transition: max-height .5s ${({ theme }) => theme.ease},
              padding .4s ${({ theme }) => theme.ease};
`;

export const FaqAnswerContent = styled.div`
  color: ${({ theme }) => theme.colors.ink70};
  font-size: 0.95rem;
  line-height: 1.8;
  text-align: justify;
  max-width: 100%;
`;

export const FaqAnswerText = styled.p`
  margin: 0 0 0.5rem 0;

  &:last-child {
    margin-bottom: 0;
  }
`;