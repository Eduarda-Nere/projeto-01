import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const HEADER_HEIGHT = 96;
const NAVIGATE_BACK_DELAY = 100;

export function useScrollToSection() {
    const location = useLocation();
    const navigate = useNavigate();
    const isNotFound = location.pathname !== '/';

    const scrollToSection = useCallback((href: string) => {
        const element = document.querySelector(href) as HTMLElement | null;
        if (!element) return;

        const lenis = window.__lenis;
        if (lenis) {
            lenis.start();
            lenis.scrollTo(element, { offset: HEADER_HEIGHT, duration: 1.4 });
        } else {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    const goToSection = useCallback(
        (href: string) => {
            if (isNotFound) {
                navigate('/');
                setTimeout(() => scrollToSection(href), NAVIGATE_BACK_DELAY);
            } else {
                scrollToSection(href);
            }
        },
        [isNotFound, navigate, scrollToSection]
    );

    return { isNotFound, goToSection };
}
