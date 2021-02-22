import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');

  * {
    box-sizing: border-box;
    font-family: "Montserrat";
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;
