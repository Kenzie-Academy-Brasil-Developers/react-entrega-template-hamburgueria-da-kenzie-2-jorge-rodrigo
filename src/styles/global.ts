import { createGlobalStyle } from "styled-components";



export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family:'Inter', sans-serif;
        src: url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
    }

   *{
    margin: 0;
    padding: 0; 
    box-sizing: border-box;
    font-family:'Inter', sans-serif;
    }

    button{
        cursor: pointer;
    }
    :root{
        --color-bg:rgba(39, 174, 96, 0.1);
        --color-black: #333333;
        --color-orange: #EB5757;
        --color-grey-1:#E0E0E0;
        --color-grey-2:#828282;
        --color-grey-3:#F5F5F5;
        --color-grey-4:#999999;
        --color-green:#219653;
        --color-white:#FFFFFF;
        --color-error: #E83F5B;
    }
`

