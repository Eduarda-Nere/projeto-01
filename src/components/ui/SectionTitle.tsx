import styled from 'styled-components';

export const SectionTitle = styled.h2<{ $light?: boolean; $maxWidth?: string; $center?: boolean }>`
    font-size: clamp(1.9rem, 3.4vw, 2.5rem);
    line-height: 1.08;
    font-weight: 400;
    color: ${({ theme, $light }) => ($light ? theme.colors.paper : theme.colors.navy)};
    margin: ${({ $center }) => ($center ? '0 auto' : '0')};
    letter-spacing: -0.01em;
    max-width: ${({ $maxWidth }) => $maxWidth ?? 'none'};
`;