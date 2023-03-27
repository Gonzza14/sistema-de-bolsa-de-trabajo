import { HomeBody, HomeContainer, HomeHeader, HomeLogo, HeroTitle, HomeTitle, HeroTitleTwo, ButtonEmpresa } from "../../styles/home";
import { CerrarAbajo, CerrarArriba, IconClose, IconsContainer, IconSearch, SearchContainer, SearchInput } from "../../styles/buscador";
import { useEffect, useRef } from "react";


import logo from "../../assets/images/logo.png";

const Buscador = () => {

    return (
        <SearchContainer>
            <SearchInput placeholder="Buscar..." />
            <IconsContainer>
                <IconSearch />
                <IconClose>
                    <CerrarArriba />
                    <CerrarAbajo />
                </IconClose>
            </IconsContainer>
        </SearchContainer>
    );
}

export const Home = () => {
    return (
        <HomeContainer>
            <HomeHeader>
                <HomeLogo src={logo} alt="Logo de la empresa" />
                <HomeTitle>SBT</HomeTitle>
            </HomeHeader>

            <HomeBody>
                <HeroTitle>
                    Descubre un mundo de oportunidades laborales
                </HeroTitle>
                <Buscador />
                <HeroTitleTwo>
                    ¿Eres una empresa? Ingresa aquí para publicar tus ofertas de empleo.
                </HeroTitleTwo>
                <ButtonEmpresa>
                    Publicar tus ofertas de empleo
                </ButtonEmpresa>
            </HomeBody>
        </HomeContainer>
    );
}

