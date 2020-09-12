import { createGlobalStyle } from 'styled-components';

const BaseCSS = createGlobalStyle`
  html {
    font-size: 62.5%;
    height: 100%;
  }

  body {
    height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;

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
    background: none;
    border: none;
  }

`;

export default BaseCSS;
