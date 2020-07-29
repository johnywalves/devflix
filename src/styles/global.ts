import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    :root {
        --primary: #DC143C;
        --black: #000000;
        --blackLighter: #9E9E9E;
        --grayLight: #F5F5F5;
        --grayMedium: #e5e5e5; 
        --white: #FFFFFF;
        --frontEnd: #6BD1FF;
        --backEnd: #00C86F;
        --background: #141414;
    }

    html {
        font-size: 62.5%;
    }

    html, body, #__next {
        height: 100%;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }

    a {
        color: inherit;
    } 

    #__next {
        --bodyPaddingTop: 94px;
        padding-top: var(--bodyPaddingTop);
        display: flex;
        flex-direction: column;
    }

    @media (max-width: 800px) {
        #__next {
            --bodyPaddingTop: 40px;
            padding-top: var(--bodyPaddingTop);
        }
    }
`

export default GlobalStyles
