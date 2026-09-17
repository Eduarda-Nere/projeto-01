import styled from 'styled-components';

export const SectionSubtitle = styled.p<{ $light?: boolean; $maxWidth?: string }>`
    font-size: 1rem;
    line-height: 1.7;
    max-width: ${({ $maxWidth }) => $maxWidth ?? '52ch'};
    margin: 1rem auto 0;
    color: ${({ theme, $light }) =>
        $light ? 'rgba(250, 248, 244, 0.7)' : theme.colors.ink70};
`;