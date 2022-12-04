import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
        background-color: var(--color-gray-4);
        color: var(--color-gray-0);
    }

    * {
        font-family: 'Inter', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }

    :root{
        --color-primary:#FF577F;
        --color-primary-focus:#FF427F;
        --color-primary-negative:#59323F;
        --color-gray-0:#F8F9FA;
        --color-gray-1:#868E96;
        --color-gray-2:#343B41;
        --color-gray-3:#212529;
        --color-gray-4:#121214;
        --color-success:#3FE864;
        --color-negative:#E83F5B;

        --toastify-color-success: var(--color-success);
        --toastify-color-error: var(--color-negative);
        --toastify-color-dark: var(--color-gray-2);

        --font-title: 1.6rem;
        --font-headline: 1.2rem;
    }
`;

export default GlobalStyle;
