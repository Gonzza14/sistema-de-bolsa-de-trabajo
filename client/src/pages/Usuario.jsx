import { UsuarioContainer, UsuarioHeader, UsuarioTitle, UsuarioBody, UsuarioSection } from "../styles/usuario";
import { HomeLogo } from "../styles/home";
import logo from "../assets/images/logo.png";
export const Usuario = () => {
    return (
        <UsuarioContainer>
            <UsuarioHeader>
                <HomeLogo src={logo} alt="Logo de la Usuario" />
                <UsuarioTitle>Usuario</UsuarioTitle>
            </UsuarioHeader>
            <UsuarioBody>
                <UsuarioSection>
                    Contenido
                </UsuarioSection>
            </UsuarioBody>
        </UsuarioContainer>
    );
};