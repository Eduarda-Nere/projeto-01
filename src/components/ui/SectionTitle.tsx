import styled from 'styled-components';

export const SectionTitle = styled.h2<{ $light?: boolean; $maxWidth?: string; $center?: boolean }>`
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: clamp(1.9rem, 3.4vw, 2.5rem);
    line-height: 1.08;
    font-weight: 400;
    color: ${({ theme, $light }) => ($light ? theme.colors.paper : theme.colors.navy)};
    margin: ${({ $center }) => ($center ? '0 auto' : '0')};
    letter-spacing: -0.01em;
    max-width: ${({ $maxWidth }) => $maxWidth ?? 'none'};
    text-transform: uppercase;

    @media (max-width: 768px) {
        font-size: clamp(1.75rem, 6.5vw, 2.2rem);
        line-height: 1.1;
    }

    @media (max-width: 480px) {
        font-size: clamp(1.5rem, 7vw, 1.9rem);
        line-height: 1.15;
    }
`;