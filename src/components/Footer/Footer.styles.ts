import styled, { css } from 'styled-components';

export const StyledFooter = styled.footer`
    background: ${({ theme }) => theme.colors.navy};
    color: rgba(250, 248, 244, 0.85);
`;

export const FooterInner = styled.div`
    max-width: ${({ theme }) => theme.layout.container};
    margin: 0 auto;
    padding: clamp(3rem, 6vw, 5rem) clamp(1.5rem, 4vw, 3rem);
    display: grid;
    grid-template-columns: minmax(0, 2fr) minmax(0, 0.7fr) minmax(0, 1fr);
    gap: clamp(2.5rem, 5vw, 5rem);
    align-items: start;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
        row-gap: 3rem;
    }

    @media (max-width: 640px) {
        grid-template-columns: 1fr;
        gap: 2.5rem;
        text-align: center;
    }
`;

export const FooterBrand = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: flex-start;

    @media (max-width: 1024px) {
        grid-column: 1 / -1;
        max-width: 100%;
    }

    @media (max-width: 640px) {
        align-items: center;
    }
`;

export const FooterLogo = styled.div`
    flex-shrink: 0;

    svg {
        height: 76px;
        width: auto;
        display: block;

        .lopez-text { fill: #ffffff; }
        .linha { fill: ${({ theme }) => theme.colors.gold}; }
        .engenharia-text { fill: ${({ theme }) => theme.colors.gold}; }
    }

    @media (max-width: 480px) {
        svg { height: 68px; }
    }
`;

export const FooterTagline = styled.p`
    font-size: clamp(0.85rem, 0.9vw, 0.95rem);
    line-height: 1.7;
    color: rgba(250, 248, 244, 0.75);
    margin: 0;
    max-width: 50ch;

    @media (max-width: 640px) {
        max-width: 100%;
    }
`;

export const WhatsAppButton = styled.a`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: 6px;
    border: 1.5px solid rgba(250, 248, 244, 0.75);
    background: transparent;
    padding: 0.7rem 1.6rem 0.7rem 2.5rem;
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 0.76rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: rgba(250, 248, 244, 0.75);
    cursor: pointer;
    text-decoration: none;
    flex-shrink: 0;
    transition: padding ${({ theme }) => theme.duration.slow} ${({ theme }) => theme.easeOut},
                border-color ${({ theme }) => theme.duration.slow} ${({ theme }) => theme.easeOut},
                color ${({ theme }) => theme.duration.slow} ${({ theme }) => theme.easeOut};

    .btn-text {
        position: relative;
        z-index: 2;
        display: inline-block;
        color: rgba(250, 248, 244, 0.75);
        transition: color ${({ theme }) => theme.duration.slow} ${({ theme }) => theme.easeOut};
    }

    .fa-whatsapp,
    .fa-arrow-right {
        position: absolute;
        top: 50%;
        left: 1rem;
        transform: translateY(-50%);
        font-size: 1rem;
        line-height: 1;
        width: 1rem;
        height: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
        color: rgba(250, 248, 244, 0.75);
        transition: left ${({ theme }) => theme.duration.slow} ${({ theme }) => theme.easeOut},
                    opacity ${({ theme }) => theme.duration.base} ${({ theme }) => theme.easeOut},
                    color ${({ theme }) => theme.duration.slow} ${({ theme }) => theme.easeOut};
    }

    .fa-arrow-right {
        opacity: 0;
    }

    .btn-circle {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 16px;
        height: 16px;
        background: ${({ theme }) => theme.colors.gold};
        border-radius: 50%;
        opacity: 0;
        pointer-events: none;
        transition: all ${({ theme }) => theme.duration.slow} ${({ theme }) => theme.easeOut};
    }

    &:hover,
    &:focus-visible {
        padding: 0.7rem 2.5rem 0.7rem 1.6rem;
        border-color: ${({ theme }) => theme.colors.gold};
        color: ${({ theme }) => theme.colors.cream};

        .btn-text {
            color: ${({ theme }) => theme.colors.cream};
        }

        .fa-whatsapp,
        .fa-arrow-right {
            left: calc(100% - 1rem - 1rem);
            color: ${({ theme }) => theme.colors.cream};
        }

        .fa-whatsapp {
            opacity: 0;
        }

        .fa-arrow-right {
            opacity: 1;
        }

        .btn-circle {
            width: 260px;
            height: 260px;
            opacity: 1;
        }
    }

    &:active {
        transform: scale(0.97);
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.gold};
        outline-offset: 3px;
    }
`;

export const FooterNav = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    align-items: flex-start;

    @media (max-width: 640px) {
        align-items: center;
    }
`;

export const FooterTitle = styled.h3`
    margin: 0;
    font-size: 0.78rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.gold};
    font-weight: 600;
    font-family: ${({ theme }) => theme.fonts.body};
`;

export const FooterNavList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    align-items: flex-start;

    @media (max-width: 640px) {
        align-items: center;
    }
`;

export const FooterNavLink = styled.a`
    position: relative;
    display: inline-block;
    padding: 0.5rem 0.75rem;
    border-radius: 6px;
    z-index: 1;
    font-size: clamp(0.85rem, 0.9vw, 0.95rem);
    line-height: 1.4;
    color: rgba(250, 248, 244, 0.75);
    text-decoration: none;
    transition: color ${({ theme }) => theme.duration.fast} ${({ theme }) => theme.ease};

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 6px;
        background: rgba(255, 255, 255, 0.12);
        opacity: 0;
        pointer-events: none;
        z-index: -1;
        transition: opacity ${({ theme }) => theme.duration.fast} ${({ theme }) => theme.ease};
    }

    &:hover,
    &:focus-visible {
        color: ${({ theme }) => theme.colors.cream};

        &::before {
            opacity: 1;
        }
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.gold};
        outline-offset: 3px;
    }
`;

export const FooterContact = styled.address`
    font-style: normal;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    align-items: flex-start;

    @media (max-width: 640px) {
        align-items: center;
    }
`;

export const FooterContactList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    align-items: flex-start;

    @media (max-width: 640px) {
        align-items: center;
    }
`;

const contactRowStyles = css`
    display: inline-flex;
    align-items: center;
    gap: 0.65rem;
    padding: 0.5rem 0.75rem;
    font-size: clamp(0.85rem, 0.9vw, 0.95rem);
    line-height: 1.4;
    text-decoration: none;

    i {
        font-size: 0.95rem;
        width: 18px;
        text-align: center;
        flex-shrink: 0;
        color: ${({ theme }) => theme.colors.gold};
    }
`;

export const FooterContactStatic = styled.span`
    ${contactRowStyles}
    color: rgba(250, 248, 244, 0.75);
`;

export const FooterContactLink = styled.a`
    ${contactRowStyles}
    color: rgba(250, 248, 244, 0.75);
    transition: color ${({ theme }) => theme.duration.fast} ${({ theme }) => theme.ease};

    span {
        text-decoration: underline;
    }

    &:hover,
    &:focus-visible {
        color: ${({ theme }) => theme.colors.cream};
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.gold};
        outline-offset: 3px;
        border-radius: 4px;
    }
`;

export const FooterBottom = styled.div`
    max-width: ${({ theme }) => theme.layout.container};
    margin: 0 auto;
    padding: 0 clamp(1.5rem, 4vw, 3rem);
`;

export const FooterBottomInner = styled.div`
    border-top: 1px solid ${({ theme }) => theme.colors.lineOnNavy};
    padding: 22px 0;
    text-align: center;
    font-size: clamp(0.75rem, 0.8vw, 0.85rem);
    color: rgba(250, 248, 244, 0.75);
`;