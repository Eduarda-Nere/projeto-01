import styled from 'styled-components';

export const Highlight = styled.span<{ $active: boolean; $delay?: number }>`
    position: relative;
    display: inline-block;
    isolation: isolate;
    margin-right: 0.4em;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: -0.3em;
        right: -0.3em;
        background: ${({ theme }) => theme.colors.gold};
        transform: scaleX(${({ $active }) => ($active ? 1 : 0)});
        transform-origin: left center;
        transition: transform 0.9s ${({ theme }) => theme.easeOut}
            ${({ $delay }) => $delay ?? 0}s;
        z-index: 0;
        border-radius: 2px;
    }

    strong {
        position: relative;
        z-index: 1;
    }
`;