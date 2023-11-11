import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`

    html,
    body
    {
        font-family: Stratos-Regular;
        background: rgb(250, 250, 250); 
    }

    body {
        color: rgb(0, 0, 0);
        font-size: 1.5rem;
        line-height: 2rem;
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
        min-height: 100vh;
        display: flex;
        flex-flow: column;
        align-items: center;
    }
`;
