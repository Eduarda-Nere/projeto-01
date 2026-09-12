export const NAV_LINKS = [
    { href: '#sobre', label: 'Sobre Nós' },
    { href: '#cultura', label: 'Cultura' },
    { href: '#processo', label: 'Processo' },
    { href: '#projetos', label: 'Projetos' },
] as const;

export const MOBILE_NAV_LINKS = [
    ...NAV_LINKS,
    { href: '#contato', label: 'Contato' },
] as const;

export const FOOTER_NAV_LINKS = NAV_LINKS;