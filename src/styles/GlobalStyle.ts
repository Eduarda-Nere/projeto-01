import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    min-height: 100svh;
    display: flex;
    flex-direction: column;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    -webkit-tap-highlight-color: transparent;
    scroll-behavior: smooth;
    scroll-padding-top: calc(${({ theme }) => theme.layout.headerHeight} + 20px);
    overflow-x: hidden;
    scrollbar-color: ${({ theme }) => theme.colors.navy} #fff;
  }

  ::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  ::-webkit-scrollbar-track {
    background: #ffffff;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.navy};
    border-radius: 20px;
    border: 3px solid #ffffff;
    transition: background 0.3s ease;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.navyDeep};
  }

  body {
    background: ${({ theme }) => theme.colors.paper};
    color: ${({ theme }) => theme.colors.ink};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 16px;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    width: 100%;
  }

  body.no-scroll {
    overflow: hidden;
  }

  img {
    max-width: 100%;
    display: block;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  h1, h2, h3, h4 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-weight: 600;
    letter-spacing: -.01em;
  }

  *:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.gold} !important;
    outline-offset: 2px !important;
    border-radius: 4px;
  }

  button:focus-visible,
  a:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.gold} !important;
    outline-offset: 2px !important;
  }

  ::selection {
    background: ${({ theme }) => theme.colors.gold};
    color: ${({ theme }) => theme.colors.navy};
  }

  @media (max-width: 768px) {
    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }

    ::-webkit-scrollbar-thumb {
      border: 2.5px solid #ffffff;
    }
  }

  @media (max-width: 480px) {
    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }

    ::-webkit-scrollbar-thumb {
      border: 2px solid #ffffff;
      border-radius: 16px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
`;