import { CVContainer, CVHeader, CVTitle, CVBody, CVSection } from "../styles/curriculumVitae";
import { HomeLogo } from "../styles/home";
import logo from "../assets/images/logo.png";
export const CurriculumVitae = () => {
    return (
        <CVContainer>
            <CVHeader>
                <HomeLogo src={logo} alt="Logo de la empresa" />
                <CVTitle>CV</CVTitle>
            </CVHeader>
            <CVBody>
                <CVSection>
                    Contenido
                </CVSection>
            </CVBody>
        </CVContainer>
    );
};