import { createGlobalStyle } from "styled-components";
import Montserrat from "../assets/fonts/Montserrat.ttf";
import MonsterratItalic from "../assets/fonts/Montserrat-Italic.ttf";
import MonsterratBold from "../assets/fonts/Montserrat-Bold.ttf";
import { MainNav, NavList, NavContainer, NavItem, NavButton } from "./navBar";

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
    margin: 0;
    padding: 0;
    background-color: #F3F3F3;
}

::-webkit-scrollbar {
    display: none;
}

@media screen and (max-width: 950px) {
    ${MainNav}{
        display: flex;
        top: auto;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 5em;
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 0;
        /*background-color: #222222;*/
    }

    ${NavContainer}{
        transform: none;
        width: 100%;
        margin: 0;
    }

    ${NavList}{
        display: flex;
        position: relative;
        transform: none;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        flex-direction: row-reverse;
    }
    
    ${NavItem}{
        margin-bottom: 0;
        margin-left: 2em;
        margin-right: 2em;
    }
    ${NavButton}{
        padding: 1em 0.8em;
        transform: rotate(0deg);
    }

    .logo{
        display: none;
    }

    /*.about-me{
        width: calc(100% - 2em);
        padding-top: 3em;
    }*/
}

@media screen and (max-width: 330px){

    ${NavItem}{
        margin-bottom: 0;
        margin-left: 0.4;
        margin-right: 0.4;
    }
    ${NavButton}{
        padding: 0.8em 0.4em;
    }
}

@media screen and (max-width: 300px){

    ${NavItem}{
        margin-bottom: 0;
        margin-left: 0.3;
        margin-right: 0.3;
    }
    ${NavButton}{
        padding: 0.4em 0.2em;
    }
}

@media screen and (max-height: 636px) {
    ${NavItem}{
        margin-left: 1em;
    }
}
`;

export default GlobalStyles;
