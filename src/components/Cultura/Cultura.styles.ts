import styled from 'styled-components';
import { motion } from 'framer-motion';
import { SectionSubtitle, SectionDescription, GoldList } from '../ui';

export const CulturaSection = styled.section`
    position: relative;
    background: ${({ theme }) => theme.colors.paper};
    padding: ${({ theme }) => theme.layout.sectionGapHalf} 0;
    scroll-margin-top: 80px;
`;

export const Header = styled(motion.div)`
    margin-bottom: clamp(2.5rem, 6vw, 4rem);
`;

export const Subtitle = styled(SectionSubtitle)`
    margin: 1rem 0 0;
`;

export const PillarList = styled(motion.div)`
    border-top: 1px solid ${({ theme }) => theme.colors.lineOnCream};
`;

export const PillarRow = styled(motion.button)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    width: 100%;
    padding: clamp(1.75rem, 3.5vw, 2.5rem) 0;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lineOnCream};
    background: none;
    text-align: left;
    cursor: pointer;
    font: inherit;
    color: inherit;
    -webkit-tap-highlight-color: transparent;

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.gold};
        outline-offset: 6px;
    }

    @media (max-width: 700px) {
        gap: 1rem;
    }
`;

export const RowMain = styled.span`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const RowKicker = styled(motion.span)`
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: clamp(0.68rem, 1vw, 0.76rem);
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.navy};
`;

export const RowTitleGroup = styled.span`
    display: flex;
    align-items: baseline;
    gap: 1.5rem;
    flex-wrap: wrap;
`;

export const RowTitle = styled(motion.span)`
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: clamp(1.6rem, 3.4vw, 2.4rem);
    font-weight: 300;
    letter-spacing: -0.01em;
    color: ${({ theme }) => theme.colors.navy};
`;

export const RowTeaser = styled(motion.create(SectionDescription))`
    font-size: 0.95rem;
    line-height: 1.6;
    text-align: left;
    hyphens: manual;
    max-width: none;
    white-space: nowrap;

    @media (max-width: 700px) {
        display: none;
    }
`;

export const RowAction = styled(motion.span)`
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    color: ${({ theme }) => theme.colors.navy};

    svg {
        width: 100%;
        height: 100%;
        stroke: currentColor;
        stroke-width: 1.3;
        fill: none;
        stroke-linecap: round;
    }
`;

export const FooterNote = styled(motion.p)`
    position: relative;
    z-index: 2;
    margin: clamp(2.5rem, 6vw, 4rem) auto 0;
    max-width: 62ch;
    text-align: center;
    font-size: clamp(0.9rem, 1.3vw, 0.95rem);
    line-height: 1.75;
    color: ${({ theme }) => theme.colors.ink70};
    font-style: italic;

    strong {
        color: ${({ theme }) => theme.colors.navy};
        font-style: normal;
        font-weight: 600;
    }
`;

export const ModalOverlay = styled(motion.div)`
    position: fixed;
    inset: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    background: ${({ theme }) => theme.colors.overlayDark};
`;

export const ModalPanel = styled(motion.div)`
    position: relative;
    width: min(640px, 100%);
    max-height: 85vh;
    overflow-y: auto;
    overscroll-behavior: contain;
    -webkit-overflow-scrolling: touch;
    touch-action: pan-y;
    background: ${({ theme }) => theme.colors.paper};
    border: 1px solid ${({ theme }) => theme.colors.lineOnCream};
    padding: clamp(2rem, 4vw, 3rem);
`;

export const ModalHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    margin-bottom: 1.75rem;

    @media (max-width: 520px) {
        flex-direction: column-reverse;
        align-items: stretch;
        gap: 0.5rem;
        margin-bottom: 1.5rem;
    }
`;

export const ModalClose = styled.button`
    flex-shrink: 0;
    border: none;
    background: none;
    padding: 0.25rem 0.5rem;
    margin: 0;
    cursor: pointer;
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.ink70};
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    transition: color 0.3s ease;
    line-height: 1;

    svg {
        width: 14px;
        height: 14px;
        stroke: currentColor;
        stroke-width: 1.8;
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        transition: transform 0.3s ease;
    }

    &:hover {
        color: ${({ theme }) => theme.colors.navy};

        svg {
            transform: translateX(-3px);
        }
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.gold};
        outline-offset: 3px;
        border-radius: 4px;
    }

    @media (max-width: 520px) {
        align-self: flex-end;
        padding: 0.5rem 0;
        margin-bottom: 0.25rem;
    }
`;

export const ModalTitle = styled.h3`
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: clamp(1.6rem, 2.6vw, 2.1rem);
    font-weight: 400;
    color: ${({ theme }) => theme.colors.navy};
    margin: 0;

    @media (max-width: 520px) {
        align-self: flex-start;
    }
`;

export const ModalTopicList = styled(GoldList)`
    gap: 1.5rem;
`;

export const CulturaTopic = styled.li`
    position: relative;
    list-style: none;
    padding-left: 1.5rem;
    font-size: 0.95rem;
    line-height: 1.8;
    color: ${({ theme }) => theme.colors.ink70};

    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: calc(0.9em - 3px);
        width: 6px;
        height: 6px;
        background-color: ${({ theme }) => theme.colors.gold};
        transform-origin: center;
    }

    @media (max-width: 640px) {
        display: grid;
        grid-template-columns: 6px 1fr;
        column-gap: 0.75rem;
        row-gap: 0.5rem;
        padding-left: 0;

        &::before {
            position: static;
            align-self: center;
            justify-self: start;
            grid-row: 1;
        }
    }
`;

export const CulturaTopicTitle = styled.h4`
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: clamp(0.95rem, 1.4vw, 1.05rem);
    font-weight: 600;
    color: ${({ theme }) => theme.colors.navy};
    margin: 0 0 0.85rem;
    letter-spacing: -0.01em;

    @media (max-width: 640px) {
        grid-column: 2;
        grid-row: 1;
        align-self: center;
        margin: 0;
    }
`;

export const CulturaTopicDescription = styled.div`
    display: contents;

    @media (max-width: 640px) {
        display: block;
        grid-column: 1 / -1;
    }
`;

export const CulturaTopicParagraph = styled(SectionDescription)`
    text-align: left;
    hyphens: manual;
    font-size: clamp(0.85rem, 1.2vw, 0.9rem);
    line-height: 1.65;
    margin: 0 0 0.85rem;

    &:last-child {
        margin-bottom: 0;
    }

    strong {
        color: ${({ theme }) => theme.colors.navy};
        font-weight: 600;
    }
`;