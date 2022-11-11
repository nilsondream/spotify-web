import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: 'Circular Std';
        src: url('../fonts/CircularStd-Book.woff2') format('woff2'),
        url('../fonts/CircularStd-Book.woff') format('woff');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Circular Std';
        src: url('../fonts/CircularStd-Bold.woff2') format('woff2'),
        url('../fonts/CircularStd-Bold.woff') format('woff');
        font-weight: 700;
        font-style: normal;
    }

    @font-face {
        font-family: 'Circular Std';
        src: url('../fonts/CircularStd-Black.woff2') format('woff2'),
        url('../fonts/CircularStd-Black.woff') format('woff');
        font-weight: 900;
        font-style: normal;
    }

    :root {
        --black: #000;
        --black-1: #111;
        --black-15: #151515;
        --black-18: #181818;
        --black-2: #222;
        --black-25: #252525;
        --black-3: #333;
        --black-4: #444;
        --black-5: #555;
        --white: #ffffff;
        --white-2: #aaa;
        --white-3: #777;
        --green: #1DB954;
        --green-2: #1fdf64;

        --transparent-1: rgba(225, 225 , 225, 0.1);
        --transparent-2: rgba(225, 225 , 225, 0.2);
        --transparent-3: rgba(225, 225 , 225, 0.3);

        --font: 'Circular Std', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;

        --fz-xxs: 12px;
        --fz-xs: 13px;
        --fz-sm: 14px;
        --fz-md: 16px;
        --fz-lg: 18px;
        --fz-xl: 20px;
        --fz-xxl: 24px;

        --spacing-xxs: 4px;
        --spacing-xs: 8px;
        --spacing-sm: 12px;
        --spacing-md: 16px;
        --spacing-lg: 24px;
        --spacing-xl: 32px;
        --spacing-xxl: 64px;

        --border-radius-xs: 2px;
        --border-radius-sm: 4px;
        --border-radius-md: 6px;
        --border-radius-pill: 30px;

        --site-max-width: 1300px;

        --transition: .3s all ease;
    }

    ::-webkit-scrollbar {
        display: none;
    }
    
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    html, body {
        font-family: var(--font);
    }

    a {
        text-decoration: none;
        font-family: inherit;
        color: inherit;
    }
`;

export default GlobalStyle;