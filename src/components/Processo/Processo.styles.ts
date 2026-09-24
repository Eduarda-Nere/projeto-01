import styled from 'styled-components';
import { motion } from 'framer-motion';
import { SectionSubtitle } from '../ui';

export const ProcessoWrapper = styled.section`
    position: relative;
    background: ${({ theme }) => theme.colors.paper};
    scroll-margin-top: 80px;
    padding: ${({ theme }) => theme.layout.sectionGapHalf} 0;
`;

export const ProcessoInner = styled.div`
    max-width: ${({ theme }) => theme.layout.container};
    margin: 0 auto;
    padding: 0 clamp(1.5rem, 4vw, 3rem);
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.4fr);
    gap: clamp(2rem, 4vw, 4rem);
    align-items: center;

    @media (max-width: 720px) {
        grid-template-columns: 1fr;
        gap: clamp(1.5rem, 3vw, 2.5rem);
        align-items: stretch;
    }
`;

export const ProcessoLeft = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const Subtitle = styled(SectionSubtitle)`
    margin: 1rem 0 0;
    max-width: 40ch;

    @media (max-width: 720px) {
        max-width: 60ch;
    }
`;

export const ProcessoRight = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: clamp(1rem, 2vw, 1.5rem);
    min-width: 0;
`;

export const CardViewport = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
    border-radius: 4px;
    clip-path: inset(0 round 4px);
    isolation: isolate;
`;

export const CardTrack = styled(motion.div)`
    display: flex;
    align-items: stretch;
    will-change: transform;
`;

export const Card = styled.article<{
    $bg: 'dark' | 'light';
}>`
    position: relative;
    flex: 0 0 100%;
    width: 100%;
    min-height: 340px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: clamp(1.5rem, 2.5vw, 2rem);
    padding: clamp(1.5rem, 2.75vw, 2.25rem) clamp(1.35rem, 2.75vw, 2.25rem);
    border: 1px solid ${({ theme }) => theme.colors.lineOnCream};
    border-radius: 4px;
    overflow: hidden;
    background: ${({ $bg, theme }) =>
        $bg === 'dark' ? theme.colors.navy : theme.colors.paper};
    color: ${({ $bg, theme }) =>
        $bg === 'dark' ? theme.colors.paper : theme.colors.navy};

    @media (max-width: 480px) {
        padding: 1.5rem 1.25rem;
        min-height: 300px;
    }
`;

export const GridBackground = styled.div<{ $isDark: boolean }>`
    position: absolute;
    inset: 0;
    pointer-events: none;
    background-image:
        linear-gradient(
            to right,
            ${({ $isDark }) =>
                $isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)'} 1px,
            transparent 1px
        ),
        linear-gradient(
            to bottom,
            ${({ $isDark }) =>
                $isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)'} 1px,
            transparent 1px
        );
    background-size: 54px 54px;
`;

export const CardContent = styled.div`
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
    text-align: left;
    align-items: flex-start;
`;

export const CardTitle = styled.h3<{ $isDark: boolean }>`
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: clamp(1.3rem, 2.1vw, 1.75rem);
    line-height: 1.15;
    font-weight: 400;
    letter-spacing: -0.01em;
    color: ${({ $isDark, theme }) =>
        $isDark ? theme.colors.gold : theme.colors.navyDeep};
    margin: 0;

    @media (max-width: 480px) {
        font-size: 1.2rem;
    }
`;

export const CardText = styled.p<{ $isDark: boolean }>`
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 0.88rem;
    line-height: 1.65;
    margin: 0;
    text-align: justify;
    hyphens: auto;
    color: ${({ $isDark }) =>
        $isDark ? 'rgba(250, 248, 244, 0.85)' : 'rgba(15, 30, 56, 0.85)'};

    @media (max-width: 480px) {
        font-size: 0.84rem;
        line-height: 1.6;
    }
`;

export const CardDelivery = styled.div`
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
    text-align: left;
    align-items: flex-start;
`;

export const CardDeliveryLabel = styled.span<{ $isDark: boolean }>`
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 0.66rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: ${({ $isDark, theme }) =>
        $isDark ? theme.colors.gold : theme.colors.navy};
`;

export const CardDeliveryText = styled.span<{ $isDark: boolean }>`
    font-size: 0.8rem;
    line-height: 1.5;
    font-style: italic;
    color: ${({ $isDark }) =>
        $isDark ? 'rgba(250, 248, 244, 0.75)' : 'rgba(15, 30, 56, 0.85)'};
`;

export const CardFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
`;

export const Indicators = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

export const Indicator = styled.span<{ $active: boolean }>`
    display: block;
    height: 2px;
    width: 2rem;
    border-radius: 999px;
    background: ${({ theme, $active }) =>
        $active ? theme.colors.navy : 'rgba(15, 30, 56, 0.18)'};
    transition: background 0.4s ${({ theme }) => theme.easeOut};
`;

export const Arrows = styled.div`
    display: flex;
    gap: 0.5rem;
`;

export const Arrow = styled.button<{ $disabled?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 999px;
    border: 1px solid ${({ theme }) => theme.colors.navy};
    background: transparent;
    color: ${({ theme }) => theme.colors.navy};
    cursor: pointer;
    transition:
        background 0.3s ${({ theme }) => theme.easeOut},
        color 0.3s ${({ theme }) => theme.easeOut},
        border-color 0.3s ${({ theme }) => theme.easeOut},
        opacity 0.3s ${({ theme }) => theme.easeOut};

    svg {
        width: 1rem;
        height: 1rem;
        stroke: currentColor;
        stroke-width: 2;
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
    }

    &:hover:not(:disabled) {
        background: ${({ theme }) => theme.colors.navy};
        color: ${({ theme }) => theme.colors.paper};
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.gold};
        outline-offset: 3px;
    }

    &:disabled {
        opacity: 0.3;
        cursor: not-allowed;
    }
`;