import styled, { keyframes } from 'styled-components';

const gridMove = keyframes`
    0% { background-position: 0 0; }
    100% { background-position: 54px 54px; }
`;

export const ProcessoWrapper = styled.section`
    position: relative;
    scroll-margin-top: 80px;
    padding: clamp(3rem, 6vw, 5rem) 0;
`;

export const ProcessoHeader = styled.div`
    text-align: center;
    max-width: 1220px;
    margin: 0 auto clamp(2.5rem, 5vw, 4rem);
    padding: 0 clamp(1.5rem, 4vw, 3rem);
`;

export const ProcessoTitle = styled.h2`
    font-size: clamp(1.9rem, 3.4vw, 2.5rem);
    line-height: 1.08;
    font-weight: 400;
    letter-spacing: -0.01em;
    color: ${({ theme }) => theme.colors.navy};
    margin: 0 auto;
    max-width: 20ch;
`;

export const CardsStack = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    max-width: 900px;
    margin: 0 auto;
    padding: 0 clamp(1.5rem, 4vw, 3rem);

    @media (orientation: landscape) and (max-height: 560px) {
        gap: 1rem;
        padding: 0 1rem;
    }
`;

export const StickyCard = styled.article<{
    $bg: 'dark' | 'light';
    $index: number;
}>`
    position: sticky;
    top: calc(180px + ${({ $index }) => $index * 2.5}rem);
    width: 100%;
    min-height: 420px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: clamp(2rem, 4vw, 3.5rem);
    border-radius: 4px;
    overflow: hidden;
    background: ${({ $bg, theme }) =>
        $bg === 'dark' ? theme.colors.navy : '#ffffff'};
    color: ${({ $bg, theme }) =>
        $bg === 'dark' ? theme.colors.cream : theme.colors.navy};
    border: 1px solid
        ${({ $bg, theme }) =>
            $bg === 'dark' ? 'rgba(210, 170, 78, 0.25)' : theme.colors.lineOnCream};

    @media (orientation: landscape) and (max-height: 560px) {
        top: calc(120px + ${({ $index }) => $index * 1.5}rem);
        min-height: auto;
        padding: 1rem 1.25rem;
    }
`;

export const GridBackground = styled.div<{ $isDark: boolean }>`
    position: absolute;
    inset: 0;
    pointer-events: none;
    background-image:
        linear-gradient(to right, ${({ $isDark }) => $isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)'} 1px, transparent 1px),
        linear-gradient(to bottom, ${({ $isDark }) => $isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)'} 1px, transparent 1px);
    background-size: 54px 54px;
    animation: ${gridMove} 20s linear infinite;
`;

export const CardContent = styled.div`
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    text-align: left;

    @media (orientation: landscape) and (max-height: 560px) {
        gap: 0.5rem;
    }
`;

export const CardTitle = styled.h3`
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: clamp(1.35rem, 2vw, 1.75rem);
    line-height: 1.2;
    font-weight: 500;
    letter-spacing: -0.01em;
    color: ${({ theme }) => theme.colors.gold};
    margin: 0;

    @media (orientation: landscape) and (max-height: 560px) {
        font-size: 1.05rem;
    }
`;

export const CardText = styled.p<{ $isDark: boolean }>`
    font-size: 0.95rem;
    line-height: 1.75;
    margin: 0;
    max-width: 62ch;
    text-align: justify;
    hyphens: auto;
    color: ${({ $isDark, theme }) =>
        $isDark ? 'rgba(250, 248, 244, 0.75)' : theme.colors.ink70};

    @media (orientation: landscape) and (max-height: 560px) {
        font-size: 0.78rem;
        line-height: 1.5;
    }
`;

export const CardDelivery = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    margin-top: 0.75rem;

    @media (orientation: landscape) and (max-height: 560px) {
        margin-top: 0.25rem;
    }
`;

export const CardDeliveryLabel = styled.span`
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.gold};
    opacity: 0.85;

    @media (orientation: landscape) and (max-height: 560px) {
        font-size: 0.6rem;
    }
`;

export const CardDeliveryText = styled.span<{ $isDark: boolean }>`
    font-size: 0.85rem;
    line-height: 1.6;
    font-style: italic;
    color: ${({ $isDark }) =>
        $isDark ? 'rgba(250, 248, 244, 0.55)' : 'rgba(22, 34, 58, 0.55)'};

    @media (orientation: landscape) and (max-height: 560px) {
        font-size: 0.72rem;
        line-height: 1.4;
    }
`;