import {
    StyledFooter,
    FooterTop,
    FooterBrand,
    FooterLogo,
    FooterTagline,
    FooterContactItem,
    FooterBottom,
    FooterContactWrapper,
    FooterContactWithIcon,
    FooterContent,
} from './Footer.styles';
import { Logo } from '../Logo/Logo';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <StyledFooter id="contato">
            <FooterTop>
                <FooterBrand>
                    <FooterLogo>
                        <Logo scrolled={true} />
                    </FooterLogo>
                    <FooterContent>
                        <FooterTagline>
                            Construção de escopo completo - projeto, aprovação, execução e
                            entrega - em obras residenciais, comerciais e industriais.
                        </FooterTagline>
                        <FooterContactWrapper>
                            <FooterContactWithIcon>
                                <i className="fas fa-map-marker-alt" aria-hidden="true" />
                                <span>Piracicaba - SP</span>
                            </FooterContactWithIcon>
                            <FooterContactItem
                                href="https://wa.me/5519994318392"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-whatsapp" aria-hidden="true" />
                                <span>(19) 99431-8392</span>
                            </FooterContactItem>
                            <FooterContactItem href="mailto:lopezengenharia@hotmail.com">
                                <i className="fas fa-envelope" aria-hidden="true" />
                                <span>lopezengenharia@hotmail.com</span>
                            </FooterContactItem>
                        </FooterContactWrapper>
                    </FooterContent>
                </FooterBrand>
            </FooterTop>

            <FooterBottom>
                <p>&copy; {currentYear} Lopez Engenharia · Todos os direitos reservados</p>
            </FooterBottom>
        </StyledFooter>
    );
}

export default Footer;