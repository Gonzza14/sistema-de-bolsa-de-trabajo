import { createGlobalStyle } from "styled-components";
import Montserrat from "../assets/fonts/Montserrat.ttf";
import MonsterratItalic from "../assets/fonts/Montserrat-Italic.ttf";
import MonsterratBold from "../assets/fonts/Montserrat-Bold.ttf";

const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: 'Montserrat';
    src: local('Montserrat'), url(${Montserrat}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: auto;
}

@font-face {
    font-family: 'Montserrat-Bold';
    src: local('Montserrat-Bold'), url(${MonsterratBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: auto;
}


@font-face {
    font-family: 'Montserrat-Italic';
    src: local('Montserrat-Italic'), url(${MonsterratItalic}) format('truetype');
}

::selection {
  background: #6078EA;
  color: white;
  text-shadow: none;
}

::-webkit-selection{
  background: #6078EA;
  color: white;
  text-shadow: none;
}


body{
    font-family: 'Montserrat';
    position: relative;
    width: 100%;
    background-color: #F3F3F3;
    color: #4B4848;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 1.25s ease-in-out;
    &.is-focus {
        background-color: #17EAD9;
    }
}
`;

export default GlobalStyles;
