import styled from 'styled-components';
import { SectionDescription } from '../ui';

export const AboutSection = styled.section`
    background: ${({ theme }) => theme.colors.paper};
    padding: ${({ theme }) => theme.layout.sectionGapHalf} 0;
    scroll-margin-top: 80px;
`;

export const AboutGrid = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
    column-gap: clamp(2rem, 4vw, 4rem);
    align-items: stretch;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
        column-gap: 0;
        align-items: start;
    }
`;

export const AboutCopy = styled.div<{ $visible: boolean }>`
    display: flex;
    flex-direction: column;
    gap: clamp(1.5rem, 2.5vw, 2rem);
    padding: 0 clamp(1.5rem, 4vw, 3rem);
    padding-left: max(
        clamp(1.5rem, 4vw, 3rem),
        calc((100vw - 1220px) / 2 + clamp(1.5rem, 4vw, 3rem))
    );
    justify-content: center;
    opacity: ${({ $visible }) => ($visible ? 1 : 0)};
    transform: translateX(${({ $visible }) => ($visible ? '0' : '-64px')});
    transition:
        opacity 1s ${({ theme }) => theme.ease},
        transform 1s ${({ theme }) => theme.ease};

    @media (max-width: 1024px) {
        order: 1;
        padding: 0 clamp(1.5rem, 4vw, 3rem) clamp(1.25rem, 3vw, 2rem);
        transform: none;
        opacity: 1;
    }
`;

export const Block = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Paragraph = styled(SectionDescription)`
    max-width: none;
    color: ${({ theme }) => theme.colors.ink70};

    strong {
        color: ${({ theme }) => theme.colors.navy};
        font-weight: 600;
    }
`;

export const AboutMediaWrapper = styled.div<{ $visible: boolean }>`
    position: relative;
    display: flex;
    align-items: stretch;
    opacity: ${({ $visible }) => ($visible ? 1 : 0)};
    transform: translateX(${({ $visible }) => ($visible ? '0' : '64px')});
    transition:
        opacity 1s ${({ theme }) => theme.ease} 0.15s,
        transform 1s ${({ theme }) => theme.ease} 0.15s;

    @media (max-width: 1024px) {
        order: 2;
        width: 100%;
        padding: 0 clamp(1.5rem, 4vw, 3rem);
        margin-top: 0;
        transform: none;
        opacity: 1;
    }
`;

export const AboutMedia = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 12px 0 0 12px;
    background: ${({ theme }) => theme.colors.paper};

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        display: block;
    }

    @media (max-width: 1024px) {
        width: 100%;
        height: 320px;
        max-width: none;
        margin: 0;
        border-radius: 12px;
    }

    @media (max-width: 768px) {
        height: 260px;
    }

    @media (max-width: 480px) {
        height: 220px;
    }
`;

export const MarketsStrip = styled.div`
    padding: 0 clamp(1.5rem, 4vw, 3rem);
    padding-left: max(
        clamp(1.5rem, 4vw, 3rem),
        calc((100vw - 1220px) / 2 + clamp(1.5rem, 4vw, 3rem))
    );
    padding-right: max(
        clamp(1.5rem, 4vw, 3rem),
        calc((100vw - 1220px) / 2 + clamp(1.5rem, 4vw, 3rem))
    );
    margin-top: clamp(2rem, 4vw, 3rem);
`;

export const MarketsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const MarketItem = styled.div<{ $visible: boolean; $delay: number }>`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    padding: 0 clamp(1.25rem, 3vw, 2.5rem);
    opacity: ${({ $visible }) => ($visible ? 1 : 0)};
    transform: translateY(${({ $visible }) => ($visible ? '0' : '40px')});
    transition:
        opacity 0.9s ${({ theme }) => theme.ease} ${({ $delay }) => $delay}s,
        transform 0.9s ${({ theme }) => theme.ease} ${({ $delay }) => $delay}s;

    &:first-child {
        padding-left: 0;
    }

    &:last-child {
        padding-right: 0;
    }

    &:not(:first-child)::before {
        content: '';
        position: absolute;
        left: calc(-1 * clamp(0.625rem, 1.5vw, 1.25rem));
        top: 4px;
        bottom: 4px;
        width: 1px;
        background: ${({ theme }) => theme.colors.lineOnCream};

        @media (max-width: 768px) {
            display: none;
        }
    }

    @media (max-width: 768px) {
        padding: 1.25rem 0;
        border-bottom: 1px solid ${({ theme }) => theme.colors.lineOnCream};

        &:last-child {
            border-bottom: none;
        }

        &::before {
            display: none;
        }
    }
`;

export const MarketHead = styled.div`
    display: flex;
    align-items: center;
    gap: 0.65rem;
`;

export const MarketIcon = styled.svg`
    color: ${({ theme }) => theme.colors.gold};
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    transform: translateY(-2px);
`;

export const MarketTitle = styled.h3`
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: clamp(1rem, 1.15vw, 1.1rem);
    font-weight: 500;
    color: ${({ theme }) => theme.colors.navy};
    line-height: 1.3;
`;

export const MarketDescription = styled(SectionDescription)`
    text-align: left;
    hyphens: manual;
    font-size: 0.9rem;
    line-height: 1.65;
`;