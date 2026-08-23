import styled from 'styled-components';

export const ScrollButton = styled.button<{ $visible: boolean }>`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gold};
  border: none;
  color: ${({ theme }) => theme.colors.navyDeep};
  font-size: 0.85rem;
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
    transform: scale(0.9);
  }

  i {
    font-size: 0.85rem;
  }

  @media (max-width: 768px) {
    width: 1.8rem;
    height: 1.8rem;
    bottom: 1.5rem;
    right: 1.5rem;

    i {
      font-size: 0.7rem;
    }
  }
`;