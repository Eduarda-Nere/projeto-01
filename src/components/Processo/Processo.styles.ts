import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const ProcessoWrapper = styled.section`
    position: relative;
    scroll-margin-top: 0;
    padding: ${({ theme }) => theme.layout.sectionGapHalf} 0;
`;

export const ProcessoHeader = styled.div`
    text-align: center;
    max-width: 1220px;
    margin: 0 auto clamp(1rem, 2vw, 1.5rem);
    padding: 0 clamp(1.5rem, 4vw, 3rem);
    flex-shrink: 0;

    @media (max-width: 768px) {
        margin-bottom: 0.75rem;
    }
`;

export const StackViewport = styled.div<{ $count: number }>`
    position: relative;
    height: ${({ $count }) => `${$count * 130}vh`};

    @media (max-width: 768px) {
        height: ${({ $count }) => `${$count * 95}vh`};
    }

    @media (max-width: 480px) {
        height: ${({ $count }) => `${$count * 85}vh`};
    }
`;

export const StackSticky = styled.div`
    position: sticky;
    top: ${({ theme }) => theme.layout.headerHeight};
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: clamp(1rem, 2vw, 1.5rem);
    padding: clamp(1rem, 2vw, 1.5rem) clamp(1.5rem, 4vw, 3rem);

    @media (max-width: 768px) {
        gap: 1rem;
        padding: 1rem clamp(1.5rem, 4vw, 3rem);
    }

    @media (max-width: 480px) {
        gap: 0.75rem;
        padding: 0.75rem clamp(1.5rem, 4vw, 3rem);
    }

    @media (orientation: landscape) and (max-height: 560px) {
        gap: 0.5rem;
        padding: 0.5rem clamp(1.5rem, 4vw, 3rem);
    }
`;

export const StackFrame = styled.div`
    position: relative;
    width: 100%;
    max-width: 900px;
    overflow: hidden;

    @media (max-width: 1024px) {
        max-width: 640px;
    }

    @media (max-width: 768px) {
        max-width: 100%;
    }
`;

export const StaticStack = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 900px;
    margin: 0 auto;
    padding: 0 clamp(1.5rem, 4vw, 3rem);
`;

export const Card = styled(motion.article)<{
    $bg: 'dark' | 'light';
    $index: number;
    $static?: boolean;
    $visible?: boolean;
    $spacer?: boolean;
}>`
    position: ${({ $static, $spacer }) =>
        $static || $spacer ? 'relative' : 'absolute'};
    inset: ${({ $static, $spacer }) => ($static || $spacer ? 'auto' : '0')};
    min-height: ${({ $static }) => ($static ? '360px' : 'auto')};
    z-index: ${({ $index }) => $index + 1};
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: clamp(3rem, 6vw, 5.5rem) clamp(2rem, 4vw, 3.5rem);
    border: 1px solid ${({ theme }) => theme.colors.lineOnCream};
    border-radius: 4px;
    overflow: hidden;
    background: ${({ $bg, theme }) =>
        $bg === 'dark' ? theme.colors.navy : theme.colors.paper};
    color: ${({ $bg, theme }) =>
        $bg === 'dark' ? theme.colors.paper : theme.colors.navy};
    opacity: ${({ $visible, $static, $spacer }) =>
        $spacer ? 0 : $static ? 1 : $visible ? 1 : 0};
    visibility: ${({ $visible, $static, $spacer }) =>
        $spacer ? 'hidden' : $static ? 'visible' : $visible ? 'visible' : 'hidden'};
    transition: opacity 0.3s ease, visibility 0.3s ease;

    ${({ $spacer }) =>
        $spacer &&
        css`
            pointer-events: none;
            border-color: transparent;
            box-shadow: none;
        `}

    @media (max-width: 768px) {
        padding: 3.5rem 2rem;
    }

    @media (max-width: 480px) {
        padding: 3rem 1.5rem;
    }

    @media (orientation: landscape) and (max-height: 560px) {
        padding: 2.5rem 1.5rem;
    }
`;

export const StepIndicator = styled.div`
    position: relative;
    display: flex;
    gap: 0.5rem;
    z-index: 10;
    flex-shrink: 0;

    @media (max-width: 480px) {
        gap: 0.35rem;
    }
`;

export const StepDot = styled.span<{ $active: boolean }>`
    width: ${({ $active }) => ($active ? '1.5rem' : '0.4rem')};
    height: 0.4rem;
    border-radius: 999px;
    background: ${({ theme, $active }) =>
        $active ? theme.colors.gold : 'rgba(15, 30, 56, 0.2)'};
    transition: all ${({ theme }) => theme.duration.base} ${({ theme }) => theme.easeOut};
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

    @media (max-width: 768px) {
        gap: 1.25rem;
    }

    @media (max-width: 480px) {
        gap: 1.125rem;
    }

    @media (orientation: landscape) and (max-height: 560px) {
        gap: 0.75rem;
    }
`;

export const CardTitle = styled.h3<{ $isDark: boolean }>`
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: clamp(1.35rem, 2vw, 1.75rem);
    line-height: 1.25;
    font-weight: 400;
    letter-spacing: -0.01em;
    color: ${({ $isDark, theme }) =>
        $isDark ? theme.colors.gold : theme.colors.navyDeep};
    margin: 0;

    @media (max-width: 480px) {
        font-size: 1.15rem;
    }

    @media (orientation: landscape) and (max-height: 560px) {
        font-size: 1.05rem;
    }
`;

export const CardText = styled.p<{ $isDark: boolean }>`
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 0.95rem;
    line-height: 1.75;
    margin: 0;
    max-width: 62ch;
    text-align: justify;
    hyphens: auto;
    color: ${({ $isDark }) =>
        $isDark ? 'rgba(250, 248, 244, 0.85)' : 'rgba(15, 30, 56, 0.85)'};

    @media (max-width: 768px) {
        font-size: 0.9rem;
        line-height: 1.7;
    }

    @media (max-width: 480px) {
        font-size: 0.85rem;
        line-height: 1.65;
    }

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

    @media (max-width: 480px) {
        margin-top: 0.5rem;
    }

    @media (orientation: landscape) and (max-height: 560px) {
        margin-top: 0.25rem;
    }
`;

export const CardDeliveryLabel = styled.span<{ $isDark: boolean }>`
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 0.72rem;
    font-weight: 600;
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

    @media (max-width: 480px) {
        font-size: 0.8rem;
        line-height: 1.55;
    }

    @media (orientation: landscape) and (max-height: 560px) {
        font-size: 0.72rem;
        line-height: 1.4;
    }
`;