import { BuscarContainer, BuscarHeader, BuscarTitle, BuscarBody, BuscarSection } from "../styles/buscar";
import { HomeLogo } from "../styles/home";
import logo from "../assets/images/logo.png";
export const Buscar = () => {
    return (
        <BuscarContainer>
            <BuscarHeader>
                <HomeLogo src={logo} alt="Logo de la Buscar" />
                <BuscarTitle>Buscar</BuscarTitle>
            </BuscarHeader>
            <BuscarBody>
                <BuscarSection>
                    Contenido
                </BuscarSection>
            </BuscarBody>
        </BuscarContainer>
    );
};