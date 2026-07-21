import styled from 'styled-components';

export const FaqSection = styled.section`
  background: #fff;
  padding: clamp(4.5rem, 9vw, 7.5rem) 0;
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
    color: ${({ theme }) => theme.colors.navy};
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

export const FaqList = styled.div<{ $visible: boolean }>`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  max-width: 800px;
  margin: 0 auto;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? '0' : '44px')});
  transition: opacity .9s ${({ theme }) => theme.ease},
              transform .9s ${({ theme }) => theme.ease};
`;

export const FaqItem = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.lineOnCream};
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

  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }
`;

export const FaqIcon = styled.span<{ $open: boolean }>`
  flex: 0 0 24px;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.gold};
  transform: rotate(${({ $open }) => ($open ? '45deg' : '0deg')});
  transition: transform .4s ${({ theme }) => theme.ease};
`;

export const FaqAnswer = styled.div<{ $open: boolean }>`
  max-height: ${({ $open }) => ($open ? '300px' : '0')};
  overflow: hidden;
  padding: ${({ $open }) => ($open ? '0 0 1.5rem' : '0')};
  transition: max-height .5s ${({ theme }) => theme.ease},
              padding .4s ${({ theme }) => theme.ease};

  p {
    color: ${({ theme }) => theme.colors.ink70};
    font-size: .95rem;
    line-height: 1.8;
    max-width: 60ch;
  }
`;