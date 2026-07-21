import {
    StyledFooter,
    FooterTop,
    FooterBrand,
    FooterLogo,
    FooterBrandText,
    FooterSocial,
    SocialLink,
    FooterCol,
    FooterContactItem,
    FooterBottom,
} from './Footer.styles';
import logoImg from '../../assets/img/logo/logo-azul.png';

const SOCIAL_LINKS = [
    { icon: 'fa-facebook-f', label: 'Facebook' },
    { icon: 'fa-instagram', label: 'Instagram' },
    { icon: 'fa-linkedin-in', label: 'LinkedIn' },
    { icon: 'fa-youtube', label: 'YouTube' },
];

const CONTACT_ITEMS = [
    { icon: 'fa-map-marker-alt', text: 'Endereço - Capivari, SP' },
    { icon: 'fa-envelope', text: 'contato@email.com' },
    { icon: 'fa-phone-alt', text: '+99 9999999-9999' },
    { icon: 'fa-clock', text: 'Seg - Sex: 08:00 - 18:00' },
];

function Footer() {
    return (
        <StyledFooter id="contato">
            <FooterTop>
                <FooterBrand>
                    <FooterLogo>
                        <img src={logoImg} alt="Logo da empresa" />
                    </FooterLogo>
                    <FooterBrandText>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <FooterSocial>
                            {SOCIAL_LINKS.map((social) => (
                                <SocialLink key={social.label} href="#" aria-label={social.label}>
                                    <i className={`fab ${social.icon}`} aria-hidden="true" />
                                </SocialLink>
                            ))}
                        </FooterSocial>
                    </FooterBrandText>
                </FooterBrand>

                <FooterCol>
                    <h4>Contato</h4>
                    {CONTACT_ITEMS.map((item) => (
                        <FooterContactItem key={item.text}>
                            <i className={`fas ${item.icon}`} aria-hidden="true" />
                            <span>{item.text}</span>
                        </FooterContactItem>
                    ))}
                </FooterCol>
            </FooterTop>

            <FooterBottom>
                <p>&copy; <span>2026</span> · Todos os direitos reservados</p>
            </FooterBottom>
        </StyledFooter>
    );
}

export default Footer;