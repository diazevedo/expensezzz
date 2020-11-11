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
    background: linear-gradient(
    142deg,
    rgba(39, 44, 86, 1) 0%,
    rgba(51, 58, 109, 1) 100%
    );
    background-repeat: no-repeat;
    background-attachment: fixed;

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
    background: none;
    border: none;
  }

  p {
    font-size: 1.4rem;
  }

`;

export default BaseCSS;
