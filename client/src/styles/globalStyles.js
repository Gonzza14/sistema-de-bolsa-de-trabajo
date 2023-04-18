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
} from "./elements/navBar";

import { BaseLogo, BaseHeader, BaseTitle } from "./elements/header";
import { BaseContainer, SectionContainer, SectionTitle } from "./base";

import {
  SectionInner,
  HeroTitleTwo,
  HeroText,
  HeroTitle,
  ImgSection,
} from "./pages/home";

import {
  EquisArriba,
  IconSearch,
  SearchContainer,
  SearchInput,
  EquisAbajo,
} from "./elements/buscador";

import {
  ButtonCreate,
  ButtonLogin,
  ButtonRegister,
  SpanButton,
} from "./elements/botones";
import { PostulacionesSection } from "./pages/postulaciones";

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
    background-color: #F3F3F3;
    -ms-text-size-adjust: 100%;

-webkit-text-size-adjust: 100%;

overflow-x: hidden;
}

::-webkit-scrollbar {
    display: none;
}

.blob-motion {
    position: absolute;
    transform: translateY(-2%);
    z-index: -1;
}

.rdt_Pagination{
    color: #747191;
    background-color: #f3f3f3;
    margin-bottom: 6em;
}


@media screen and (max-width: 1370px) {
    ${SectionInner}{
        margin-left: 4em;
    }


    ${ImgSection}{
        margin-right: 4em;
        margin-left: 4em;
        max-width: 20em;
    }

    .rdt_TableCell{
    margin: 0;}

    ${ButtonRegister}{
        margin-top: 0em;
    }

    ${ButtonLogin}{
        margin-right: 3.8em;
    }

    ${BaseTitle}{
        margin-right: 1.8em;
    }


    ${BaseLogo}{
        margin-left: 0.8em;
    }

    .rdt_TableCol_Sortable div{
    margin: 0;}
}


@media screen and (max-height: 1193px) {

    ${NavButton}{
        width: 2em;
    }
}

@media screen and (max-width: 1006px) {

    ${SearchContainer}{
        width: 35em;
    }

    ${BaseHeader}{
        height: 5em;
    }

    ${ButtonLogin}{
        padding: 0.8em;
    }

}

@media screen and (max-height: 722px) {
    
    ${NavItem}{
        //margin-left: 1em;
    }

    ${NavContainer}{
        margin-top: 3em;
    }

    ${MainNav}{
        width: 4em;
    }
    ${NavItem}{
        margin-left: 0.8em;
    }
    ${NavButton}{
        
    }
    ${NavParagraph}{
        font-size: 0.8em;
    }

     ${StyledFontAwesomeIcon}{
        font-size: 1.5em;
    }

}

@media screen and (max-width: 950px) {

    .blob-motion{
        width: 50em;
    }

    ${BaseTitle}{
        margin-right: 1.2em;
    }


    ${ButtonLogin}{
        margin-right: 1.8em;
    }

    ${BaseContainer}{
        margin-left: 0;
    }

    ${BaseHeader}{
        width: 100%;
    }

    ${BaseLogo}{
        width: 6em;
    }

    ${BaseTitle}{
        font-size: 1.5em;
    }

    .rdt_TableCol_Sortable div{
    font-size: 0.8em;
    }

    
    .rdt_TableRow {
    font-size: 0.7em;
    height: 0.1em;
    }

    ${SearchInput}{
        font-size: 0.9em;
    }


    ${HeroTitle}{
        font-size: 2.0em;
    }

    ${SearchContainer}{
        width: 25em;
    }

    ${MainNav}{
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
    }

    ${NavParagraph}{
        display: none;
    }
    .imagen{
        display: none;
    }

    ${PostulacionesSection}{
        padding-bottom: 7em;
    }
}

@media screen and (max-height: 847px) {
    ${SectionContainer}{
        padding: 0;
    }

    ${ButtonRegister}{
        margin-bottom: 5em;
    }

    ${ButtonLogin}{
        margin-bottom: 0em;
    }
    ${HeroTitleTwo}{
        font-size: 1.5em;  
        line-height: 1.5rem;
    }

    ${HeroText}{
        font-size: 1em;
        margin-bottom: 1rem;
    }

    .rdt_TableHeadRow{
        margin:0;
    }
}

@media screen and (max-width: 797px) {
    .blob-motion{
        width: 43.75em;
    }

    .card{
        width: 100%;
    }


    ${SectionContainer}{
        flex-direction: column-reverse;
    }

    ${SectionInner}{
        margin-left: 0em;
    }

    ${HeroTitle}{
        text-align: center;
     }
    ${ImgSection}{
        margin-top: 2em;
        margin-right: 0em;
        margin-left: 0em;
        max-width: 15em;
    }

    ${ButtonRegister}{ 
        width: 100%;
     }

     ${ButtonLogin}{
        width: 8em;
     }

     .rdt_TableCell {
        margin: 0;
        &:nth-last-child(2){
            display: none;
        }
     }

     .rdt_TableCol {
        &:nth-last-child(2){
            display: none;
        }
     }
}

@media screen and (max-width: 657px) {
    ${SectionInner}{
        margin-left: 1em;
        margin-right: 1em;
    }

    ${SpanButton}{
        display: none;
    }

    ${ButtonCreate}{
        width: 1em;
    }

    .rdt_TableCell{
        margin: 0;
        &:nth-last-child(1){
            width: 20%;
        }
    }
}

@media screen and (max-height: 613px) {

${BaseContainer}{
    margin-left: 0;
}

    ${PostulacionesSection}{
        padding-bottom: 7em;
    }
${BaseHeader}{
    width: 100%;
}


${ButtonLogin}{
        margin-right: 1em;
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
}

${NavParagraph}{
    display: none;
}
.imagen{
    display: none;
}
}

@media screen and (max-width: 539px) {
    ${MainNav}{
        height: 4em;
    }

    ${NavItem}{
        margin: 0;
    }

    ${StyledFontAwesomeIcon}{
        font-size: 1.5em;
    }


    ${BaseLogo}{
        width: 5em;
    }
}

@media screen and (max-width: 476px) {
    ${SearchContainer}{
        width: 13.5em;
    }

    ${ButtonRegister}{
        margin-bottom: 4.5em;
    }

    ${ButtonLogin}{
        margin-bottom: 0em;
    }

    ${SectionTitle}{
        font-size: 1.5em;
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

    ${SectionContainer}{
        padding-bottom: 0em;
    }

    ${ButtonRegister}{
        margin-bottom: 4em;
    }

    ${ButtonLogin}{
        margin-bottom: 0em;
    }

    ${HeroTitleTwo}{
        font-size: 1.5em;  
        line-height: 1.5rem;
    }

    ${HeroText}{
        font-size: 1em;
        margin-bottom: 1rem;
    }

    ${SectionTitle}{
        font-size: 1.0em;
    }

    .rdt_TableHeadRow{
        margin:0;
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
