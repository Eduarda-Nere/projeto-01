import styled from 'styled-components';

export const ScrollTopButton = styled.button<{ $visible: boolean }>`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 999;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gold};
  color: ${({ theme }) => theme.colors.navyDeep};
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 28px rgba(10, 21, 38, 0.25);
  transition: all 0.4s ${({ theme }) => theme.ease};
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};
  transform: translateY(${({ $visible }) => ($visible ? '0' : '20px')}) scale(${({ $visible }) => ($visible ? 1 : 0.9)});

  &:hover {
    background: ${({ theme }) => theme.colors.goldSoft};
    transform: scale(1.08);
    box-shadow: 0 12px 36px rgba(10, 21, 38, 0.35);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    font-size: 0.9rem;
    bottom: 20px;
    right: 20px;
  }
`;