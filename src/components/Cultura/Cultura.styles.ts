import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CulturaSection = styled.section`
    background: ${({ theme }) => theme.colors.paper};
    padding: clamp(3rem, 6vw, 5rem) 0;
    scroll-margin-top: 80px;
`;

export const CulturaIntro = styled.div<{ $visible: boolean }>`
    margin-bottom: clamp(2.5rem, 5vw, 4rem);
    opacity: ${({ $visible }) => ($visible ? 1 : 0)};
    transform: translateY(${({ $visible }) => ($visible ? '0' : '24px')});
    transition: opacity ${({ theme }) => theme.duration.slower} ${({ theme }) => theme.ease},
                transform ${({ theme }) => theme.duration.slower} ${({ theme }) => theme.ease};
`;

export const Title = styled.h2`
    font-size: clamp(1.9rem, 3.4vw, 2.5rem);
    line-height: 1.08;
    font-weight: 400;
    letter-spacing: -0.01em;
    color: ${({ theme }) => theme.colors.navy};
    margin: 0 0 1rem;
`;

export const Subtitle = styled.p`
    font-size: 1rem;
    line-height: 1.7;
    max-width: 52ch;
    color: ${({ theme }) => theme.colors.ink70};
    margin: 0;
`;

export const CulturaGrid = styled.div<{ $visible: boolean }>`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(2.5rem, 6vw, 5rem);
    align-items: stretch;
    opacity: ${({ $visible }) => ($visible ? 1 : 0)};
    transform: translateY(${({ $visible }) => ($visible ? '0' : '24px')});
    transition: opacity ${({ theme }) => theme.duration.slower} ${({ theme }) => theme.ease},
                transform ${({ theme }) => theme.duration.slower} ${({ theme }) => theme.ease};

    @media (max-width: 980px) {
        grid-template-columns: 1fr;
        align-items: start;
    }
`;

export const CulturaContent = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 980px) {
        order: 1;
    }
`;

export const TabButton = styled.button<{ $active: boolean }>`
    position: relative;
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1.25rem 0;
    text-align: left;
    border-top: 1px solid ${({ theme }) => theme.colors.lineOnCream};
    background: transparent;
    border-left: none;
    border-right: none;
    border-bottom: none;
    cursor: pointer;
    width: 100%;
    transition: color ${({ theme }) => theme.duration.medium} ${({ theme }) => theme.ease};

    &:last-child {
        border-bottom: 1px solid ${({ theme }) => theme.colors.lineOnCream};
    }

    color: ${({ $active, theme }) =>
        $active ? theme.colors.navy : theme.colors.ink70};

    &:hover {
        color: ${({ theme }) => theme.colors.navy};
    }

    @media (max-width: 768px) {
        padding: 1rem 0;
    }
`;

export const TabContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    flex: 1;
`;

export const TabTitle = styled.span<{ $active: boolean }>`
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    line-height: 1.6;
    transition: color ${({ theme }) => theme.duration.medium} ${({ theme }) => theme.ease};
    color: ${({ $active, theme }) =>
        $active ? theme.colors.navy : theme.colors.ink70};

    .dot {
        display: inline-block;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors.gold};
        margin: 0 0.65em;
        vertical-align: middle;
        flex-shrink: 0;
    }
`;

export const TabDescription = styled.div<{ $active: boolean }>`
    height: ${({ $active }) => ($active ? '180px' : '0')};
    overflow: hidden;
    opacity: ${({ $active }) => ($active ? 1 : 0)};
    transition: opacity ${({ theme }) => theme.duration.medium} ${({ theme }) => theme.ease};

    @media (max-width: 768px) {
        height: ${({ $active }) => ($active ? '220px' : '0')};
    }
`;

export const TopicList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-bottom: 0.25rem;
`;

export const Topic = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
`;

export const TopicTitle = styled.h4`
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 0.9rem;
    line-height: 1.3;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.navy};
    margin: 0;
    letter-spacing: -0.01em;
`;

export const TopicParagraph = styled.p`
    font-size: 0.875rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.ink70};
    margin: 0;
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
    display: flex;
    height: 100%;
    overflow: hidden;
    border-radius: 4px;

    @media (max-width: 980px) {
        order: 2;
        margin-top: 2rem;
        height: 320px;
        width: 100%;
    }
`;

export const GalleryFrame = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: ${({ theme }) => theme.colors.cream};
    border-radius: 4px;
`;

export const GallerySlide = styled(motion.div)`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    will-change: transform;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }
`;