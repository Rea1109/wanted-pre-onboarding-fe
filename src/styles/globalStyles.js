import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import theme from './theme';

const GlobalStyles = createGlobalStyle`
 ${reset}

 * {
   box-sizing:border-box;
   outline:none;
   border:none;
   background-color: ${theme.bgColor};
 }

 button {
   :hover{
     cursor: pointer;
   }
 }

`;

export default GlobalStyles;
