import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 100%;

        ::-webkit-scrollbar {
            display: none;
        }
    }

    body {
        font-family: 'Inter', sans-serif;
        background: ${({ theme }) => theme.bg};
        transition: background 0.5s ease;
    }
`;

export default GlobalStyles;
