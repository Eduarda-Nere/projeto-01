import {
    StyledFooter,
    FooterTop,
    FooterLogo,
    FooterBrandText,
    FooterSocial,
    SocialLink,
    FooterContactItem,
    FooterBottom,
    FooterGrid,
    FooterLeft,
    FooterRight,
    FooterCol,
    FooterLeftContent,
} from './Footer.styles';
import logoImg from '../../assets/img/logo/logo-azul.png';

const SOCIAL_LINKS = [
    { icon: 'fa-facebook-f', label: 'Facebook', url: '#' },
    { icon: 'fa-instagram', label: 'Instagram', url: '#' },
    { icon: 'fa-linkedin-in', label: 'LinkedIn', url: '#' },
    { icon: 'fa-youtube', label: 'YouTube', url: '#' },
    { icon: 'fa-whatsapp', label: 'WhatsApp', url: '#' },
];

const CONTACT_ITEMS = [
    { icon: 'fa-map-marker-alt', text: 'Av. Exemplo, 123 - Centro, Capivari - SP' },
    { icon: 'fa-envelope', text: 'contato@empresa.com.br' },
    { icon: 'fa-phone-alt', text: '(19) 99999-9999' },
];

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <StyledFooter id="contato">
            <FooterTop>
                <FooterGrid>
                    <FooterLeft>
                        <FooterLogo>
                            <img src={logoImg} alt="Logo da empresa" />
                        </FooterLogo>
                        <FooterLeftContent>
                            <FooterBrandText>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </FooterBrandText>
                            <FooterSocial>
                                {SOCIAL_LINKS.map((social) => (
                                    <SocialLink 
                                        key={social.label} 
                                        href={social.url} 
                                        aria-label={social.label}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className={`fab ${social.icon}`} aria-hidden="true" />
                                    </SocialLink>
                                ))}
                            </FooterSocial>
                        </FooterLeftContent>
                    </FooterLeft>

                    <FooterRight>
                        <FooterCol>
                            <h4>Contato</h4>
                            {CONTACT_ITEMS.map((item) => (
                                <FooterContactItem key={item.text}>
                                    <i className={`fas ${item.icon}`} aria-hidden="true" />
                                    <span>{item.text}</span>
                                </FooterContactItem>
                            ))}
                        </FooterCol>
                    </FooterRight>
                </FooterGrid>
            </FooterTop>

            <FooterBottom>
                <p>&copy; <span>{currentYear}</span> · Todos os direitos reservados</p>
            </FooterBottom>
        </StyledFooter>
    );
}

export default Footer;