import styled from 'styled-components';

export const NotFoundSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.paper};
  padding: clamp(2rem, 4vw, 4rem) clamp(1.25rem, 4vw, 3rem);
  text-align: center;
  padding-top: calc(${({ theme }) => theme.layout.headerHeight} + 2rem);
`;

export const NotFoundContent = styled.div`
  max-width: 600px;
  width: 100%;
`;

export const NotFoundIcon = styled.div`
  font-size: 3.5rem;
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: 1.5rem;
  opacity: 0.6;
`;

export const NotFoundCode = styled.h1`
  font-size: clamp(6rem, 15vw, 10rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.navy};
  opacity: 0.08;
  line-height: 1;
  letter-spacing: -0.03em;
  user-select: none;
  margin-bottom: 0.5rem;
  pointer-events: none;
`;

export const NotFoundTitle = styled.h2`
  font-size: clamp(1.8rem, 3vw, 2.8rem);
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: 1rem;
  font-weight: 500;
  letter-spacing: -0.01em;
`;

export const NotFoundDescription = styled.p`
  font-size: clamp(1rem, 1.1vw, 1.1rem);
  color: ${({ theme }) => theme.colors.ink70};
  line-height: 1.8;
  max-width: 48ch;
  margin: 0 auto 2.5rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledNotFoundButton = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 6px;
  border: 1.5px solid ${({ theme }) => theme.colors.navy};
  background: transparent;
  padding: 0.9rem 1.5rem;
  font-size: 0.76rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.navy};
  cursor: pointer;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  font-family: ${({ theme }) => theme.fonts.body};
  line-height: 1;
  white-space: nowrap;

  .btn-text {
    position: relative;
    z-index: 1;
    transition: color 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .btn-circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 16px;
    height: 16px;
    background: ${({ theme }) => theme.colors.navy};
    border-radius: 50%;
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
    pointer-events: none;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.navy};
    color: ${({ theme }) => theme.colors.cream};

    .btn-text {
      color: ${({ theme }) => theme.colors.cream};
    }

    .btn-circle {
      width: 220px;
      height: 220px;
      opacity: 1;
      background: ${({ theme }) => theme.colors.navy};
    }
  }

  &:active {
    transform: scale(0.95);
  }
`;