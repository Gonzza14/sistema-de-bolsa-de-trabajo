import {
    HomeBody,
    HomeContainer,
    HomeHeader,
    HomeLogo,
    HeroTitle,
    HomeTitle,
    HeroTitleTwo,
    HomeSection,
    SectionContainer,
    SectionInner,
    HeroText,
    ButtonContainer,
    ButtonRegister,
    ImgSection,
    ButtonLogin,
} from "../styles/home";
import { Buscador } from "../components/Buscador";
import { AnimacionInicio } from "../util/AnimacionInicio";
import logo from "../assets/images/logo.png";
import imagen from "../assets/images/imagen-seccion.png";

export const Home = () => {
    return (
        <HomeContainer>
            <HomeHeader>
                <HomeLogo src={logo} alt="Logo de la empresa" />
                <ButtonLogin to={"/Login"}>
                    Iniciar sesion
                </ButtonLogin>
                {/*<HomeTitle>SBT</HomeTitle>*/}
            </HomeHeader>

            <HomeBody>
                <HomeSection>
                    <HeroTitle>Descubre un mundo de oportunidades laborales</HeroTitle>
                    <Buscador />
                    <AnimacionInicio />
                </HomeSection>
                <HomeSection>
                    <SectionContainer>
                        <SectionInner>
                            <HeroTitleTwo>
                                Si buscas empleo, estás en el lugar correcto.
                            </HeroTitleTwo>
                            <HeroText>
                                Únete a nuestra comunidad de búsqueda de empleo y descubre todas las oportunidades laborales que tenemos para ti. Con nuestra ayuda, encontrarás el trabajo que siempre has deseado y podrás avanzar en tu carrera profesional.
                            </HeroText>
                            <ButtonContainer>
                                <ButtonRegister to={"/Login"}>
                                    Crea tu cuenta
                                </ButtonRegister>
                            </ButtonContainer>
                        </SectionInner>
                        <ImgSection src={imagen}>

                        </ImgSection>
                    </SectionContainer>
                </HomeSection>
            </HomeBody>
        </HomeContainer>
    );
};
