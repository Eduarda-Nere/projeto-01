import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CulturaSection = styled.section`
    position: relative;
    background: #ffffff;
    padding: clamp(3rem, 8vw, 7rem) 0;
    overflow: hidden;
    scroll-margin-top: 80px;
`;

export const Header = styled(motion.div)`
    position: relative;
    z-index: 2;
    margin-bottom: clamp(2.5rem, 6vw, 5rem);
`;

export const Title = styled(motion.h2)`
    font-size: clamp(1.75rem, 4.5vw, 3.25rem);
    line-height: 1.05;
    font-weight: 400;
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.colors.navy};
    margin: 0 0 1rem;
    max-width: 20ch;
`;

export const Subtitle = styled(motion.p)`
    font-size: clamp(0.95rem, 1.4vw, 1.05rem);
    line-height: 1.7;
    max-width: 56ch;
    color: ${({ theme }) => theme.colors.ink70};
    margin: 0;
`;

export const Stage = styled.div`
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.4fr);
    grid-template-areas:
        'timeline content'
        'nav      nav';
    column-gap: clamp(2rem, 5vw, 5rem);
    row-gap: 0;
    align-items: stretch;
    min-height: 520px;

    @media (max-width: 1024px) {
        grid-template-columns: minmax(0, 320px) minmax(0, 1fr);
        column-gap: clamp(1.5rem, 4vw, 3rem);
        min-height: auto;
    }

    @media (max-width: 940px) {
        grid-template-columns: 1fr;
        grid-template-areas:
            'timeline'
            'nav'
            'content';
        column-gap: 0;
        min-height: auto;
    }
`;

export const TimelineScale = styled(motion.div)`
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

export const TimelineColumn = styled.div`
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

export const TimelineCanvas = styled.div`
    position: relative;
    width: calc(100% + 56px);
    height: 100%;
    padding: 2rem;
    margin-left: -28px;

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
        height: 170px;
        padding: 1.5rem 1rem;
        background-size: 22px 22px;
    }

    @media (max-width: 480px) {
        width: calc(100% + 40px);
        margin-left: -20px;
        height: 145px;
        padding: 1.25rem 0.75rem;
        background-size: 20px 20px;
    }
`;

export const TimelineTrack = styled.div`
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
        width: calc(clamp(4.5rem, 32vw, 8rem) * 2 + 32px);
        height: 2px;
        margin-top: -1px;
        transform: translateX(-50%);
    }

    @media (max-width: 480px) {
        width: calc(clamp(3.5rem, 26vw, 6rem) * 2 + 26px);
    }
`;

export const TimelineProgress = styled(motion.div)<{ $progress: number }>`
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

export const TimelinePoints = styled.div`
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
        gap: clamp(4.5rem, 32vw, 8rem);
        width: auto;
    }

    @media (max-width: 480px) {
        gap: clamp(3.5rem, 26vw, 6rem);
    }
`;

export const TimelinePoint = styled(motion.button)<{ $active: boolean }>`
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

export const Dot = styled(motion.span)<{ $active: boolean }>`
    display: block;
    width: ${({ $active }) => ($active ? '22px' : '14px')};
    height: ${({ $active }) => ($active ? '22px' : '14px')};
    border-radius: 50%;
    background: ${({ $active, theme }) =>
        $active ? theme.colors.navy : '#ffffff'};
    border: 2px solid
        ${({ $active, theme }) =>
            $active ? theme.colors.navy : theme.colors.lineOnCream};
    box-shadow: ${({ $active }) =>
        $active ? '0 0 0 6px rgba(29, 53, 87, 0.12)' : 'none'};
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);

    @media (max-width: 480px) {
        width: ${({ $active }) => ($active ? '18px' : '12px')};
        height: ${({ $active }) => ($active ? '18px' : '12px')};
    }
`;

export const PointLabel = styled(motion.span)<{ $active: boolean }>`
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
        margin-top: 0.85rem;
        font-size: ${({ $active }) => ($active ? '0.75rem' : '0.68rem')};
    }

    @media (max-width: 480px) {
        margin-top: 0.7rem;
        font-size: ${({ $active }) => ($active ? '0.7rem' : '0.62rem')};
        letter-spacing: 0.1em;
    }
`;

export const NavBar = styled.div`
    grid-area: nav;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: clamp(2.5rem, 6vw, 4.5rem);
    margin-bottom: 1.5rem;

    @media (max-width: 940px) {
        margin-top: 2.5rem;
        margin-bottom: 3.5rem;
    }

    @media (max-width: 480px) {
        margin-top: 2rem;
        margin-bottom: 3rem;
    }
`;

export const ArrowButton = styled(motion.button)`
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

export const ContentPanel = styled.div`
    grid-area: content;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 940px) {
        text-align: left;
    }
`;

export const PanelSizer = styled.div`
    visibility: hidden;
    pointer-events: none;
    display: flex;
    flex-direction: column;
    gap: 1.75rem;

    @media (max-width: 940px) {
        display: none;
    }
`;

export const PanelInner = styled(motion.div)`
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    gap: 1.75rem;

    @media (max-width: 940px) {
        position: relative;
        inset: auto;
        gap: 1.5rem;
    }
`;

export const PanelKicker = styled(motion.span)`
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: clamp(1.05rem, 1.6vw, 1.25rem);
    font-weight: 500;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #d2aa4e;
`;

export const TopicList = styled(motion.ul)`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
`;

export const TopicItem = styled(motion.li)`
    padding-left: 1.5rem;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0.55em;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors.gold};
        box-shadow: 0 0 0 4px rgba(200, 168, 100, 0.15);
    }
`;

export const TopicTitle = styled.h4`
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: clamp(0.95rem, 1.4vw, 1.05rem);
    font-weight: 600;
    color: ${({ theme }) => theme.colors.navy};
    margin: 0 0 0.5rem;
    letter-spacing: -0.01em;
`;

export const TopicParagraph = styled.p`
    font-size: clamp(0.85rem, 1.2vw, 0.9rem);
    line-height: 1.65;
    color: ${({ theme }) => theme.colors.ink70};
    margin: 0 0 0.75rem;

    &:last-child {
        margin-bottom: 0;
    }

    strong {
        color: ${({ theme }) => theme.colors.navy};
        font-weight: 600;
    }
`;

export const FooterNote = styled(motion.p)`
    position: relative;
    z-index: 2;
    margin: 0.75rem auto 0;
    max-width: 62ch;
    text-align: center;
    font-size: clamp(0.9rem, 1.3vw, 0.95rem);
    line-height: 1.75;
    color: ${({ theme }) => theme.colors.ink70};
    font-style: italic;
    padding: 0 clamp(1rem, 4vw, 0);

    strong {
        color: ${({ theme }) => theme.colors.navy};
        font-style: normal;
        font-weight: 600;
    }

    @media (max-width: 940px) {
        margin-top: 1.5rem;
    }
`;