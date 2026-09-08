import styled from 'styled-components';

export const FaqSection = styled.section`
  background: ${({ theme }) => theme.colors.paper};
  padding: clamp(3rem, 6vw, 5rem) 0;
  scroll-margin-top: 80px;
`;

export const Wrap = styled.div`
  max-width: ${({ theme }) => theme.layout.container};
  margin: 0 auto;
  padding: 0 clamp(1.5rem, 4vw, 3rem);
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
    color: ${({ theme }) => theme.colors.navy};
  }
`;

export const Title = styled.h2`
  font-size: clamp(2rem, 3.6vw, 2.9rem);
  line-height: 1.08;
  margin-top: .9rem;
  margin-bottom: 1.4rem;
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
  width: calc(100% - 5px);
  margin-left: 0;
  padding-right: 0;

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    width: calc(100% - 5px);
  }
`;

export const FaqQuestion = styled.button`
  width: 100%;
  padding: 1.5rem 0;
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.navy};
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  transition: color .3s ${({ theme }) => theme.ease};
  gap: 1.5rem;
  line-height: 1.6;

  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }
`;

export const FaqIcon = styled.span<{ $open: boolean }>`
  flex: 0 0 24px;
  font-size: 1.2rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.gold};
  transform: rotate(${({ $open }) => ($open ? '45deg' : '0deg')});
  transition: transform .4s ${({ theme }) => theme.ease};
`;

export const FaqAnswer = styled.div<{ $open: boolean }>`
  max-height: ${({ $open }) => ($open ? '600px' : '0')};
  overflow: hidden;
  padding: ${({ $open }) => ($open ? '5px 0 1.5rem 0' : '0')};
  transition: max-height .5s ${({ theme }) => theme.ease},
              padding .4s ${({ theme }) => theme.ease};
`;

const AnswerTextBase = styled.div`
  color: ${({ theme }) => theme.colors.ink70};
  font-size: .95rem;
  line-height: 1.8;
  text-align: justify;
  max-width: 100%;
`;

export const FaqAnswerContent = styled(AnswerTextBase)``;

export const FaqAnswerText = styled(AnswerTextBase).attrs({ as: 'p' })`
  margin: 0 0 0.5rem 0;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const FaqListPoint = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0.5rem 0 0 0;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const FaqListItem = styled.li`
  color: ${({ theme }) => theme.colors.ink70};
  font-size: .95rem;
  line-height: 1.8;
  padding-left: 1.5rem;
  padding-right: 0;
  position: relative;
  margin-bottom: 0.25rem;
  text-align: justify;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.7rem;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.gold};
  }

  &:last-child {
    margin-bottom: 0;
  }
`;