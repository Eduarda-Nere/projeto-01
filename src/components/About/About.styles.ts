import styled from 'styled-components';

export const AboutSection = styled.section`
    background: ${({ theme }) => theme.colors.paper};
    padding: clamp(3rem, 6vw, 5rem) 0;
    scroll-margin-top: 80px;

    @media (min-width: 1025px) {
        padding: 0;
    }

    @media (max-width: 1024px) {
        padding: 0;
    }
`;

export const AboutGrid = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    column-gap: clamp(1.25rem, 2.5vw, 2.5rem);
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
    padding: clamp(3rem, 6vw, 5rem) clamp(1.5rem, 4vw, 3rem);
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
        padding: clamp(3rem, 6vw, 5rem) clamp(1.5rem, 4vw, 3rem);
        padding-bottom: clamp(1.25rem, 3vw, 2rem);
        transform: none;
        opacity: 1;
    }
`;

export const Title = styled.h2`
    font-size: clamp(1.9rem, 3.4vw, 2.5rem);
    line-height: 1.08;
    font-weight: 400;
    letter-spacing: -0.01em;
    color: ${({ theme }) => theme.colors.navy};
    margin: 0;
`;

export const Block = styled.div`
    display: flex;
    flex-direction: column;
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

export const AboutMediaWrapper = styled.div<{ $visible: boolean }>`
    position: relative;
    display: flex;
    align-items: stretch;
    padding: clamp(3rem, 6vw, 5rem) 0;
    opacity: ${({ $visible }) => ($visible ? 1 : 0)};
    transform: translateX(${({ $visible }) => ($visible ? '0' : '64px')});
    transition:
        opacity 1s ${({ theme }) => theme.ease} 0.15s,
        transform 1s ${({ theme }) => theme.ease} 0.15s;

    @media (max-width: 1024px) {
        order: 2;
        width: 100%;
        padding: 0;
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
    background: ${({ theme }) => theme.colors.cream};

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
        border-radius: 0;
    }

    @media (max-width: 768px) {
        height: 260px;
    }

    @media (max-width: 480px) {
        height: 220px;
    }
`;

export const MarketsStrip = styled.div`
    padding: clamp(3rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3rem);
    padding-left: max(
        clamp(1.5rem, 4vw, 3rem),
        calc((100vw - 1220px) / 2 + clamp(1.5rem, 4vw, 3rem))
    );
    padding-right: max(
        clamp(1.5rem, 4vw, 3rem),
        calc((100vw - 1220px) / 2 + clamp(1.5rem, 4vw, 3rem))
    );

    @media (max-width: 1024px) {
        padding: clamp(2rem, 4vw, 3rem) clamp(1.5rem, 4vw, 3rem);
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