import { useState, useEffect } from 'react';
import { ScrollTopButton } from './ScrollTop.styles';

function ScrollTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 400);
        window.addEventListener('scroll', onScroll);
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <ScrollTopButton $visible={visible} onClick={scrollToTop} aria-label="Voltar ao topo">
            <i className="fas fa-arrow-up" aria-hidden="true" />
        </ScrollTopButton>
    );
}

export default ScrollTop;