import { useEffect, useState } from 'react';

export function useScrollThreshold(threshold: number) {
    const [passed, setPassed] = useState(false);

    useEffect(() => {
        const onScroll = () => setPassed(window.scrollY > threshold);
        window.addEventListener('scroll', onScroll);
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, [threshold]);

    return passed;
}
