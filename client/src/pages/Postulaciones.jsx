import { PostulacionesContainer, PostulacionesHeader, PostulacionesTitle, PostulacionesBody, PostulacionesSection } from "../styles/postulaciones";
import { HomeLogo } from "../styles/home";
import logo from "../assets/images/logo.png";
export const Postulaciones = () => {
    return (
        <PostulacionesContainer>
            <PostulacionesHeader>
                <HomeLogo src={logo} alt="Logo de la Postulaciones" />
                <PostulacionesTitle>Postulaciones</PostulacionesTitle>
            </PostulacionesHeader>
            <PostulacionesBody>
                <PostulacionesSection>
                    Contenido
                </PostulacionesSection>
            </PostulacionesBody>
        </PostulacionesContainer>
    );
};