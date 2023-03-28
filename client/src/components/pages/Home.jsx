import {
    HomeBody,
    HomeContainer,
    HomeHeader,
    HomeLogo,
    HeroTitle,
    HomeTitle,
    HeroTitleTwo,
    ButtonEmpresa,
    HomeSection,
} from "../../styles/home";
import { Buscador } from "../Buscador";
import { AnimacionInicio } from "../tools/AnimacionInicio";


import logo from "../../assets/images/logo.png";

export const Home = () => {
    return (
        <HomeContainer>
            <HomeHeader>
                <HomeLogo src={logo} alt="Logo de la empresa" />
                <HomeTitle>SBT</HomeTitle>
            </HomeHeader>

            <HomeBody>
                <div className="flip">
                <HomeSection>
                    <HeroTitle>Descubre un mundo de oportunidades laborales</HeroTitle>
                    <Buscador />
                    <AnimacionInicio/>
                </HomeSection>
                </div>
                <HomeSection>
                    <HeroTitleTwo>
                        ¿Eres una empresa? Ingresa aquí para publicar tus ofertas de empleo.
                    </HeroTitleTwo>
                    <ButtonEmpresa as="a" href="#">
                        Publicar tus ofertas de empleo
                    </ButtonEmpresa>
                </HomeSection>
            </HomeBody>
        </HomeContainer>
    );
};
