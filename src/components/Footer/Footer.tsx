import {
    StyledFooter,
    FooterInner,
    FooterBrand,
    FooterLogo,
    FooterTagline,
    WhatsAppButton,
    FooterNav,
    FooterTitle,
    FooterNavList,
    FooterNavLink,
    FooterContact,
    FooterContactList,
    FooterContactStatic,
    FooterContactLink,
    FooterBottom,
    FooterBottomInner,
} from './Footer.styles';
import { Logo } from '../Logo/Logo';
import { WhatsAppIcon } from '../ui';
import { Mail, MapPin, ArrowRight } from 'lucide-react';
import { FOOTER_NAV_LINKS } from '../../constants/nav';
import { useScrollToSection } from '../../hooks/useScrollToSection';

const WHATSAPP_LINK =
    'https://wa.me/5519994318392?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20um%20projeto.';

function Footer() {
    const currentYear = new Date().getFullYear();
    const { goToSection } = useScrollToSection();

    const handleNavClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string
    ) => {
        e.preventDefault();
        goToSection(href);
    };

    return (
        <StyledFooter id="contato">
            <FooterInner>
                <FooterBrand>
                    <FooterLogo>
                        <Logo scrolled={true} />
                    </FooterLogo>

                    <FooterTagline>
                        Construção de escopo completo - projeto, aprovação, execução e
                        entrega - em obras residenciais, comerciais e industriais.
                    </FooterTagline>

                    <WhatsAppButton
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Entrar em contato pelo WhatsApp"
                    >
                        <span className="btn-circle" aria-hidden="true" />
                        <WhatsAppIcon className="icon-whatsapp" aria-hidden="true" />
                        <ArrowRight
                            className="icon-arrow"
                            aria-hidden="true"
                            strokeWidth={2.25}
                        />
                        <span className="btn-text">Entre em contato</span>
                    </WhatsAppButton>
                </FooterBrand>

                <FooterNav aria-label="Navegação do rodapé">
                    <FooterTitle>Navegação</FooterTitle>
                    <FooterNavList>
                        {FOOTER_NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <FooterNavLink
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                >
                                    {link.label}
                                </FooterNavLink>
                            </li>
                        ))}
                    </FooterNavList>
                </FooterNav>

                <FooterContact>
                    <FooterTitle>Contato</FooterTitle>

                    <FooterContactList>
                        <FooterContactStatic>
                            <MapPin aria-hidden="true" />
                            <span>Piracicaba – SP</span>
                        </FooterContactStatic>

                        <FooterContactLink
                            href="mailto:lopezengenharia@hotmail.com"
                            aria-label="Enviar e-mail para lopezengenharia@hotmail.com"
                        >
                            <Mail aria-hidden="true" />
                            <span>lopezengenharia@hotmail.com</span>
                        </FooterContactLink>

                        <FooterContactLink
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Conversar no WhatsApp: (19) 99431-8392"
                        >
                            <WhatsAppIcon aria-hidden="true" />
                            <span>(19) 99431-8392</span>
                        </FooterContactLink>
                    </FooterContactList>
                </FooterContact>
            </FooterInner>

            <FooterBottom>
                <FooterBottomInner>
                    <p>© {currentYear} Lopez Engenharia · Todos os direitos reservados</p>
                </FooterBottomInner>
            </FooterBottom>
        </StyledFooter>
    );
}

export default Footer;