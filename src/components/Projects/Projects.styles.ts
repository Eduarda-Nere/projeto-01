import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProjectsSection = styled.section`
    position: relative;
    background: #ffffff;
    padding: clamp(3rem, 6vw, 5rem) 0;
    overflow-x: clip;
    scroll-margin-top: 80px;
`;

export const ProjectsHeader = styled(motion.div)`
    position: relative;
    z-index: 2;
    margin-bottom: clamp(2rem, 4vw, 3rem);
`;

export const ProjectsTabs = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: 0.75rem;
    width: 100%;
    margin-bottom: clamp(2rem, 4vw, 3rem);
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
    border-radius: 8px;
    background: ${({ $active, theme }) =>
        $active ? theme.colors.navy : 'transparent'};
    color: ${({ $active, theme }) =>
        $active ? theme.colors.paper : theme.colors.navy};
    cursor: pointer;
    font: inherit;
    white-space: nowrap;
    text-align: center;
    transition:
        background 0.4s cubic-bezier(0.23, 1, 0.32, 1),
        border-color 0.4s cubic-bezier(0.23, 1, 0.32, 1),
        color 0.4s cubic-bezier(0.23, 1, 0.32, 1);

    &:hover {
        border-color: ${({ theme }) => theme.colors.navy};
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.gold};
        outline-offset: 4px;
    }
`;

export const ProjectsTabKicker = styled.span<{ $active: boolean }>`
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: ${({ $active, theme }) =>
        $active ? theme.colors.paper : theme.colors.navy};
    transition: color 0.4s cubic-bezier(0.23, 1, 0.32, 1);
`;

export const ProjectsDropdown = styled(motion.div)`
    display: none;
    width: 100%;
    margin-bottom: clamp(2rem, 4vw, 3rem);

    @media (max-width: 640px) {
        display: flex;
        justify-content: center;
    }
`;

export const ProjectsDropdownWrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 420px;
`;

export const ProjectsDropdownTrigger = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    width: 100%;
    padding: 0.95rem 1.25rem;
    border: 1px solid ${({ theme }) => theme.colors.lineOnCream};
    border-radius: 8px;
    background: #ffffff;
    color: ${({ theme }) => theme.colors.navy};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    text-align: left;
    cursor: pointer;
    transition:
        border-color 0.3s cubic-bezier(0.23, 1, 0.32, 1),
        box-shadow 0.3s cubic-bezier(0.23, 1, 0.32, 1);

    &:hover {
        border-color: ${({ theme }) => theme.colors.navy};
    }

    &:focus-visible {
        outline: none;
        border-color: ${({ theme }) => theme.colors.navy};
        box-shadow: 0 0 0 3px rgba(15, 30, 56, 0.12);
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
    transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);

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
    border-radius: 8px;
    background: #ffffff;
    box-shadow: 0 12px 32px rgba(15, 30, 56, 0.12);
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
    border-radius: 6px;
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
        background 0.2s cubic-bezier(0.23, 1, 0.32, 1),
        color 0.2s cubic-bezier(0.23, 1, 0.32, 1);

    &:hover {
        background: ${({ $active, theme }) =>
            $active ? theme.colors.navy : 'rgba(15, 30, 56, 0.06)'};
    }
`;

export const ProjectsStage = styled.div`
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.4fr);
    column-gap: clamp(2rem, 5vw, 5rem);
    row-gap: 1.5rem;
    align-items: start;

    @media (max-width: 940px) {
        grid-template-columns: 1fr;
        column-gap: 0;
        row-gap: 1.7rem;
    }
`;

export const ProjectsImageColumn = styled.div`
    position: relative;
    display: flex;
    align-items: flex-start;

    @media (min-width: 941px) {
        margin-left: calc((100vw - 100%) / -2);
        width: calc(100% + ((100vw - 100%) / 2));
    }

    @media (max-width: 940px) {
        order: 2;
        width: 100%;
    }
`;

export const ProjectsImage = styled.div`
    position: relative;
    width: 100%;
    max-height: 520px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: 4px;
    background: transparent;

    img {
        position: relative;
        z-index: 1;
        width: 100%;
        height: auto;
        max-height: 520px;
        display: block;
        object-fit: cover;
        object-position: center;
        border-radius: 4px;
    }

    @media (max-width: 940px) {
        aspect-ratio: 16 / 10;
        max-height: none;
        height: auto;

        img {
            height: 100%;
            object-fit: contain;
        }
    }
`;

export const ProjectsContentPanel = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    background: #ffffff;

    @media (max-width: 940px) {
        text-align: center;
        height: auto;
        min-height: 0;
        order: 1;
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
    background: #ffffff;

    @media (max-width: 940px) {
        position: relative;
        inset: auto;
        justify-content: flex-start;
        align-items: center;
    }
`;

export const ProjectsPanelSubtitle = styled.h3`
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: clamp(1.35rem, 2vw, 1.75rem);
    line-height: 1.2;
    font-weight: 500;
    letter-spacing: -0.01em;
    color: ${({ theme }) => theme.colors.gold};
    margin: 0;
    max-width: 32ch;

    @media (max-width: 940px) {
        text-align: center;
        margin: 0 auto;
    }
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
    width: 100%;

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

    @media (max-width: 940px) {
        text-align: left;
        margin: 0 auto;
    }
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
    text-align: left;

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