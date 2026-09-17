const LOADER_ID = 'initial-loader';

export function hideInitialLoader(fadeDurationMs = 300, removeDelayMs = 400) {
    const loader = document.getElementById(LOADER_ID);
    if (!loader) return;

    loader.style.opacity = '0';
    loader.style.transition = `opacity ${fadeDurationMs}ms ease`;

    window.setTimeout(() => {
        loader.remove();
    }, removeDelayMs);
}
