import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';
import App from './App';

function removeLoader() {
  const loader = document.getElementById('initial-loader');
  if (loader && loader.parentNode) {
    loader.style.opacity = '0';
    loader.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
      loader.remove();
    }, 500);
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);

const FALLBACK_TIMEOUT = 8000;
setTimeout(() => {
  const loader = document.getElementById('initial-loader');
  if (loader && loader.parentNode) {
    removeLoader();
  }
}, FALLBACK_TIMEOUT);