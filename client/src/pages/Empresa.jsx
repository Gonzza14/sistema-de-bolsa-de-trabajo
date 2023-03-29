import { EmpresaContainer, EmpresaHeader, EmpresaTitle, EmpresaBody, EmpresaSection } from "../styles/empresa";
import { HomeLogo } from "../styles/home";
import logo from "../assets/images/logo.png";
export const Empresa = () => {
    return (
        <EmpresaContainer>
            <EmpresaHeader>
                <HomeLogo src={logo} alt="Logo de la empresa" />
                <EmpresaTitle>Empresa</EmpresaTitle>
            </EmpresaHeader>
            <EmpresaBody>
                <EmpresaSection>
                    Contenido
                </EmpresaSection>
            </EmpresaBody>
        </EmpresaContainer>
    );
};