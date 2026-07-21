import { useState, useEffect, useRef, useCallback } from 'react';
import {
    StyledHeader,
    HeaderRow,
    LogoLink,
    LogoImg,
    MainNav,
    NavLink,
    HeaderCta,
    Burger,
    BurgerSpan,
    MenuOverlay,
    MobileMenu,
    MobileMenuInner,
    MobileMenuList,
    MobileMenuItem,
    MobileMenuLink,
    MMCta,
    NavIndicator,
} from './Header.styles';
import logoImg from '../../assets/img/logo/mini-logo-azul.png';

const NAV_LINKS = [
    { href: '#sobre', label: 'Sobre Nós' },
    { href: '#o-que-fazemos', label: 'O que fazemos' },
    { href: '#destaques', label: 'Destaques' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#projetos', label: 'Projetos' },
    { href: '#faq', label: 'Perguntas' },
];

interface IndicatorStyle {
    width: string;
    transform: string;
    opacity: number;
}

function Header() {
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [indicatorStyle, setIndicatorStyle] = useState<IndicatorStyle>({ 
        width: '0px', 
        transform: 'translate(0px, -50%)', 
        opacity: 0 
    });
    
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
        setIndicatorStyle(prev => ({ ...prev, opacity: 0 }));
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
            <StyledHeader $scrolled={scrolled}>
                <HeaderRow>
                    <LogoLink href="#top" aria-label="Ir para o topo">
                        <LogoImg src={logoImg} alt="Logo da empresa" />
                    </LogoLink>

                    <MainNav ref={navRef} aria-label="Navegação principal">
                        <NavIndicator 
                            ref={indicatorRef}
                            $scrolled={scrolled}
                            style={indicatorStyle}
                        />
                        {NAV_LINKS.map((link) => (
                            <NavLink 
                                key={link.href} 
                                href={link.href} 
                                $scrolled={scrolled}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </MainNav>

                    <HeaderCta href="#contato" $scrolled={scrolled}>
                        Contato
                    </HeaderCta>
                </HeaderRow>
            </StyledHeader>

            <Burger
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
                aria-expanded={menuOpen}
                $active={menuOpen}
                $scrolled={scrolled}
            >
                <BurgerSpan $index={1} $active={menuOpen} $scrolled={scrolled} />
                <BurgerSpan $index={2} $active={menuOpen} $scrolled={scrolled} />
                <BurgerSpan $index={3} $active={menuOpen} $scrolled={scrolled} />
            </Burger>

            <MenuOverlay $show={menuOpen} onClick={closeMenu} />

            <MobileMenu $open={menuOpen} aria-label="Menu mobile">
                <MobileMenuInner>
                    <MobileMenuList>
                        {NAV_LINKS.map((link, index) => (
                            <MobileMenuItem key={link.href} $open={menuOpen} $delay={0.08 + index * 0.06}>
                                <MobileMenuLink href={link.href} onClick={closeMenu}>
                                    {link.label}
                                </MobileMenuLink>
                            </MobileMenuItem>
                        ))}
                    </MobileMenuList>
                    <MMCta $open={menuOpen}>
                        <a href="#contato" onClick={closeMenu}>Contato</a>
                    </MMCta>
                </MobileMenuInner>
            </MobileMenu>
        </>
    );
}

export default Header;