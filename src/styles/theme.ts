export const theme = {
    colors: {
        navy: '#0f1e38',
        navyDeep: '#0a1526',
        gold: '#d2aa4e',
        goldSoft: '#e8cf99',
        cream: '#f6f2e9',
        paper: '#fbf9f4',
        ink: '#16223a',
        ink70: 'rgba(22, 34, 58, .7)',
        lineOnNavy: 'rgba(210, 170, 78, .28)',
        lineOnCream: 'rgba(15, 30, 56, .14)',
    },
    fonts: {
        display: '"Fraunces", serif',
        body: '"Inter", sans-serif',
    },
    layout: {
        container: '1220px',
        headerHeight: '96px',
    },
    ease: 'cubic-bezier(.22, .61, .36, 1)',
    gap: 'clamp(1.25rem, 3vw, 2.5rem)',
} as const;

export type Theme = typeof theme;