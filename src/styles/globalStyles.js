import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import noto from '../assets/fonts/NotoSansKR-Medium.otf';

const GlobalStyles = createGlobalStyle`
 ${reset}

 @font-face {
   font-family: 'NotoSans';
   src: url(${noto}) format('opentype')
 }

 body{
   min-width: 360px;
   font-family: 'NotoSans';
 }

 * {
   box-sizing:border-box;
   outline:none;
   border:none;
 }

 button {
   :hover{
     cursor: pointer;
   }
 }

`;

export default GlobalStyles;
