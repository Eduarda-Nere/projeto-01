import styled from 'styled-components';
import { motion } from 'framer-motion';
import { SectionDescription } from '../ui';

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

export const ProjectsTab = styled(motion.button) <{
    $active: boolean;
    $disabled?: boolean;
}>`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.65rem 1.35rem;
    border: 1px solid
        ${({ $active, $disabled, theme }) =>
        $disabled
            ? theme.colors.lineOnCream
            : $active
                ? theme.colors.navy
                : theme.colors.lineOnCream};
    border-radius: 4px;
    background: ${({ $active, $disabled, theme }) =>
        $disabled
            ? 'transparent'
            : $active
                ? theme.colors.navy
                : 'transparent'};
    color: ${({ $active, $disabled, theme }) =>
        $disabled
            ? theme.colors.ink70
            : $active
                ? theme.colors.paper
                : theme.colors.navy};
    cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
    font: inherit;
    white-space: nowrap;
    text-align: center;
    opacity: ${({ $disabled }) => ($disabled ? 0.45 : 1)};
    transition:
        background 0.4s ${({ theme }) => theme.easeOut},
        border-color 0.4s ${({ theme }) => theme.easeOut},
        color 0.4s ${({ theme }) => theme.easeOut},
        opacity 0.4s ${({ theme }) => theme.easeOut};

    &:hover {
        border-color: ${({ $disabled, theme }) =>
        $disabled ? theme.colors.lineOnCream : theme.colors.navy};
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.gold};
        outline-offset: 4px;
    }
`;

export const ProjectsTabKicker = styled.span<{
    $active: boolean;
    $disabled?: boolean;
}>`
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: ${({ $active, $disabled, theme }) =>
        $disabled
            ? theme.colors.ink70
            : $active
                ? theme.colors.paper
                : theme.colors.navy};
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

export const ProjectsDropdownOption = styled.li<{
    $active: boolean;
    $disabled?: boolean;
}>`
    display: flex;
    align-items: center;
    padding: 0.75rem 0.85rem;
    border-radius: 4px;
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 0.74rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${({ $active, $disabled, theme }) =>
        $disabled
            ? theme.colors.ink70
            : $active
                ? theme.colors.paper
                : theme.colors.navy};
    background: ${({ $active, $disabled, theme }) =>
        $disabled
            ? 'transparent'
            : $active
                ? theme.colors.navy
                : 'transparent'};
    cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
    opacity: ${({ $disabled }) => ($disabled ? 0.45 : 1)};
    transition:
        background 0.2s ${({ theme }) => theme.easeOut},
        color 0.2s ${({ theme }) => theme.easeOut};

    &:hover {
        background: ${({ $active, $disabled, theme }) =>
        $disabled
            ? 'transparent'
            : $active
                ? theme.colors.navy
                : theme.colors.navySoft06};
    }
`;

export const ProjectsStage = styled.div`
    position: relative;
    width: 100%;
`;

export const ProjectsGrid = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.4fr);
    gap: clamp(1.5rem, 3vw, 2.5rem);
    align-items: stretch;

    @media (max-width: 940px) {
        grid-template-columns: 1fr;
    }
`;

export const ProjectsVisual = styled.div`
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    min-height: 100%;

    @media (max-width: 940px) {
        min-height: 420px;
    }
`;

export const ProjectsVisualImage = styled.div`
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

export const ProjectsVisualScrim = styled.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(
        180deg,
        rgba(15, 30, 56, 0.15) 0%,
        rgba(15, 30, 56, 0.05) 45%,
        rgba(15, 30, 56, 0.55) 100%
    );
    pointer-events: none;
`;

export const ProjectsVisualBands = styled.div`
    position: absolute;
    right: clamp(1rem, 2vw, 1.5rem);
    bottom: clamp(1rem, 2vw, 1.5rem);
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.5rem;
    width: auto;
    max-width: 70%;
`;

export const ProjectsVisualBand = styled.div`
    display: inline-flex;
    align-items: baseline;
    gap: 0.6rem;
    padding: 0.7rem 1.1rem;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(24px) saturate(160%);
    -webkit-backdrop-filter: blur(24px) saturate(160%);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    white-space: nowrap;
`;

export const ProjectsVisualBandValue = styled.span`
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: clamp(1.05rem, 1.5vw, 1.25rem);
    font-weight: 400;
    line-height: 1;
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.colors.paper};
    text-shadow: 0 2px 12px rgba(0, 0, 0, 0.35);
`;

export const ProjectsVisualBandLabel = styled.span`
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 0.6rem;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.85);
    text-shadow: 0 1px 8px rgba(0, 0, 0, 0.35);
`;

export const ProjectsCard = styled(motion.article)`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: clamp(1.75rem, 3vw, 2.5rem) clamp(1.5rem, 3vw, 2.5rem);
    border: 1px solid ${({ theme }) => theme.colors.lineOnCream};
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.paper};
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

export const ProjectsCardParagraph = styled(SectionDescription)`
    max-width: none;
    text-align: left;
    hyphens: manual;

    strong {
        color: ${({ theme }) => theme.colors.navy};
        font-weight: 600;
    }
`;