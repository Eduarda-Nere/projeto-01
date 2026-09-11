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

const NAV_LINKS = [
    { href: '#sobre', label: 'Sobre Nós' },
    { href: '#cultura', label: 'Cultura' },
    { href: '#processo', label: 'Processo' },
    { href: '#projetos', label: 'Projetos' },
];

function Footer() {
    const currentYear = new Date().getFullYear();

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
                        href="https://wa.me/5519994318392?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20um%20projeto."
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Entrar em contato pelo WhatsApp"
                    >
                        <span className="btn-circle" aria-hidden="true" />
                        <i className="fab fa-whatsapp" aria-hidden="true" />
                        <i className="fas fa-arrow-right" aria-hidden="true" />
                        <span className="btn-text">Entre em contato</span>
                    </WhatsAppButton>
                </FooterBrand>

                <FooterNav aria-label="Navegação do rodapé">
                    <FooterTitle>Navegação</FooterTitle>
                    <FooterNavList>
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <FooterNavLink href={link.href}>{link.label}</FooterNavLink>
                            </li>
                        ))}
                    </FooterNavList>
                </FooterNav>

                <FooterContact>
                    <FooterTitle>Contato</FooterTitle>

                    <FooterContactList>
                        <FooterContactStatic>
                            <i className="fas fa-map-marker-alt" aria-hidden="true" />
                            <span>Piracicaba – SP</span>
                        </FooterContactStatic>

                        <FooterContactLink
                            href="mailto:lopezengenharia@hotmail.com"
                            aria-label="Enviar e-mail para lopezengenharia@hotmail.com"
                        >
                            <i className="fas fa-envelope" aria-hidden="true" />
                            <span>lopezengenharia@hotmail.com</span>
                        </FooterContactLink>

                        <FooterContactLink
                            href="https://wa.me/5519994318392?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20um%20projeto."
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Conversar no WhatsApp: (19) 99431-8392"
                        >
                            <i className="fab fa-whatsapp" aria-hidden="true" />
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