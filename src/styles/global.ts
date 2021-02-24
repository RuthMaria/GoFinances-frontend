import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #F0F2F5 ;
    -webkit-font-smoothing: antialiased
  }

  body, input, button {
    font: 1rem "Poppins", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a{
    color: inherit;
    text-decoration: none;
  }

  @media(max-width: 1080){
    html{
        font-size: 93.75%;
    }
  }

  @media(max-width: 720px){
    html{
        font-size: 87.5%;
    }
  }
`;
