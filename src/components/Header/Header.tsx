import { useState, useEffect, useRef, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
    StyledHeader,
    HeaderRow,
    LogoLink,
    MainNav,
    NavLink,
    Burger,
    BurgerSpan,
    MenuOverlay,
    MobileMenu,
    MobileMenuInner,
    MobileMenuList,
    MobileMenuItem,
    MobileMenuLink,
    NavIndicator,
    FlowButtonWrapper,
} from './Header.styles';
import { Logo } from '../Logo/Logo';
import { FlowButton } from '../ui';
import { NAV_LINKS, MOBILE_NAV_LINKS } from '../../constants/nav';

const FOCUSABLE_SELECTOR =
    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

const HEADER_HEIGHT = 96;

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [indicatorStyle, setIndicatorStyle] = useState({
        width: '0px',
        transform: 'translate(0px, -50%)',
        opacity: 0,
    });

    const location = useLocation();
    const navigate = useNavigate();
    const isNotFound = location.pathname !== '/';

    const navRef = useRef<HTMLElement>(null);
    const indicatorRef = useRef<HTMLSpanElement>(null);
    const mobileMenuRef = useRef<HTMLElement>(null);
    const burgerRef = useRef<HTMLButtonElement>(null);
    const previouslyFocusedRef = useRef<HTMLElement | null>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', onScroll);
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        document.body.classList.toggle('no-scroll', menuOpen);

        if (menuOpen) {
            window.__lenis?.stop();
        } else {
            window.__lenis?.start();
        }

        return () => {
            document.body.classList.remove('no-scroll');
            window.__lenis?.start();
        };
    }, [menuOpen]);

    useEffect(() => {
        if (!menuOpen) return;

        previouslyFocusedRef.current = document.activeElement as HTMLElement;

        const focusFirstElement = () => {
            const menu = mobileMenuRef.current;
            if (!menu) return;

            const focusables = menu.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
            if (focusables.length > 0) {
                focusables[0].focus();
            }
        };

        const raf = requestAnimationFrame(focusFirstElement);

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setMenuOpen(false);
                return;
            }

            if (event.key !== 'Tab') return;

            const menu = mobileMenuRef.current;
            if (!menu) return;

            const focusables = Array.from(
                menu.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
            );

            if (focusables.length === 0) {
                event.preventDefault();
                return;
            }

            const first = focusables[0];
            const last = focusables[focusables.length - 1];
            const active = document.activeElement as HTMLElement | null;

            if (event.shiftKey) {
                if (active === first || !menu.contains(active)) {
                    event.preventDefault();
                    last.focus();
                }
            } else {
                if (active === last || !menu.contains(active)) {
                    event.preventDefault();
                    first.focus();
                }
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            cancelAnimationFrame(raf);
            document.removeEventListener('keydown', handleKeyDown);

            const previouslyFocused = previouslyFocusedRef.current;
            if (previouslyFocused && typeof previouslyFocused.focus === 'function') {
                previouslyFocused.focus();
            }
        };
    }, [menuOpen]);

    const closeMenu = () => setMenuOpen(false);

    const moveIndicator = useCallback((element: HTMLAnchorElement) => {
        if (!navRef.current || !indicatorRef.current) return;

        const navRect = navRef.current.getBoundingClientRect();
        const linkRect = element.getBoundingClientRect();

        setIndicatorStyle({
            width: linkRect.width + 'px',
            transform: `translate(${linkRect.left - navRect.left}px, -50%)`,
            opacity: 1,
        });
    }, []);

    const hideIndicator = useCallback(() => {
        setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }));
    }, []);

    const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
        moveIndicator(e.currentTarget);

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            hideIndicator();
        }, 150);
    };

    const scrollToSection = useCallback((href: string) => {
        const element = document.querySelector(href) as HTMLElement | null;
        if (!element) return;

        const lenis = window.__lenis;
        if (lenis) {
            lenis.start();
            lenis.scrollTo(element, {
                offset: HEADER_HEIGHT,
                duration: 1.4,
            });
        } else {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        closeMenu();

        if (isNotFound) {
            navigate('/');
            setTimeout(() => scrollToSection(href), 100);
        } else {
            scrollToSection(href);
        }
    };

    const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        closeMenu();

        if (isNotFound) {
            navigate('/');
        } else {
            const lenis = window.__lenis;
            if (lenis) {
                lenis.start();
                lenis.scrollTo(0, { duration: 1.2 });
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    };

    const handleContactClick = (
        e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
    ) => {
        e.preventDefault();
        closeMenu();

        if (isNotFound) {
            navigate('/');
            setTimeout(() => scrollToSection('#contato'), 100);
        } else {
            scrollToSection('#contato');
        }
    };

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            hideIndicator();
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [hideIndicator]);

    const handleMobileNavClick = (href: string) => {
        closeMenu();

        if (isNotFound) {
            navigate('/');
            setTimeout(() => scrollToSection(href), 100);
        } else {
            scrollToSection(href);
        }
    };

    return (
        <>
            <StyledHeader $scrolled={scrolled || isNotFound}>
                <HeaderRow>
                    <LogoLink
                        href="#top"
                        aria-label="Ir para o topo"
                        onClick={handleLogoClick}
                    >
                        <Logo scrolled={scrolled || isNotFound} />
                    </LogoLink>

                    <MainNav ref={navRef} aria-label="Navegação principal">
                        <NavIndicator
                            ref={indicatorRef}
                            $scrolled={scrolled || isNotFound}
                            style={indicatorStyle}
                        />
                        {NAV_LINKS.map((link) => (
                            <NavLink
                                key={link.href}
                                href={link.href}
                                $scrolled={scrolled || isNotFound}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                onClick={(e) => handleNavClick(e, link.href)}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </MainNav>

                    <FlowButtonWrapper>
                        <FlowButton
                            text="Contato"
                            scrolled={scrolled || isNotFound}
                            as="a"
                            href="#contato"
                            onClick={handleContactClick}
                        />
                    </FlowButtonWrapper>
                </HeaderRow>
            </StyledHeader>

            <Burger
                ref={burgerRef}
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                $active={menuOpen}
                $scrolled={scrolled || isNotFound}
            >
                <BurgerSpan $index={1} $active={menuOpen} $scrolled={scrolled || isNotFound} />
                <BurgerSpan $index={2} $active={menuOpen} $scrolled={scrolled || isNotFound} />
                <BurgerSpan $index={3} $active={menuOpen} $scrolled={scrolled || isNotFound} />
            </Burger>

            <MenuOverlay $show={menuOpen} onClick={closeMenu} aria-hidden="true" />

            <MobileMenu
                id="mobile-menu"
                ref={mobileMenuRef}
                $open={menuOpen}
                aria-label="Menu mobile"
                aria-hidden={!menuOpen}
            >
                <MobileMenuInner>
                    <MobileMenuList>
                        {MOBILE_NAV_LINKS.map((link, index) => (
                            <MobileMenuItem
                                key={link.href}
                                $open={menuOpen}
                                $delay={0.08 + index * 0.06}
                            >
                                <MobileMenuLink
                                    href={link.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleMobileNavClick(link.href);
                                    }}
                                >
                                    {link.label}
                                </MobileMenuLink>
                            </MobileMenuItem>
                        ))}
                    </MobileMenuList>
                </MobileMenuInner>
            </MobileMenu>
        </>
    );
}

export default Header;