import { useEffect, useRef } from 'react';

export function useParallax<T extends HTMLElement>(speed: number = 0.3) {
    const ref = useRef<T>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const prefersReducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches;
        if (prefersReducedMotion) return;

        let frame: number | null = null;
        let sectionTop = 0;
        let sectionHeight = 0;
        let viewportHeight = window.innerHeight;

        const measure = () => {
            const rect = el.getBoundingClientRect();
            sectionTop = rect.top + window.scrollY;
            sectionHeight = rect.height;
            viewportHeight = window.innerHeight;
        };

        const update = () => {
            const viewportCenter = viewportHeight / 2;
            const elementCenter = sectionTop + sectionHeight / 2 - window.scrollY;
            const offset = -(elementCenter - viewportCenter) * speed;

            el.style.transform = `translate3d(0, ${offset}px, 0)`;

            frame = requestAnimationFrame(update);
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    measure();
                    if (frame === null) frame = requestAnimationFrame(update);
                } else if (frame !== null) {
                    cancelAnimationFrame(frame);
                    frame = null;
                }
            },
            { threshold: 0 }
        );

        observer.observe(el);

        const handleResize = () => {
            measure();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            observer.disconnect();
            window.removeEventListener('resize', handleResize);
            if (frame !== null) cancelAnimationFrame(frame);
        };
    }, [speed]);

    return ref;
}