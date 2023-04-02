import {
    HeroTitleTwo,
    SectionInner,
    HeroText,
    ImgSection,
    HeroTitle
} from "../styles/pages/home";
import { ButtonRegister, ButtonContainer } from "../styles/elements/botones";
import { Header } from "../components/Header";
import { Buscador } from "../components/Buscador";
import { AnimacionInicio } from "../util/AnimacionInicio";
import { BaseContainer, BaseBody, BaseSection, SectionContainer } from "../styles/base";
import imagen from "../assets/images/imagen-seccion.png";

export const Home = () => {
    return (
        <BaseContainer>
            <Header/>
            <BaseBody>
                <BaseSection>
                    <HeroTitle>Descubre un mundo de oportunidades laborales</HeroTitle>
                    <Buscador />
                    <AnimacionInicio />
                </BaseSection>
                <BaseSection>
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
                </BaseSection>
            </BaseBody>
        </BaseContainer>
    );
};
