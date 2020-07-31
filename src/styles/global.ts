import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    html, body, #__next {
        height: 100%;
    }

    body {
        overflow-y: scroll;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }

    body {
        --primary: #ec1d8c;
        --black: #3a3a3a;
        --blackLighter: #9E9E9E;
        --grayLight: #F5F5F5;
        --grayMedium: #666666; 
        --white: #FFFFFF;
        --frontEnd: #6BD1FF;
        --backEnd: #00C86F;
        --background: #f3f3f3;
        --backgroundInput: #d3d3d3;
        --colorSkin: #ffb8b8;
        --colorClother: #2f2e41;
    }

    body.dark {
        --primary: #ec1d8c;
        --black: #FFFFFF;
        --blackLighter: #DFDFDF;
        --grayLight: #F5F5F5;
        --grayMedium: #e5e5e5; 
        --white: #030303;
        --frontEnd: #6BD1FF;
        --backEnd: #00C86F;
        --background: #202020;
        --backgroundInput: #3d3d3d;
        --colorSkin: #ffb8b8;
        --colorClother: #cfcede;
    }

    a {
        color: inherit;
        text-decoration: none;
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

    @keyframes spin {
        to { transform: rotate(360deg) }
    }
`

export default GlobalStyles
