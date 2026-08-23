import styled, { css } from 'styled-components';

export const StyledHeader = styled.header<{ $scrolled: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 300;
    height: ${({ theme }) => theme.layout.headerHeight};
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    border-bottom: 1px solid transparent;
    transitiona: background 0.30s ${({ theme }) => theme.ease},
        border-color 0.30s ${({ theme }) => theme.ease},
        box-shadow 0.30s ${({ theme }) => theme.ease};

    ${({ $scrolled }) =>
        $scrolled &&
        css`
            background: #fff;
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border-bottom-color: rgba(15, 30, 56, 0.1);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
        `}
`;

export const HeaderRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    max-width: ${({ theme }) => theme.layout.container};
    margin: 0 auto;
    padding-left: clamp(1.5rem, 4vw, 3rem);
    padding-right: clamp(1.5rem, 4vw, 3rem);
`;

export const LogoLink = styled.a`
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    height: 100%;
    margin: 0;
    padding: 0;
`;

export const MainNav = styled.nav`
    display: flex;
    align-items: center;
    gap: 0.2rem;
    margin-left: auto;
    position: relative;

    @media (max-width: 1150px) {
        display: none;
    }
`;

export const NavIndicator = styled.span<{ $scrolled: boolean }>`
    position: absolute;
    top: 50%;
    left: 0;
    height: 34px;
    border-radius: 6px;
    background: ${({ $scrolled }) =>
        $scrolled ? 'rgba(15, 30, 56, 0.07)' : 'rgba(255, 255, 255, 0.12)'};
    transform: translate(0, -50%);
    transition: transform 0.5s ${({ theme }) => theme.ease},
        width 0.5s ${({ theme }) => theme.ease},
        opacity 0.35s ease,
        background 0.30s ${({ theme }) => theme.ease};
    pointer-events: none;
    z-index: 0;
`;

export const NavLink = styled.a<{ $scrolled: boolean }>`
    position: relative;
    z-index: 1;
    font-size: 0.80rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: ${({ $scrolled, theme }) =>
        $scrolled ? theme.colors.navy : theme.colors.paper};
    opacity: 0.88;
    padding: 0.55rem 1rem;
    border-radius: 6px;
    transition: opacity 0.3s ${({ theme }) => theme.ease},
        color 0.3s ${({ theme }) => theme.ease};

    &:hover {
        opacity: 1;
    }
`;

export const FlowButtonWrapper = styled.div`
    margin-left: 0.5rem;

    @media (max-width: 1150px) {
        display: none;
    }
`;

export const BtnContato = styled.a<{ $scrolled: boolean }>`
    flex-shrink: 0;
    margin-left: 0.5rem;
    font-size: 0.76rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    padding: 0.4rem 1.2rem;
    border: 1px solid ${({ theme }) => theme.colors.gold};
    border-radius: 6px;
    display: inline-block;
    cursor: pointer;
    background: transparent;
    color: ${({ $scrolled, theme }) =>
        $scrolled ? theme.colors.navy : theme.colors.paper};
    border-color: ${({ $scrolled, theme }) =>
        $scrolled ? theme.colors.navy : 'rgba(255, 255, 255, 0.4)'};
    transition: all 0.25s ${({ theme }) => theme.ease};

    @media (max-width: 1150px) {
        display: none;
    }

    &:hover {
        background: ${({ theme }) => theme.colors.gold};
        border-color: ${({ theme }) => theme.colors.gold};
        color: ${({ theme }) => theme.colors.navyDeep};
    }
`;

export const Burger = styled.button<{ $active: boolean; $scrolled: boolean }>`
    display: none;
    width: 34px;
    height: 26px;
    position: fixed;
    top: calc((${({ theme }) => theme.layout.headerHeight} - 26px) / 2);
    right: clamp(1.5rem, 4vw, 3rem);
    z-index: 340;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;

    @media (max-width: 1150px) {
        display: block;
    }
`;

export const BurgerSpan = styled.span<{
    $active: boolean;
    $scrolled: boolean;
    $index: 1 | 2 | 3;
}>`
    position: absolute;
    left: ${({ $index }) => ($index === 2 ? 'auto' : 0)};
    right: ${({ $index }) => ($index === 2 ? 0 : 'auto')};
    display: block;
    height: 2px;
    border-radius: 2px;
    transform-origin: center;
    background: ${({ $active, $scrolled, theme }) =>
        $active ? theme.colors.paper : $scrolled ? theme.colors.navy : theme.colors.paper};
    transition: top 0.35s ${({ theme }) => theme.ease},
        width 0.35s ${({ theme }) => theme.ease},
        opacity 0.3s ease,
        transform 0.5s cubic-bezier(0.7, -0.4, 0.3, 1.4);

    ${({ $index, $active }) => {
        if ($index === 1) {
            return `
                top: ${$active ? '12px' : '2px'};
                width: 34px;
                transform: ${$active ? 'rotate(135deg)' : 'none'};
            `;
        }
        if ($index === 2) {
            return `
                top: 12px;
                width: ${$active ? '34px' : '22px'};
                opacity: ${$active ? 0 : 1};
                transform: ${$active ? 'translateX(24px)' : 'none'};
            `;
        }
        return `
            top: ${$active ? '12px' : '22px'};
            width: 34px;
            transform: ${$active ? 'rotate(-135deg)' : 'none'};
        `;
    }}
`;

export const MenuOverlay = styled.div<{ $show: boolean }>`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.55);
    opacity: ${({ $show }) => ($show ? 1 : 0)};
    visibility: ${({ $show }) => ($show ? 'visible' : 'hidden')};
    transition: opacity 0.4s ${({ theme }) => theme.ease},
        visibility 0.4s ${({ theme }) => theme.ease};
    z-index: 250;
`;

export const MobileMenu = styled.nav<{ $open: boolean }>`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: min(380px, 84vw);
    background: ${({ theme }) => theme.colors.navy};
    z-index: 310;
    transform: translateX(${({ $open }) => ($open ? '0' : '100%')});
    transition: transform 0.5s ${({ theme }) => theme.ease};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;

    @media (orientation: landscape) and (max-height: 560px) {
        width: min(360px, 60vw);
        padding: 1.1rem 2rem;
    }
`;

export const MobileMenuInner = styled.div`
    width: 100%;
    max-width: 320px;
    margin: auto 0;
    padding: 1rem 0;
    flex-shrink: 0;

    @media (orientation: landscape) and (max-height: 560px) {
        padding: 0.5rem 0;
    }
`;

export const MobileMenuList = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 320px;
    margin: 0 auto;
`;

export const MobileMenuItem = styled.li<{ $open: boolean; $delay: number }>`
    border-bottom: 1px solid ${({ theme }) => theme.colors.lineOnNavy};
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    transform: translateX(${({ $open }) => ($open ? '0' : '24px')});
    transition: opacity 0.30s ${({ theme }) => theme.ease} ${({ $delay }) => $delay}s,
        transform 0.30s ${({ theme }) => theme.ease} ${({ $delay }) => $delay}s;
`;

export const MobileMenuLink = styled.a`
    display: block;
    padding: 1rem 0;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.cream};
    transition: color 0.3s ${({ theme }) => theme.ease};

    &:hover {
        color: ${({ theme }) => theme.colors.gold};
    }

    @media (orientation: landscape) and (max-height: 560px) {
        padding: 0.55rem 0;
        font-size: 0.88rem;
    }
`;