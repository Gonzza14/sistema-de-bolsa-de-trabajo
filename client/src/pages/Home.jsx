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
import { TarjetaEmpleo } from "../components/empleo";
import { PostulacionesSection } from "../styles/pages/postulaciones";
import { useCustomFetch } from "../hooks/useCustomFetch";
import Loader from "../components/Loader";

export const Home = () => {
    // Verificar si se ha iniciado sesion
    let haySesion = null;
    haySesion = localStorage.getItem("rol") == null ? haySesion = false: haySesion = true;
    
    // Obtener datos de oferta
    let url = "http://localhost:3000/api/ofertas"
    const { pathname } = useLocation()

    let {
        dataBase,
        error,
        loading,
    } = useCustomFetch(url);
    let postulaciones = <h1>No hay nada</h1>;
    if(dataBase) {
        postulaciones = dataBase.map((postulacion, index) => {
            return <div key={index}>
                    <TarjetaEmpleo 
                        titulo={postulacion.tituloOferta}
                        descripcion={postulacion.descOferta}
                        idOferta={postulacion.id}
                        link={"/detalleoferta/"+postulacion.id}>
                    </TarjetaEmpleo>
                </div>
        })
    }
    return (
        <BaseContainer>
            <Header/>
            <BaseBody>
                <BaseSectionHeader>
                    <HeroTitle>Descubre un mundo de oportunidades laborales</HeroTitle>
                    <Buscador placeHolder="Buscar empleo" className="home" />
                    <AnimacionInicio />
                </BaseSectionHeader>
                <BaseSection>
                    {
                        !haySesion && (
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
                            </SectionContainer>)
                    }
                    {
                        haySesion && dataBase && (
                            <SectionContainer>
                            <div>
                                {postulaciones}
                            </div>
                            </SectionContainer>
                        )
                    }
                    {loading && <Loader />}
                    
                </BaseSection>
            </BaseBody>
        </BaseContainer>
    );
};
