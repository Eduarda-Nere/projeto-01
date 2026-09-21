import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProjectsSection = styled.section`
    position: relative;
    background: ${({ theme }) => theme.colors.paper};
    padding: ${({ theme }) => theme.layout.sectionGapHalf} 0;
    overflow-x: clip;
    scroll-margin-top: 80px;
`;

export const ProjectsHeader = styled(motion.div)`
    position: relative;
    z-index: 2;
    margin-bottom: clamp(2rem, 4vw, 3rem);
    text-align: center;
`;

export const ProjectsSubtitle = styled(motion.p)`
    font-size: clamp(0.95rem, 1.2vw, 1.05rem);
    line-height: 1.7;
    color: ${({ theme }) => theme.colors.ink70};
    max-width: 60ch;
    margin: 1rem auto 0;
    text-align: center;
`;

export const ProjectsTabs = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: 0.75rem;
    width: 100%;
    margin-bottom: clamp(1.5rem, 3vw, 2.5rem);
    flex-wrap: wrap;

    @media (max-width: 640px) {
        display: none;
    }
`;

export const ProjectsTab = styled(motion.button)<{ $active: boolean }>`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.65rem 1.35rem;
    border: 1px solid
        ${({ $active, theme }) =>
            $active ? theme.colors.navy : theme.colors.lineOnCream};
    border-radius: 4px;
    background: ${({ $active, theme }) =>
        $active ? theme.colors.navy : 'transparent'};
    color: ${({ $active, theme }) =>
        $active ? theme.colors.paper : theme.colors.navy};
    cursor: pointer;
    font: inherit;
    white-space: nowrap;
    text-align: center;
    transition:
        background 0.4s ${({ theme }) => theme.easeOut},
        border-color 0.4s ${({ theme }) => theme.easeOut},
        color 0.4s ${({ theme }) => theme.easeOut};

    &:hover {
        border-color: ${({ theme }) => theme.colors.navy};
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.gold};
        outline-offset: 4px;
    }
`;

export const ProjectsTabKicker = styled.span<{ $active: boolean }>`
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: ${({ $active, theme }) =>
        $active ? theme.colors.paper : theme.colors.navy};
    transition: color 0.4s ${({ theme }) => theme.easeOut};
`;

export const ProjectsDropdownWrapper = styled.div`
    position: relative;
    display: none;
    width: 100%;
    max-width: 420px;
    margin: 0 auto clamp(1.5rem, 3vw, 2.5rem);

    @media (max-width: 640px) {
        display: block;
    }
`;

export const ProjectsDropdownTrigger = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    width: 100%;
    padding: 0.95rem 1.25rem;
    border: 1px solid ${({ theme }) => theme.colors.lineOnCream};
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.paper};
    color: ${({ theme }) => theme.colors.navy};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    text-align: left;
    cursor: pointer;
    transition:
        border-color 0.3s ${({ theme }) => theme.easeOut},
        box-shadow 0.3s ${({ theme }) => theme.easeOut};

    &:hover {
        border-color: ${({ theme }) => theme.colors.navy};
    }

    &:focus-visible {
        outline: none;
        border-color: ${({ theme }) => theme.colors.navy};
        box-shadow: ${({ theme }) => theme.shadows.focus};
    }
`;

export const ProjectsDropdownChevron = styled.span<{ $open: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 14px;
    height: 14px;
    color: ${({ theme }) => theme.colors.navy};
    flex-shrink: 0;
    transform: rotate(${({ $open }) => ($open ? '180deg' : '0deg')});
    transition: transform 0.3s ${({ theme }) => theme.easeOut};

    svg {
        width: 100%;
        height: 100%;
        stroke: currentColor;
        stroke-width: 2.2;
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
    }
`;

export const ProjectsDropdownMenu = styled(motion.ul)`
    position: absolute;
    top: calc(100% + 0.5rem);
    left: 0;
    right: 0;
    z-index: 20;
    list-style: none;
    padding: 0.4rem;
    margin: 0;
    border: 1px solid ${({ theme }) => theme.colors.lineOnCream};
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.paper};
    box-shadow: ${({ theme }) => theme.shadows.medium};
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
    max-height: 320px;
    overflow-y: auto;
`;

export const ProjectsDropdownOption = styled.li<{ $active: boolean }>`
    display: flex;
    align-items: center;
    padding: 0.75rem 0.85rem;
    border-radius: 4px;
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 0.74rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${({ $active, theme }) =>
        $active ? theme.colors.paper : theme.colors.navy};
    background: ${({ $active, theme }) =>
        $active ? theme.colors.navy : 'transparent'};
    cursor: pointer;
    transition:
        background 0.2s ${({ theme }) => theme.easeOut},
        color 0.2s ${({ theme }) => theme.easeOut};

    &:hover {
        background: ${({ $active, theme }) =>
            $active ? theme.colors.navy : theme.colors.navySoft06};
    }
`;

export const ProjectsStage = styled.div`
    position: relative;
    width: 100%;
`;

export const ProjectsCard = styled(motion.article)`
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: clamp(2rem, 4vw, 3.5rem);
    padding: clamp(1.75rem, 3vw, 2.5rem) clamp(1.5rem, 3vw, 2.5rem);
    border: 1px solid ${({ theme }) => theme.colors.lineOnCream};
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.paper};
    align-items: start;

    @media (max-width: 940px) {
        grid-template-columns: 1fr;
        gap: 1.75rem;
    }
`;

export const ProjectsCardMain = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-width: 0;
`;

export const ProjectsCardSubtitle = styled.h3`
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: clamp(1.2rem, 1.8vw, 1.5rem);
    line-height: 1.3;
    font-weight: 400;
    letter-spacing: -0.01em;
    color: ${({ theme }) => theme.colors.navy};
    margin: 0;
`;

export const ProjectsCardDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
    margin-top: 0.25rem;
`;

export const ProjectsCardParagraph = styled.p`
    font-size: 0.9rem;
    line-height: 1.7;
    color: ${({ theme }) => theme.colors.ink70};
    margin: 0;

    strong {
        color: ${({ theme }) => theme.colors.navy};
        font-weight: 600;
    }
`;

export const ProjectsCardStats = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-left: clamp(1.5rem, 3vw, 2.5rem);
    border-left: 1px solid ${({ theme }) => theme.colors.lineOnCream};
    min-width: 160px;

    @media (max-width: 940px) {
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        padding-left: 0;
        padding-top: 1.25rem;
        border-left: none;
        border-top: 1px solid ${({ theme }) => theme.colors.lineOnCream};
        min-width: 0;
        gap: 1rem;
    }
`;

export const ProjectsCardStat = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.2rem;

    @media (max-width: 940px) {
        flex: 1;
        align-items: center;
        text-align: center;
    }
`;

export const ProjectsCardStatValue = styled.span`
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: clamp(1.1rem, 1.4vw, 1.3rem);
    font-weight: 600;
    line-height: 1.05;
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.colors.navy};
    white-space: nowrap;
`;

export const ProjectsCardStatLabel = styled.span`
    font-size: 0.58rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.ink70};
    opacity: 0.75;
    white-space: nowrap;
`;