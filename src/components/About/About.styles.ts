import styled from 'styled-components';

export const AboutSection = styled.section`
    background: ${({ theme }) => theme.colors.paper};
    padding: clamp(3rem, 6vw, 5rem) 0;
    scroll-margin-top: 80px;
`;

export const AboutGrid = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
    gap: clamp(2.5rem, 6vw, 5rem);
    align-items: stretch;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
        gap: 2.5rem;
        align-items: start;
    }
`;

export const AboutMediaWrapper = styled.div`
    width: 100%;
    display: flex;

    @media (max-width: 1024px) {
        order: 3;
        display: block;
        margin-top: clamp(1.5rem, 4vw, 2.5rem);
    }
`;

export const AboutMedia = styled.div<{ $visible: boolean }>`
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 400px;
    overflow: hidden;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.cream};
    opacity: ${({ $visible }) => ($visible ? 1 : 0)};
    transform: translateX(${({ $visible }) => ($visible ? '0' : '-56px')});
    transition: opacity ${({ theme }) => theme.duration.slowest} ${({ theme }) => theme.ease},
                transform ${({ theme }) => theme.duration.slowest} ${({ theme }) => theme.ease};

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    &::after {
        content: '';
        position: absolute;
        inset: 12px;
        border: 1px solid ${({ theme }) => theme.colors.gold};
        opacity: 0.45;
        pointer-events: none;
    }

    @media (max-width: 1024px) {
        aspect-ratio: 4 / 5;
        height: auto;
        min-height: 0;
        max-width: 420px;
        margin: 0 auto;
        transform: none;
    }

    @media (max-width: 640px) {
        max-width: 340px;
    }

    @media (max-width: 420px) {
        max-width: 280px;
    }
`;

export const AboutCopy = styled.div`
    display: flex;
    flex-direction: column;
    gap: clamp(1.5rem, 2.5vw, 2rem);

    @media (max-width: 1024px) {
        order: 1;
    }
`;

export const Title = styled.h2<{ $visible: boolean }>`
    font-size: clamp(1.9rem, 3.4vw, 2.5rem);
    line-height: 1.08;
    font-weight: 400;
    letter-spacing: -0.01em;
    color: ${({ theme }) => theme.colors.navy};
    margin: 0 0 0.5rem;
    opacity: ${({ $visible }) => ($visible ? 1 : 0)};
    transform: translateX(${({ $visible }) => ($visible ? '0' : '56px')});
    transition: opacity ${({ theme }) => theme.duration.slower} ${({ theme }) => theme.ease},
                transform ${({ theme }) => theme.duration.slower} ${({ theme }) => theme.ease};

    @media (max-width: 1024px) {
        transform: none;
        opacity: 1;
    }
`;

export const Block = styled.div<{ $visible: boolean }>`
    display: flex;
    flex-direction: column;
    opacity: ${({ $visible }) => ($visible ? 1 : 0)};
    transform: translateX(${({ $visible }) => ($visible ? '0' : '56px')});
    transition: opacity ${({ theme }) => theme.duration.slower} ${({ theme }) => theme.ease},
                transform ${({ theme }) => theme.duration.slower} ${({ theme }) => theme.ease};

    @media (max-width: 1024px) {
        transform: none;
        opacity: 1;
    }
`;

export const Paragraph = styled.p`
    font-size: 0.95rem;
    line-height: 1.75;
    color: ${({ theme }) => theme.colors.ink70};
    margin: 0;
    max-width: 62ch;
    text-align: justify;
    hyphens: auto;

    strong {
        color: ${({ theme }) => theme.colors.navy};
        font-weight: 600;
    }

    @media (max-width: 1024px) {
        max-width: 100%;
    }
`;

export const MarketsStrip = styled.div<{ $visible: boolean }>`
    grid-column: 1 / -1;
    margin-top: clamp(2rem, 4vw, 3rem);
    opacity: ${({ $visible }) => ($visible ? 1 : 0)};
    transform: translateY(${({ $visible }) => ($visible ? '0' : '48px')});
    transition: opacity ${({ theme }) => theme.duration.slower} ${({ theme }) => theme.ease},
                transform ${({ theme }) => theme.duration.slower} ${({ theme }) => theme.ease};

    @media (max-width: 1024px) {
        grid-column: auto;
        order: 2;
        margin-top: 0;
        transform: none;
        opacity: 1;
    }
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
    padding: 0 clamp(1.25rem, 2.5vw, 2rem);
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    opacity: ${({ $visible }) => ($visible ? 1 : 0)};
    transform: translateY(${({ $visible }) => ($visible ? '0' : '24px')});
    transition: opacity ${({ theme }) => theme.duration.slow} ${({ theme }) => theme.ease} ${({ $delay }) => $delay}s,
                transform ${({ theme }) => theme.duration.slow} ${({ theme }) => theme.ease} ${({ $delay }) => $delay}s;

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
    }
`;

export const MarketHead = styled.div`
    display: flex;
    align-items: center;
    gap: 0.65rem;
`;

export const MarketIcon = styled.i`
    color: ${({ theme }) => theme.colors.gold};
    font-size: 0.9rem;
    line-height: 1;
`;

export const MarketTitle = styled.h3`
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: clamp(1rem, 1.15vw, 1.1rem);
    font-weight: 500;
    color: ${({ theme }) => theme.colors.navy};
    line-height: 1.3;
`;

export const MarketDescription = styled.p`
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.65;
    color: ${({ theme }) => theme.colors.ink70};
`;