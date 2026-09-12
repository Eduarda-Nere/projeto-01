import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProcessoSection = styled.section`
    background: ${({ theme }) => theme.colors.paper};
    padding: clamp(3rem, 6vw, 5rem) 0;
    scroll-margin-top: 80px;
`;

export const ProcessoGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(2.5rem, 6vw, 5rem);
    align-items: start;

    @media (max-width: 980px) {
        grid-template-columns: 1fr;
    }
`;

export const ProcessoContent = styled.div<{ $visible: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    opacity: ${({ $visible }) => ($visible ? 1 : 0)};
    transform: translateX(${({ $visible }) => ($visible ? '0' : '-56px')});
    transition: opacity ${({ theme }) => theme.duration.slower} ${({ theme }) => theme.ease},
                transform ${({ theme }) => theme.duration.slower} ${({ theme }) => theme.ease};

    @media (max-width: 980px) {
        order: 1;
    }
`;

export const HeaderWrapper = styled.div`
    margin-bottom: 2rem;
`;

export const Title = styled.h2`
    font-size: clamp(1.9rem, 3.4vw, 2.5rem);
    line-height: 1.08;
    font-weight: 400;
    letter-spacing: -0.01em;
    color: ${({ theme }) => theme.colors.navy};
    margin: 0;
    max-width: 18ch;
`;

export const TabButton = styled.button<{ $active: boolean }>`
    position: relative;
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1.5rem 0;
    text-align: left;
    border-top: 1px solid ${({ theme }) => theme.colors.lineOnCream};
    background: transparent;
    border-left: none;
    border-right: none;
    border-bottom: none;
    cursor: pointer;
    width: 100%;
    transition: color ${({ theme }) => theme.duration.medium} ${({ theme }) => theme.ease};

    &:first-child {
        border-top: none;
    }

    color: ${({ $active, theme }) =>
        $active ? theme.colors.navy : theme.colors.ink70};

    &:hover {
        color: ${({ theme }) => theme.colors.navy};
    }

    @media (max-width: 768px) {
        padding: 1.25rem 0;
    }
`;

export const TabContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    flex: 1;
`;

export const TabTitle = styled.span<{ $active: boolean }>`
    font-size: clamp(1.2rem, 2vw, 1.5rem);
    font-weight: 400;
    letter-spacing: -0.01em;
    transition: color ${({ theme }) => theme.duration.medium} ${({ theme }) => theme.ease};
    color: ${({ $active, theme }) =>
        $active ? theme.colors.navy : 'inherit'};
`;

export const TabDescription = styled.div`
    overflow: hidden;
`;

export const TabDescriptionText = styled.p`
    color: ${({ theme }) => theme.colors.ink70};
    font-size: 0.95rem;
    line-height: 1.7;
    max-width: 40ch;
    padding-bottom: 0.5rem;
`;

export const ProgressBar = styled.div`
    position: absolute;
    left: -1rem;
    top: 0;
    bottom: 0;
    width: 2px;
    background: ${({ theme }) => theme.colors.lineOnCream};

    @media (max-width: 768px) {
        left: -0.75rem;
    }
`;

export const ProgressFill = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: ${({ theme }) => theme.colors.navy};
    transform-origin: top;
`;

export const GalleryWrapper = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    align-items: flex-start;
    padding-top: 4.5rem;

    @media (max-width: 980px) {
        order: 2;
        padding-top: 0;
    }
`;

export const GalleryContainer = styled.div`
    position: relative;
    width: 100%;
    aspect-ratio: 4/3;
    border-radius: 1rem;
    overflow: hidden;
    background: ${({ theme }) => theme.colors.paper};
`;

export const GalleryImage = styled(motion.div)`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    will-change: transform, opacity;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }
`;

export const ImageOverlay = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 33%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.2), transparent);
    opacity: 0.6;
`;

export const NavButtons = styled.div`
    position: absolute;
    bottom: 1.5rem;
    right: 1.5rem;
    display: flex;
    gap: 0.5rem;
    z-index: 20;

    @media (min-width: 768px) {
        bottom: 2rem;
        right: 2rem;
        gap: 0.75rem;
    }
`;

export const NavButton = styled.button`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.navy};
    cursor: pointer;
    transition: all ${({ theme }) => theme.duration.fast} ${({ theme }) => theme.ease};

    i {
        font-size: 0.9rem;
    }

    &:hover {
        background: ${({ theme }) => theme.colors.paper};
    }

    &:active {
        transform: scale(0.9);
    }

    @media (min-width: 768px) {
        width: 3rem;
        height: 3rem;

        i {
            font-size: 1.1rem;
        }
    }
`;