import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`

    html {
        font-family: Stratos-Regular;
        background: rgb(250, 250, 250); 
    }

    body {
        height: 100vh;
        width: 100vw;
        color: rgb(0, 0, 0);
        font-size: 1.5rem;
        line-height: 2rem;
        overflow-x: hidden;
    }

    * {
        margin: 0;
        padding: 0;
    }

    h1, h2, h3, h4 {
        margin: 0;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    a {
        display: block;
        text-decoration: none;
        cursor: pointer;
    }

    img {
        display: block;
        height: auto;
        max-width: 100%;
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
    }

    #root {
        height: 100%;
        width: 100%;
    }
`;
