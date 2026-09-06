import styled from 'styled-components';

export const ScrollButton = styled.button<{ $visible: boolean }>`
  position: fixed;
  bottom: 2.5rem;
  right: 2.5rem;
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gold};
  border: none;
  color: ${({ theme }) => theme.colors.navyDeep};
  font-size: 1rem;
  cursor: pointer;
  z-index: 999;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? '0' : '20px')});
  visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${({ theme }) => theme.colors.goldSoft};
    transform: translateY(-4px);
  }

  &:active {
    transform: scale(0.92);
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.gold};
    outline-offset: 2px;
  }

  i {
    font-size: 1rem;
  }

  /* Tablets e telas médias (768px - 1024px) */
  @media (max-width: 1024px) and (min-width: 769px) {
    width: 3rem;
    height: 3rem;
    bottom: 2rem;
    right: 2rem;
    font-size: 1.1rem;

    i {
      font-size: 1.1rem;
    }
  }

  /* Smartphones (até 768px) */
  @media (max-width: 768px) {
    width: 3rem;
    height: 3rem;
    bottom: 1.5rem;
    right: 1.5rem;
    font-size: 1rem;

    i {
      font-size: 1rem;
    }
  }

  /* Smartphones muito pequenos (até 480px) */
  @media (max-width: 480px) {
    width: 2.8rem;
    height: 2.8rem;
    bottom: 1.25rem;
    right: 1.25rem;
    font-size: 0.9rem;

    i {
      font-size: 0.9rem;
    }
  }
`;