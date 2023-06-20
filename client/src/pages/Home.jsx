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
import { BaseContainer, BaseBody, BaseSection, BaseSectionHeader, SectionContainer } from "../styles/base";
import imagen from "../assets/images/imagen-seccion.png";
import { Route, Routes, useLocation } from "react-router-dom";
import process from "kute.js/src/process/process";

export const Home = () => {
    let haySesion = localStorage.getItem("authToken");
    let rol = localStorage.getItem("rol");
    return (
        <BaseContainer>
            <Header/>
            <BaseBody>
                <BaseSectionHeader>
                    <HeroTitle>Descubre un mundo de oportunidades laborales</HeroTitle>
                    <AnimacionInicio />
                </BaseSectionHeader>
                <BaseSection>
                        <SectionContainer>
                            <SectionInner>
                                {rol==="solicitante" || rol=== "empty" &&(<><HeroTitleTwo>
                                    Si buscas empleo, estás en el lugar correcto.
                                </HeroTitleTwo>
                                <HeroText>
                                    Únete a nuestra comunidad de búsqueda de empleo y descubre todas las oportunidades laborales que tenemos para ti. Con nuestra ayuda, encontrarás el trabajo que siempre has deseado y podrás avanzar en tu carrera profesional.
                                </HeroText></>)}
                                {rol==="empresa" &&(<><HeroTitleTwo>
                                    ¡Bienvenido a nuestra plataforma de bolsa de trabajo!
                                </HeroTitleTwo>
                                <HeroText>
                                    ¡No pierdas la oportunidad de conectarte con candidatos talentosos y encontrar al candidato perfecto para tu empresa!
                                    Estamos emocionados de trabajar contigo para encontrar el talento que hará crecer tu empresa.
                                    Atentamente, 
                                    SBT tu bolsa de trabajo favorita.
                                </HeroText></>)}
                                {!haySesion === "true" && (<ButtonContainer>
                                    <ButtonRegister to={"/Login"}>
                                        Crea tu cuenta
                                    </ButtonRegister>
                                </ButtonContainer>)}
                            </SectionInner>
                            <ImgSection src={imagen}>

                            </ImgSection>
                        </SectionContainer> 
                </BaseSection>
            </BaseBody>
        </BaseContainer>
    );
};
