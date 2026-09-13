import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProjectsSection = styled.section`
    position: relative;
    background: #ffffff;
    padding: clamp(3rem, 6vw, 5rem) 0;
    overflow: hidden;
    scroll-margin-top: 80px;
`;

export const ProjectsHeader = styled(motion.div)`
    position: relative;
    z-index: 2;
    margin-bottom: clamp(1.5rem, 3vw, 2rem);
`;

export const ProjectsTitle = styled(motion.h2)`
    font-size: clamp(1.6rem, 3.8vw, 2.75rem);
    line-height: 1.1;
    font-weight: 400;
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.colors.navy};
    margin: 0;
    max-width: 28ch;
`;

export const ProjectsControls = styled(motion.div)`
    grid-area: controls;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    align-self: end;
    margin-bottom: -3.3rem;
    position: relative;
    z-index: 10;

    @media (max-width: 940px) {
        justify-content: center;
        align-self: center;
        margin: 0.5rem 0;
        z-index: auto;
    }
`;

export const ProjectsArrowNav = styled(motion.div)`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-shrink: 0;
`;

export const ProjectsArrowButton = styled(motion.button)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.lineOnCream};
    background: transparent;
    color: ${({ theme }) => theme.colors.navy};
    cursor: pointer;
    transition:
        background 0.4s cubic-bezier(0.23, 1, 0.32, 1),
        border-color 0.4s cubic-bezier(0.23, 1, 0.32, 1),
        color 0.4s cubic-bezier(0.23, 1, 0.32, 1);

    svg {
        width: 18px;
        height: 18px;
        stroke: currentColor;
        stroke-width: 1.6;
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
    }

    &:hover {
        background: ${({ theme }) => theme.colors.navy};
        border-color: ${({ theme }) => theme.colors.navy};
        color: #ffffff;
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.gold};
        outline-offset: 4px;
    }

    @media (max-width: 480px) {
        width: 42px;
        height: 42px;
    }
`;

export const ProjectsStage = styled.div`
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.4fr);
    grid-template-areas:
        'controls controls'
        'timeline content';
    column-gap: clamp(2rem, 5vw, 5rem);
    row-gap: 1.5rem;
    align-items: stretch;

    @media (max-width: 1024px) {
        grid-template-columns: minmax(0, 320px) minmax(0, 1fr);
        column-gap: clamp(1.5rem, 4vw, 3rem);
    }

    @media (max-width: 940px) {
        grid-template-columns: 1fr;
        grid-template-areas:
            'timeline'
            'controls'
            'content';
        column-gap: 0;
        row-gap: 1.7rem;
    }
`;

export const ProjectsTimelineScale = styled(motion.div)`
    grid-area: timeline;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: stretch;

    @media (max-width: 940px) {
        height: auto;
        display: block;
    }
`;

export const ProjectsTimelineColumn = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 420px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: stretch;

    @media (max-width: 1024px) {
        max-width: 320px;
    }

    @media (max-width: 940px) {
        max-width: 100%;
        height: auto;
        display: block;
    }
`;

export const ProjectsTimelineCanvas = styled.div`
    position: relative;
    width: calc(100% + 56px);
    height: 100%;
    min-height: 100%;
    padding: 2rem;
    margin-left: -28px;
    overflow: visible;

    background-image:
        linear-gradient(rgba(10, 26, 47, 0.07) 1px, transparent 1px),
        linear-gradient(90deg, rgba(10, 26, 47, 0.07) 1px, transparent 1px);
    background-size: 28px 28px;
    background-position: -1px -1px;

    @media (max-width: 1024px) {
        width: calc(100% + 48px);
        margin-left: -24px;
        padding: 1.5rem;
        background-size: 24px 24px;
    }

    @media (max-width: 940px) {
        width: calc(100% + 44px);
        margin-left: -22px;
        height: 230px;
        min-height: 0;
        padding: 2rem 0.5rem;
        background-size: 22px 22px;
    }

    @media (max-width: 480px) {
        width: calc(100% + 40px);
        margin-left: -20px;
        height: 220px;
        padding: 1.75rem 0.25rem;
        background-size: 20px 20px;
    }
`;

export const ProjectsTimelineTrack = styled.div`
    position: absolute;
    top: calc(2rem + 11px);
    bottom: calc(2rem + 11px);
    left: 50%;
    width: 2px;
    margin-left: -1px;
    background: ${({ theme }) => theme.colors.lineOnCream};

    @media (max-width: 1024px) {
        top: calc(1.5rem + 11px);
        bottom: calc(1.5rem + 11px);
    }

    @media (max-width: 940px) {
        top: 50%;
        bottom: auto;
        left: 50%;
        margin-left: 0;
        width: calc(clamp(7rem, 55vw, 12rem) * 2 + 32px);
        height: 2px;
        margin-top: -1px;
        transform: translateX(-50%);
    }

    @media (max-width: 480px) {
        width: calc(clamp(4.5rem, 36vw, 7rem) * 2 + 26px);
    }
`;

export const ProjectsTimelineProgress = styled(motion.div)<{ $progress: number }>`
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: ${({ $progress }) => `${$progress * 100}%`};
    background: ${({ theme }) => theme.colors.navy};
    transform-origin: top center;
    transition: height 0.7s cubic-bezier(0.23, 1, 0.32, 1);

    @media (max-width: 940px) {
        top: 0;
        left: 0;
        width: ${({ $progress }) => `${$progress * 100}%`};
        height: 2px;
        transform-origin: left center;
        transition: width 0.7s cubic-bezier(0.23, 1, 0.32, 1);
    }
`;

export const ProjectsTimelinePoints = styled.div`
    position: absolute;
    top: 2rem;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    pointer-events: none;

    @media (max-width: 1024px) {
        top: 1.5rem;
        bottom: 1.5rem;
    }

    @media (max-width: 940px) {
        top: 50%;
        bottom: auto;
        left: 50%;
        right: auto;
        transform: translate(-50%, -50%);
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: clamp(7rem, 55vw, 12rem);
        width: auto;

        & > *:nth-child(1) > span:last-child {
            top: auto;
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
            margin: 0 0 1rem 0;
            text-align: center;
        }

        & > *:nth-child(2) > span:last-child {
            top: 100%;
            bottom: auto;
            left: 50%;
            transform: translateX(-50%);
            margin: 1rem 0 0 0;
            text-align: center;
        }

        & > *:nth-child(3) > span:last-child {
            top: auto;
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
            margin: 0 0 1rem 0;
            text-align: center;
        }
    }

    @media (max-width: 480px) {
        gap: clamp(4.5rem, 36vw, 7rem);

        & > *:nth-child(1) > span:last-child,
        & > *:nth-child(3) > span:last-child {
            margin-bottom: 0.9rem;
        }

        & > *:nth-child(2) > span:last-child {
            margin-top: 0.9rem;
        }
    }
`;

export const ProjectsTimelinePoint = styled(motion.button)<{ $active: boolean }>`
    position: relative;
    pointer-events: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;

    &:focus-visible .dot {
        outline: 2px dashed ${({ theme }) => theme.colors.gold};
        outline-offset: 6px;
    }
`;

export const ProjectsDot = styled(motion.span)<{ $active: boolean }>`
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    background: #ffffff;
    border-radius: 50%;
    color: ${({ $active, theme }) =>
        $active ? theme.colors.navy : theme.colors.ink70};
    font-size: 1rem;
    line-height: 1;
    transition: color 0.5s cubic-bezier(0.23, 1, 0.32, 1);

    i {
        display: block;
        line-height: 1;
    }

    @media (max-width: 480px) {
        width: 22px;
        height: 22px;
        font-size: 0.9rem;
    }
`;

export const ProjectsPointLabel = styled(motion.span)<{ $active: boolean }>`
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 1.25rem;
    white-space: nowrap;
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ $active }) => ($active ? '0.82rem' : '0.72rem')};
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: ${({ $active, theme }) =>
        $active ? theme.colors.navy : theme.colors.ink70};
    opacity: ${({ $active }) => ($active ? 1 : 0.55)};
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);

    @media (max-width: 940px) {
        left: 50%;
        top: 100%;
        transform: translateX(-50%);
        margin-left: 0;
        margin-top: 1rem;
        font-size: ${({ $active }) => ($active ? '0.82rem' : '0.74rem')};
    }

    @media (max-width: 480px) {
        margin-top: 0.9rem;
        font-size: ${({ $active }) => ($active ? '0.72rem' : '0.64rem')};
        letter-spacing: 0.08em;
    }
`;

export const ProjectsContentPanel = styled.div`
    grid-area: content;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    min-height: 100%;

    @media (max-width: 940px) {
        text-align: left;
        height: auto;
        min-height: 0;
    }
`;

export const ProjectsPanelSizer = styled.div`
    visibility: hidden;
    pointer-events: none;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;

    @media (max-width: 940px) {
        display: none;
    }
`;

export const ProjectsPanelInner = styled(motion.div)`
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    justify-content: center;

    @media (max-width: 940px) {
        position: relative;
        inset: auto;
        justify-content: flex-start;
    }
`;

export const ProjectsPanelTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    width: 100%;
`;

export const ProjectsPanelKicker = styled(motion.span)`
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.gold};
`;

export const ProjectsPanelSubtitle = styled.h3`
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: clamp(1.35rem, 2vw, 1.75rem);
    line-height: 1.2;
    font-weight: 500;
    letter-spacing: -0.01em;
    color: ${({ theme }) => theme.colors.navy};
    margin: 0;
    max-width: 32ch;
`;

export const ProjectsStatsRow = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border-top: 1px solid ${({ theme }) => theme.colors.lineOnCream};
    border-bottom: 1px solid ${({ theme }) => theme.colors.lineOnCream};
    padding: 0.9rem 0;
    gap: 0;
    min-height: 68px;
    align-items: center;

    @media (max-width: 480px) {
        padding: 0.75rem 0;
        min-height: 58px;
    }
`;

export const ProjectsStat = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.2rem;
    padding: 0 clamp(0.75rem, 1.5vw, 1.25rem);
    position: relative;

    &:first-child {
        padding-left: 0;
    }

    &:last-child {
        padding-right: 0;
    }

    &:not(:first-child)::before {
        content: '';
        position: absolute;
        left: 0;
        top: 4px;
        bottom: 4px;
        width: 1px;
        background: ${({ theme }) => theme.colors.lineOnCream};
    }

    @media (max-width: 480px) {
        padding: 0 0.5rem;

        &:first-child {
            padding-left: 0;
        }

        &:last-child {
            padding-right: 0;
        }
    }
`;

export const ProjectsStatValue = styled.span`
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: clamp(1.1rem, 1.6vw, 1.4rem);
    font-weight: 600;
    line-height: 1.05;
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.colors.navy};
    white-space: nowrap;
`;

export const ProjectsStatLabel = styled.span`
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 0.6rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.ink70};
    opacity: 0.75;
    white-space: nowrap;
`;

export const ProjectsPanelDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
    max-width: 60ch;
`;

export const ProjectsPanelParagraph = styled.p`
    font-size: clamp(0.9rem, 1.2vw, 0.95rem);
    line-height: 1.75;
    color: ${({ theme }) => theme.colors.ink70};
    margin: 0;

    strong {
        color: ${({ theme }) => theme.colors.navy};
        font-weight: 600;
    }
`;

export const ProjectsPanelList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.55rem;
`;

export const ProjectsPanelListItem = styled.li`
    position: relative;
    padding-left: 2rem;
    font-size: clamp(0.9rem, 1.2vw, 0.95rem);
    line-height: 1.7;
    color: ${({ theme }) => theme.colors.ink70};

    &::before {
        content: '';
        position: absolute;
        left: 8px;
        top: 0.7rem;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors.gold};
        box-shadow: 0 0 0 4px rgba(200, 168, 100, 0.15);
    }

    strong {
        color: ${({ theme }) => theme.colors.navy};
        font-weight: 600;
    }
`;