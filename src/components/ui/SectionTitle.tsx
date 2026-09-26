import styled from 'styled-components';

export const SectionTitle = styled.h2<{ $light?: boolean; $maxWidth?: string; $center?: boolean }>`
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: clamp(2.1rem, 3.8vw, 2.9rem);
    line-height: 1.08;
    font-weight: 350;
    color: ${({ theme, $light }) => ($light ? theme.colors.paper : theme.colors.navy)};
    margin: ${({ $center }) => ($center ? '0 auto' : '0')};
    letter-spacing: -0.01em;
    max-width: ${({ $maxWidth }) => $maxWidth ?? 'none'};
    text-transform: uppercase;

    @media (max-width: 768px) {
        font-size: clamp(1.9rem, 7vw, 2.4rem);
        line-height: 1.1;
    }

    @media (max-width: 480px) {
        font-size: clamp(1.6rem, 7.5vw, 2rem);
        line-height: 1.15;
    }
`;