import { useState, useEffect } from 'react';
import { ScrollButton } from './ScrollToTop.styles';

function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 400) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <ScrollButton
            $visible={visible}
            onClick={scrollToTop}
            aria-label="Voltar ao topo"
        >
            <i className="fas fa-arrow-up"></i>
        </ScrollButton>
    );
}

export default ScrollToTop;