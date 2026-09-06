import { useState, useEffect, useRef, useCallback } from 'react';
import { useLocation } from 'react-router-dom'; // ADICIONADO
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
import { FlowButton } from '../ui/FlowButton';

const NAV_LINKS = [
    { href: '#sobre', label: 'Sobre Nós' },
    { href: '#carreira', label: 'Carreira' },
    { href: '#projetos', label: 'Projetos' },
    { href: '#faq', label: 'Perguntas' },
];

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [indicatorStyle, setIndicatorStyle] = useState({
        width: '0px',
        transform: 'translate(0px, -50%)',
        opacity: 0,
    });

    // ADICIONADO: detectar se está na página 404
    const location = useLocation();
    const isNotFound = location.pathname !== '/';

    const navRef = useRef<HTMLElement>(null);
    const indicatorRef = useRef<HTMLSpanElement>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', onScroll);
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        document.body.classList.toggle('no-scroll', menuOpen);
        return () => {
            document.body.classList.remove('no-scroll');
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

    return (
        <>
            {/* ALTERADO: adicionado isNotFound */}
            <StyledHeader $scrolled={scrolled || isNotFound}>
                <HeaderRow>
                    <LogoLink href="#top" aria-label="Ir para o topo">
                        <Logo scrolled={scrolled || isNotFound} /> {/* ALTERADO */}
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
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </MainNav>

                    <FlowButtonWrapper>
                        <FlowButton text="Contato" scrolled={scrolled || isNotFound} /> {/* ALTERADO */}
                    </FlowButtonWrapper>
                </HeaderRow>
            </StyledHeader>

            <Burger
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
                aria-expanded={menuOpen}
                $active={menuOpen}
                $scrolled={scrolled || isNotFound}
            >
                <BurgerSpan $index={1} $active={menuOpen} $scrolled={scrolled || isNotFound} /> {/* ALTERADO */}
                <BurgerSpan $index={2} $active={menuOpen} $scrolled={scrolled || isNotFound} /> {/* ALTERADO */}
                <BurgerSpan $index={3} $active={menuOpen} $scrolled={scrolled || isNotFound} /> {/* ALTERADO */}
            </Burger>

            <MenuOverlay $show={menuOpen} onClick={closeMenu} />

            <MobileMenu $open={menuOpen} aria-label="Menu mobile">
                <MobileMenuInner>
                    <MobileMenuList>
                        {[...NAV_LINKS, { href: '#contato', label: 'Contato' }].map((link, index) => (
                            <MobileMenuItem key={link.href} $open={menuOpen} $delay={0.08 + index * 0.06}>
                                <MobileMenuLink href={link.href} onClick={closeMenu}>
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