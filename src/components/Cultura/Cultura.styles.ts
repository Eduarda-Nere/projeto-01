import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CulturaSection = styled.section`
    position: relative;
    background: ${({ theme }) => theme.colors.paper};
    padding: clamp(3rem, 8vw, 7rem) 0;
    scroll-margin-top: 80px;
`;

export const Header = styled(motion.div)`
    margin-bottom: clamp(2.5rem, 6vw, 4rem);
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
    font-weight: 500;
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
    font-size: clamp(1.6rem, 3.4vw, 2.4rem);
    font-weight: 400;
    letter-spacing: -0.01em;
    color: ${({ theme }) => theme.colors.navy};
`;

export const RowTeaser = styled(motion.span)`
    font-size: clamp(0.85rem, 1.2vw, 0.95rem);
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.ink70};
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
    background: rgba(0, 0, 0, 0.35);
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

    @media (max-width: 520px) {
        padding-top: 3.5rem;
    }
`;

export const ModalClose = styled.button`
    position: absolute;
    top: clamp(2rem, 4vw, 3rem);
    right: clamp(2rem, 4vw, 3rem);
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
    z-index: 3;
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
        top: 1rem;
        right: 1rem;
        padding: 0.5rem 0.75rem;
        background: ${({ theme }) => theme.colors.paper};
    }
`;

export const ModalKicker = styled.span`
    display: block;
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 0.76rem;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.gold};
`;

export const ModalTitle = styled.h3`
    font-size: clamp(1.6rem, 2.6vw, 2.1rem);
    font-weight: 400;
    color: ${({ theme }) => theme.colors.navy};
    margin: 0.5rem 0 1.75rem;
`;

export const TopicList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

export const TopicItem = styled.li`
    position: relative;
    padding-left: 2rem;
    margin-bottom: 0.25rem;

    &::before {
        content: '';
        position: absolute;
        left: 8px;
        top: 0.7rem;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.colors.gold};
        box-shadow: 0 0 0 4px rgba(200, 168, 100, 0.15);
    }

    &:last-child {
        margin-bottom: 0;
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