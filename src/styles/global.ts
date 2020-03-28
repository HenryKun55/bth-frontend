 
import { createGlobalStyle } from 'styled-components';
import colors from './colors';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Roboto', cursive;
    }
    
    body {
        -webkit-font-smoothing: antialiased;
        background: ${colors.background}
    }
    
    body, input, button {
        font-size: 14px;
    }

    form input {
        width: 100%;
        height: 60px;
        color: ${colors.grey};
        border: 1px solid ${colors.greyLight};
        border-radius: 8px;
        padding:0 24px;
    }

    #root {
        margin: 0 auto;
    }

`;
