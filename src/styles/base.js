import { createGlobalStyle } from 'styled-components';

const BaseCSS = createGlobalStyle`
  html {
    font-size: 62.5%;
    height: 100vh;
  }

  body {
    height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;

    #root {
      height: 100%;
    }
  }

  body * {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  h1 {
    font-size: 3.6rem
  }

  a {
    text-decoration: none;
  }

  button, input, a {
    outline:none;
  }

`;

export default BaseCSS;