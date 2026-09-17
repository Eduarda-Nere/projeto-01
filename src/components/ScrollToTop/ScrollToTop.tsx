import { ArrowUp } from 'lucide-react';
import { useScrollThreshold } from '../../hooks/useScrollThreshold';
import { ScrollButton } from './ScrollToTop.styles';

function ScrollToTop() {
    const visible = useScrollThreshold(400);

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
            <ArrowUp aria-hidden="true" />
        </ScrollButton>
    );
}

export default ScrollToTop;