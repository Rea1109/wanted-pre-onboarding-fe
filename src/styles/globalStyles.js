import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import noto from '../assets/fonts/NotoSansKR-Medium.otf';
import notoLight from '../assets/fonts/NotoSansKR-Light.otf';

const GlobalStyles = createGlobalStyle`
 ${reset}

 @font-face {
   font-family: 'NotoSans';
   src: url(${noto}) format('opentype')
 }

 @font-face {
   font-family: 'NotoSans-Light';
   src: url(${notoLight}) format('opentype')
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
