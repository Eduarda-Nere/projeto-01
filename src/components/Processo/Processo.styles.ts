import styled from 'styled-components';

export const ProcessoSection = styled.section`
    background: ${({ theme }) => theme.colors.navy};
    color: ${({ theme }) => theme.colors.cream};
    padding: clamp(3rem, 6vw, 5rem) 0;
    scroll-margin-top: 80px;
    position: relative;
    overflow: hidden;
`;

export const Head = styled.div<{ $visible: boolean }>`
    text-align: center;
    max-width: 720px;
    margin: 0 auto clamp(2.5rem, 5vw, 4rem);
    opacity: ${({ $visible }) => ($visible ? 1 : 0)};
    transform: translateY(${({ $visible }) => ($visible ? '0' : '32px')});
    transition: opacity ${({ theme }) => theme.duration.slower} ${({ theme }) => theme.ease},
                transform ${({ theme }) => theme.duration.slower} ${({ theme }) => theme.ease};
`;

export const Title = styled.h2`
    font-size: clamp(1.9rem, 3.4vw, 2.5rem);
    line-height: 1.08;
    font-weight: 400;
    letter-spacing: -0.01em;
    color: ${({ theme }) => theme.colors.cream};
    margin: 0 0 0.75rem;
`;

export const Tagline = styled.p`
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: clamp(1rem, 1.3vw, 1.15rem);
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: -0.01em;
    color: ${({ theme }) => theme.colors.gold};
    margin: 0;
`;

export const CardsGrid = styled.div<{ $visible: boolean }>`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: clamp(1.25rem, 2vw, 2rem);
    opacity: ${({ $visible }) => ($visible ? 1 : 0)};
    transform: translateY(${({ $visible }) => ($visible ? '0' : '32px')});
    transition: opacity ${({ theme }) => theme.duration.slower} ${({ theme }) => theme.ease} 0.1s,
                transform ${({ theme }) => theme.duration.slower} ${({ theme }) => theme.ease} 0.1s;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 560px) {
        grid-template-columns: 1fr;
    }
`;

export const Card = styled.article<{ $delay: number; $visible: boolean }>`
    position: relative;
    padding: 1.75rem 1.5rem;
    border: 1px solid rgba(210, 170, 78, 0.3);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.015);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    opacity: ${({ $visible }) => ($visible ? 1 : 0)};
    transform: translateY(${({ $visible }) => ($visible ? '0' : '24px')});
    transition: opacity ${({ theme }) => theme.duration.slow} ${({ theme }) => theme.ease} ${({ $delay }) => $delay}s,
                transform ${({ theme }) => theme.duration.slow} ${({ theme }) => theme.ease} ${({ $delay }) => $delay}s,
                border-color ${({ theme }) => theme.duration.fast} ${({ theme }) => theme.ease},
                background ${({ theme }) => theme.duration.fast} ${({ theme }) => theme.ease};

    &:hover {
        border-color: ${({ theme }) => theme.colors.gold};
        background: rgba(210, 170, 78, 0.05);
    }
`;

export const CardNumber = styled.span`
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    color: ${({ theme }) => theme.colors.gold};
    opacity: 0.9;
`;

export const CardTitle = styled.h3`
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 1.15rem;
    font-weight: 500;
    line-height: 1.25;
    color: ${({ theme }) => theme.colors.cream};
    margin: 0;
`;

export const CardText = styled.p`
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 0.9rem;
    line-height: 1.65;
    color: rgba(250, 248, 244, 0.7);
    margin: 0;
`;

export const CardDelivery = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    margin-top: auto;
    padding-top: 1rem;
    border-top: 1px solid ${({ theme }) => theme.colors.lineOnNavy};
`;

export const CardDeliveryLabel = styled.span`
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 0.62rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.gold};
    opacity: 0.85;
`;

export const CardDeliveryText = styled.span`
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 0.78rem;
    line-height: 1.5;
    color: rgba(250, 248, 244, 0.55);
`;