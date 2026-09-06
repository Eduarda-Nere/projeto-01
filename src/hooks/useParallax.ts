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

        function update() {
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const center = rect.top + rect.height / 2;
            const viewportCenter = window.innerHeight / 2;
            const offset = -(center - viewportCenter) * speed;

            el.style.transform = `translate3d(0, ${offset}px, 0)`;

            frame = requestAnimationFrame(update);
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    if (frame === null) frame = requestAnimationFrame(update);
                } else if (frame !== null) {
                    cancelAnimationFrame(frame);
                    frame = null;
                }
            },
            { threshold: 0 }
        );
        observer.observe(el);

        return () => {
            observer.disconnect();
            if (frame !== null) cancelAnimationFrame(frame);
        };
    }, [speed]);

    return ref;
}