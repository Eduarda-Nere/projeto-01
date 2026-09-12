import styled from 'styled-components';

export const SectionTitle = styled.h2<{ $light?: boolean }>`
    font-size: clamp(1.9rem, 3.4vw, 2.5rem);
    line-height: 1.08;
    font-weight: 400;
    color: ${({ theme, $light }) => ($light ? theme.colors.cream : theme.colors.navy)};
    margin: 0;
    letter-spacing: -0.01em;
`;