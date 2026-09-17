import styled from 'styled-components';

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
        gap: 0;
        padding: 0 1rem;
    }

    @media (max-width: 768px) {
        gap: 0;
    }

    @media (max-width: 480px) {
        gap: 0;
    }
`;

export const StickyCard = styled.article<{
    $bg: 'dark' | 'light';
    $index: number;
}>`
    position: sticky;
    top: 180px;
    width: 100%;
    min-height: 420px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: clamp(2rem, 4vw, 3.5rem);
    border-radius: 4px;
    overflow: hidden;
    background: ${({ $bg }) =>
        $bg === 'dark'
            ? '#0f1e38'
            : `linear-gradient(135deg, #fbfcfe 0%, #ffffff 50%, #fbfcfe 100%)`};
    color: ${({ $bg, theme }) =>
        $bg === 'dark' ? theme.colors.paper : theme.colors.navy};
    box-shadow: ${({ $bg }) =>
        $bg === 'dark'
            ? '0 1px 0 rgba(210, 170, 78, 0.15) inset, 0 2px 6px rgba(0, 0, 0, 0.12)'
            : '0 1px 0 rgba(255, 255, 255, 1) inset, 0 2px 6px rgba(15, 30, 56, 0.08)'};

    @media (max-width: 1024px) {
        width: 88%;
        max-width: 640px;
    }

    @media (max-width: 768px) {
        top: 140px;
        width: 90%;
        max-width: 520px;
        margin-top: ${({ $index }) => ($index === 0 ? '0' : '5.6rem')};
    }

    @media (max-width: 480px) {
        top: 136px;
        width: 100%;
        max-width: none;
        margin-top: ${({ $index }) => ($index === 0 ? '0' : '7rem')};
    }

    @media (orientation: landscape) and (max-height: 560px) {
        top: 110px;
        width: 85%;
        max-width: 520px;
        min-height: calc(100dvh - 140px);
        padding: 1rem 1.25rem;
        margin-top: ${({ $index }) => ($index === 0 ? '0' : '1.5rem')};
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

export const CardTitle = styled.h3<{ $isDark: boolean }>`
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: clamp(1.35rem, 2vw, 1.75rem);
    line-height: 1.2;
    font-weight: 600;
    letter-spacing: -0.01em;
    color: ${({ $isDark, theme }) =>
        $isDark ? theme.colors.gold : theme.colors.navyDeep};
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
    color: ${({ $isDark }) =>
        $isDark ? 'rgba(250, 248, 244, 0.85)' : 'rgba(15, 30, 56, 0.85)'};

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

export const CardDeliveryLabel = styled.span<{ $isDark: boolean }>`
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: ${({ $isDark, theme }) =>
        $isDark ? theme.colors.gold : theme.colors.navy};
    opacity: 1;

    @media (orientation: landscape) and (max-height: 560px) {
        font-size: 0.6rem;
    }
`;

export const CardDeliveryText = styled.span<{ $isDark: boolean }>`
    font-size: 0.85rem;
    line-height: 1.6;
    font-style: italic;
    color: ${({ $isDark }) =>
        $isDark ? 'rgba(250, 248, 244, 0.75)' : 'rgba(15, 30, 56, 0.85)'};

    @media (orientation: landscape) and (max-height: 560px) {
        font-size: 0.72rem;
        line-height: 1.4;
    }
`;