import styled from 'styled-components';
import { SectionSubtitle, SectionDescription } from '../ui';

export const ProcessoWrapper = styled.section`
    position: relative;
    background: ${({ theme }) => theme.colors.paper};
    scroll-margin-top: ${({ theme }) => theme.layout.headerHeight};
    padding-top: calc(${({ theme }) => theme.layout.sectionGapHalf} * 1.25);
    padding-bottom: calc(${({ theme }) => theme.layout.sectionGapHalf} * 1.25);
`;

export const ProcessoInner = styled.div`
    max-width: ${({ theme }) => theme.layout.container};
    margin: 0 auto;
    padding: 0 clamp(1.5rem, 4vw, 3rem);
    display: grid;
    grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
    gap: clamp(2rem, 5vw, 4rem);
    align-items: center;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        gap: clamp(2rem, 4vw, 3rem);
        align-items: start;
    }
`;

export const ProcessoLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    width: 100%;
`;

export const ProcessoRightWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-width: 0;
    width: 100%;
`;

export const ProcessoRight = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
    min-width: 0;
    width: 100%;

    @media (max-width: 900px) {
        gap: 1.25rem;
    }
`;

export const Subtitle = styled(SectionSubtitle)`
    margin: 0.75rem 0 0;
    max-width: 56ch;
`;

export const Stepper = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
`;

export const StepperTrack = styled.div`
    position: absolute;
    top: 24px;
    left: 12.5%;
    right: 12.5%;
    height: 1.5px;
    background: ${({ theme }) => theme.colors.lineOnCream};
    z-index: 0;

    @media (max-width: 480px) {
        top: 20px;
    }
`;

export const StepperProgress = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: ${({ theme }) => theme.colors.gold};
    transition: width 0.6s cubic-bezier(0.23, 1, 0.32, 1);
`;

export const StepperItem = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StepperCircle = styled.button<{
    $active: boolean;
    $done: boolean;
}>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 0.82rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    line-height: 0;
    padding: 4px 0 0 0;
    cursor: pointer;
    border: 1.5px solid
        ${({ $active, $done, theme }) =>
            $active || $done ? theme.colors.gold : theme.colors.lineOnCream};
    background: ${({ theme }) => theme.colors.paper};
    color: ${({ $active, $done, theme }) =>
        $active
            ? theme.colors.paper
            : $done
              ? theme.colors.gold
              : theme.colors.ink70};
    transition:
        background 0.4s ${({ theme }) => theme.easeOut},
        border-color 0.4s ${({ theme }) => theme.easeOut},
        color 0.4s ${({ theme }) => theme.easeOut};

    ${({ $active, theme }) =>
        $active &&
        `
        background: ${theme.colors.gold};
        border-color: ${theme.colors.gold};
    `}

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.gold};
        outline-offset: 3px;
    }

    @media (max-width: 480px) {
        width: 40px;
        height: 40px;
        font-size: 0.75rem;
        padding-top: 2.5px;
    }
`;

export const StepPanel = styled.div`
    position: relative;
    width: calc(75% + 48px);
    margin-left: calc(12.5% - 24px);
    margin-top: 1rem;
    overflow: hidden;
    min-height: 200px;
    background: ${({ theme }) => theme.colors.paper};
    border-radius: 4px;
`;

export const StepTrack = styled.div<{ $offset: number }>`
    display: flex;
    align-items: flex-start;
    transform: translateX(${({ $offset }) => `-${$offset * 100}%`});
    transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    will-change: transform;
`;

export const StepSlide = styled.div`
    flex: 0 0 100%;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem;
    padding: 0;
    background: ${({ theme }) => theme.colors.paper};
    border: none;
    color: ${({ theme }) => theme.colors.navy};
`;

export const StepTitle = styled.h3`
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: clamp(1.4rem, 2.3vw, 1.9rem);
    line-height: 1.15;
    font-weight: 400;
    letter-spacing: -0.01em;
    color: ${({ theme }) => theme.colors.gold};
    margin: 0;
`;

export const StepText = styled(SectionDescription)`
    max-width: 65ch;
    text-align: left;
    hyphens: manual;
    color: ${({ theme }) => theme.colors.ink70};
`;

export const StepDelivery = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
    margin-top: 0.5rem;
`;

export const StepDeliveryLabel = styled.span`
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 0.66rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.gold};
`;

export const StepDeliveryText = styled.span`
    font-size: 0.8rem;
    line-height: 1.5;
    font-style: italic;
    color: ${({ theme }) => theme.colors.ink70};
`;

export const StepFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.75rem;

    @media (max-width: 900px) {
        margin-top: 0;
    }
`;

export const Arrows = styled.div`
    display: flex;
    gap: 1rem;
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