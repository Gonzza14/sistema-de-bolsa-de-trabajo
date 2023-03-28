import { createGlobalStyle } from "styled-components";
import Montserrat from "../assets/fonts/Montserrat.ttf";
import MonsterratItalic from "../assets/fonts/Montserrat-Italic.ttf";
import MonsterratBold from "../assets/fonts/Montserrat-Bold.ttf";
import {
  MainNav,
  NavList,
  NavContainer,
  NavItem,
  NavButton,
  NavParagraph,
  StyledFontAwesomeIcon,
} from "./navBar";
import { HeroTitle, HomeContainer, HomeHeader } from "./home";
import { EquisArriba, IconSearch, SearchContainer, SearchInput, EquisAbajo } from "./buscador";

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


body{
    font-family: 'Montserrat';
    margin: 0;
    padding: 0;
    background-color: #747191;
}

::-webkit-scrollbar {
    display: none;
}

.blob-motion {
    position: absolute;
    transform: translateY(-2%);
    z-index: -1;
}


@media screen and (max-width: 950px) {

    ${HomeContainer}{
        margin-left: 0;
    }


    ${HomeHeader}{
        width: 100%;
    }


    ${HeroTitle}{
        font-size: 2.0em;
    }

    ${SearchContainer}{
        width: 25em;
    }

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
        display: ${(props) => (props.visible ? "none" : "block")};
    }

    ${NavParagraph}{
        display: none;
    }
    .imagen{
        display: none;
    }


}


@media screen and (max-height: 636px) {
    ${NavItem}{
        //margin-left: 1em;
    }

    ${HomeContainer}{
        margin-left: 0;
    }

    ${HomeHeader}{
        width: 100%;
    }


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
        display: ${(props) => (props.visible ? "none" : "block")};
    }

    ${NavParagraph}{
        display: none;
    }
    .imagen{
        display: none;
    }

}

@media screen and (max-width: 476px) {
    ${SearchContainer}{
        width: 13.5em;
    }
}


@media screen and (max-width: 330px){

    ${NavItem}{
        margin-bottom: 0;
        margin-left: 0.4;
        margin-right: 0.4;
    }
    ${NavButton}{
        padding: 0;
    }

    ${HeroTitle}{
        font-size: 1.7em;
    }

    ${SearchContainer}{
        width: 10em;
    }

    ${SearchInput}{
        font-size: 0.7em;
    }

    ${MainNav}{
        height: 3em;
    }


    ${StyledFontAwesomeIcon}{
        font-size: 1.5em;
    }

    /*${EquisArriba}, ${EquisAbajo}, ${IconSearch} {
        display: none;
    }*/
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

`;

export default GlobalStyles;
