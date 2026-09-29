import styled, { css } from 'styled-components';
import { SectionSubtitle, SectionDescription } from '../ui';

export const ProcessoWrapper = styled.section<{ $forceMobile?: boolean }>`
    position: relative;
    background: ${({ theme }) => theme.colors.paper};
    scroll-margin-top: ${({ theme }) => theme.layout.headerHeight};
    padding-top: calc(${({ theme }) => theme.layout.sectionGapHalf} * 1.25);
    padding-bottom: calc(${({ theme }) => theme.layout.sectionGapHalf} * 1.25);
    overflow: clip;

    ${({ $forceMobile }) =>
        $forceMobile &&
        css`
            --force-mobile: 1;
        `}
`;

export const ProcessoInner = styled.div`
    max-width: ${({ theme }) => theme.layout.container};
    margin: 0 auto;
    padding: 0 clamp(1.5rem, 4vw, 3rem);
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.15fr);
    gap: clamp(2.5rem, 5vw, 5rem);
    align-items: start;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
        gap: clamp(3rem, 6vw, 4.5rem);
    }

    ${ProcessoWrapper}[style*="--force-mobile"] & {
        grid-template-columns: 1fr;
        gap: clamp(3rem, 6vw, 4.5rem);
    }
`;

export const ProcessoLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    width: 100%;

    @media (min-width: 1025px) {
        position: sticky;
        top: calc(${({ theme }) => theme.layout.headerHeight} + 3rem);
    }

    ${ProcessoWrapper}[style*="--force-mobile"] & {
        position: static;
    }
`;

export const Subtitle = styled(SectionSubtitle)`
    margin: 1rem 0 0;
    max-width: 56ch;
`;

export const Spine = styled.div<{ $mobile?: boolean }>`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0;
    margin-top: clamp(2.5rem, 5vw, 3.5rem);

    @media (max-width: 1024px) {
        display: none;
    }

    ${ProcessoWrapper}[style*="--force-mobile"] & {
        display: none;
    }
`;

export const SpineTrack = styled.span<{ $vertical?: boolean }>`
    position: absolute;
    z-index: 0;
    pointer-events: none;
    overflow: hidden;
    background: ${({ theme }) => theme.colors.lineOnCream};

    ${({ $vertical }) =>
        $vertical
            ? `
                top: calc(0.6rem + 22px);
                bottom: calc(0.6rem + 22px);
                left: 22px;
                width: 2px;
                height: auto;
                transform: none;
            `
            : `
                top: 50%;
                left: 22px;
                right: 22px;
                height: 1.5px;
                transform: translateY(-50%);
            `}
`;

export const SpineTrackFill = styled.span<{ $vertical?: boolean }>`
    position: absolute;
    inset: 0;
    background: ${({ theme }) => theme.colors.gold};
    transform-origin: ${({ $vertical }) =>
        $vertical ? 'top center' : 'left center'};
    transition: transform 0.55s ${({ theme }) => theme.easeOut};
`;

export const SpineRow = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.6rem 0;
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
    font: inherit;
    color: inherit;

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.gold};
        outline-offset: 4px;
    }
`;

export const SpineDot = styled.span<{
    $active: boolean;
    $current: boolean;
}>`
    position: relative;
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 1.5px solid
        ${({ $active, theme }) =>
            $active ? theme.colors.gold : theme.colors.lineOnCream};
    background: ${({ theme }) => theme.colors.paper};
    z-index: 2;
    transition:
        border-color 0.5s ${({ theme }) => theme.easeOut},
        box-shadow 0.5s ${({ theme }) => theme.easeOut};

    ${({ $current }) =>
        $current &&
        `
            box-shadow: 0 0 0 3px rgba(210, 170, 78, 0.18);
        `}
`;

export const SpineDotNumber = styled.span<{ $active: boolean }>`
    display: block;
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 0.85rem;
    font-weight: 600;
    line-height: 1;
    padding-top: 4px;
    color: ${({ $active, theme }) =>
        $active ? theme.colors.navy : theme.colors.ink70};
    transition: color 0.5s ${({ theme }) => theme.easeOut};
`;

export const SpineLabel = styled.span<{ $active: boolean }>`
    font-size: 0.85rem;
    font-weight: ${({ $active }) => ($active ? 600 : 400)};
    color: ${({ $active, theme }) =>
        $active ? theme.colors.navy : theme.colors.ink70};
    transition: color 0.4s ${({ theme }) => theme.easeOut},
        font-weight 0.4s ${({ theme }) => theme.easeOut};
`;

export const StepList = styled.div`
    display: flex;
    flex-direction: column;
    gap: clamp(1.5rem, 3vw, 2.25rem);
    width: 100%;

    @media (max-width: 1024px) {
        display: none;
    }

    ${ProcessoWrapper}[style*="--force-mobile"] & {
        display: none;
    }
`;

export const StepPanel = styled.article`
    position: relative;
    overflow: hidden;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.navy};
    color: ${({ theme }) => theme.colors.paper};
    padding: clamp(3rem, 6vw, 5rem) clamp(2rem, 4vw, 3rem);

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        pointer-events: none;
        background-image:
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
        background-size: 48px 48px;
        -webkit-mask-image: linear-gradient(to bottom, black, transparent 85%);
        mask-image: linear-gradient(to bottom, black, transparent 85%);
    }

    @media (max-width: 1024px) {
        padding: 2rem 2rem;
        height: 20rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-radius: 0;
    }

    @media (max-width: 640px) {
        padding: 1.75rem 1.5rem;
        height: 22rem;
    }

    ${ProcessoWrapper}[style*="--force-mobile"] & {
        padding: 2rem 2rem;
        height: 20rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-radius: 0;
    }
`;

export const StepBody = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.25rem;
    max-width: 56ch;
    width: 100%;

    @media (max-width: 1024px) {
        max-height: 100%;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
    }

    ${ProcessoWrapper}[style*="--force-mobile"] & {
        max-height: 100%;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
    }
`;

export const StepTitle = styled.h3`
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: clamp(1.5rem, 2.6vw, 2rem);
    line-height: 1.15;
    font-weight: 400;
    letter-spacing: -0.01em;
    margin: 0;
    color: inherit;
`;

export const StepText = styled(SectionDescription)`
    max-width: none;
    text-align: left;
    hyphens: manual;
    color: rgba(250, 248, 244, 0.78);
`;

export const StepDelivery = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 0.5rem;
`;

export const StepDeliveryLabel = styled.span`
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 0.66rem;
    font-weight: 600;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    line-height: 1;
    color: ${({ theme }) => theme.colors.gold};
`;

export const StepDeliveryText = styled.span`
    font-size: 0.85rem;
    line-height: 1.5;
    color: rgba(250, 248, 244, 0.78);
`;

export const MobileStepWrapper = styled.div`
    display: none;

    @media (max-width: 1024px) {
        display: block;
        width: 100%;
        max-width: ${({ theme }) => theme.layout.container};
        margin: 0 auto;
        padding: 0 clamp(1.5rem, 4vw, 3rem);
        margin-top: clamp(3rem, 6vw, 4.5rem);
    }

    ${ProcessoWrapper}[style*="--force-mobile"] & {
        display: block;
        width: 100%;
        max-width: ${({ theme }) => theme.layout.container};
        margin: 0 auto;
        padding: 0 clamp(1.5rem, 4vw, 3rem);
        margin-top: clamp(3rem, 6vw, 4.5rem);
    }
`;

export const MobileCarouselViewport = styled.div`
    position: relative;
    overflow: hidden;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.navy};
    isolation: isolate;
`;

export const MobileCarouselInner = styled.div`
    width: 100%;
    height: 100%;
`;

export const MobileNav = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.25rem;
    margin-top: 1.5rem;
`;

export const MobileNavButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 1.5px solid ${({ theme }) => theme.colors.navy};
    background: ${({ theme }) => theme.colors.navy};
    color: ${({ theme }) => theme.colors.paper};
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition:
        background 0.3s ${({ theme }) => theme.easeOut},
        border-color 0.3s ${({ theme }) => theme.easeOut},
        color 0.3s ${({ theme }) => theme.easeOut},
        opacity 0.3s ${({ theme }) => theme.easeOut};

    svg {
        width: 20px;
        height: 20px;
        stroke-width: 1.8;
    }

    &:hover:not(:disabled) {
        background: ${({ theme }) => theme.colors.navyDeep};
        border-color: ${({ theme }) => theme.colors.navyDeep};
        color: ${({ theme }) => theme.colors.paper};
    }

    &:active:not(:disabled),
    &:focus:not(:disabled),
    &:focus-visible:not(:disabled) {
        background: ${({ theme }) => theme.colors.navy};
        border-color: ${({ theme }) => theme.colors.navy};
        color: ${({ theme }) => theme.colors.paper};
        outline: none;
    }

    &:disabled {
        opacity: 0.35;
        cursor: not-allowed;
    }
`;

export const MobileCounter = styled.span`
    display: inline-block;
    min-width: 5rem;
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    color: ${({ theme }) => theme.colors.navy};

    span {
        color: ${({ theme }) => theme.colors.ink70};
        font-weight: 400;
    }
`;