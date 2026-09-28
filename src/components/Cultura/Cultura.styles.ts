import styled from 'styled-components';
import { motion } from 'framer-motion';
import { SectionSubtitle, SectionDescription, GoldList } from '../ui';

export const CulturaSection = styled.section`
    position: relative;
    background: ${({ theme }) => theme.colors.navy};
    color: ${({ theme }) => theme.colors.paper};
    padding-top: calc(${({ theme }) => theme.layout.sectionGapHalf} * 1.25);
    padding-bottom: calc(${({ theme }) => theme.layout.sectionGapHalf} * 1.25);
    scroll-margin-top: ${({ theme }) => theme.layout.headerHeight};
`;

export const Header = styled(motion.div)`
    margin-bottom: clamp(1.25rem, 3vw, 2rem);
`;

export const Subtitle = styled(SectionSubtitle)`
    margin: 0.75rem 0 0;
`;

export const PillarList = styled(motion.div)`
    display: flex;
    flex-direction: column;
`;

export const PillarRow = styled(motion.button)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    width: 100%;
    padding: clamp(1.75rem, 3.5vw, 2.5rem) 0;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.14);
    background: none;
    text-align: left;
    cursor: pointer;
    font: inherit;
    color: inherit;
    -webkit-tap-highlight-color: transparent;

    &:last-child {
        border-bottom: none;
        padding-bottom: 0;
    }

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
    color: ${({ theme }) => theme.colors.gold};
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
    color: ${({ theme }) => theme.colors.paper};
`;

export const RowTeaser = styled(motion.create(SectionDescription))`
    font-size: 0.95rem;
    line-height: 1.6;
    text-align: left;
    hyphens: manual;
    max-width: none;
    white-space: nowrap;
    color: rgba(250, 248, 244, 0.75);

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
    color: ${({ theme }) => theme.colors.paper};

    svg {
        width: 100%;
        height: 100%;
        stroke: currentColor;
        stroke-width: 1.3;
        fill: none;
        stroke-linecap: round;
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
    border: none;
    box-shadow: ${({ theme }) => theme.shadows.medium};
    padding: clamp(2rem, 4vw, 3rem);
`;

export const ModalCloseRow = styled.div`
    position: sticky;
    top: calc(clamp(2rem, 4vw, 3rem) * -1);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin: calc(clamp(2rem, 4vw, 3rem) * -1)
        calc(clamp(2rem, 4vw, 3rem) * -1) 0;
    padding: clamp(0.75rem, 1.5vw, 1rem) clamp(0.75rem, 1.5vw, 1rem) 0.85rem;
    background: ${({ theme }) => theme.colors.paper};
`;

export const ModalCloseTitle = styled.h3`
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: clamp(1.6rem, 2.6vw, 2.1rem);
    font-weight: 300;
    color: ${({ theme }) => theme.colors.navy};
    margin: 0;
    text-align: left;
    padding-left: clamp(1rem, 2vw, 1.25rem);
`;

export const ModalClose = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    padding: 0;
    margin: 0;
    border: none;
    border-radius: 50%;
    background: transparent;
    color: ${({ theme }) => theme.colors.ink70};
    cursor: pointer;
    line-height: 1;
    transition: color 0.3s ease, background 0.3s ease;
    flex-shrink: 0;

    svg {
        width: 20px;
        height: 20px;
        stroke: currentColor;
        stroke-width: 1.6;
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
    }

    &:hover {
        color: ${({ theme }) => theme.colors.navy};
        background: rgba(15, 30, 56, 0.06);
    }

    &:active {
        background: rgba(15, 30, 56, 0.1);
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.gold};
        outline-offset: 3px;
    }
`;

export const ModalHeader = styled.div`
    margin-bottom: 1.75rem;

    @media (max-width: 520px) {
        margin-bottom: 1.5rem;
    }
`;

export const ModalTitle = styled.h3`
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: clamp(1.6rem, 2.6vw, 2.1rem);
    font-weight: 300;
    color: ${({ theme }) => theme.colors.navy};
    margin: 0;
`;

export const ModalTopicList = styled(GoldList)`
    gap: 1.5rem;
    border: none;
    border-top: none;
    border-bottom: none;

    > li {
        border: none;
        border-top: none;
        border-bottom: none;
    }
`;

export const CulturaTopic = styled.li`
    position: relative;
    list-style: none;
    padding-left: 1.5rem;
    font-size: 0.95rem;
    line-height: 1.8;
    color: ${({ theme }) => theme.colors.ink70};
    border: none;

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
    text-align: justify;
    hyphens: auto;
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