import { Header } from "../components/Header";
import { BaseContainer, BaseBody, BaseSection } from "../styles/base";
export const CurriculumVitae = () => {
    return (
        <BaseContainer>
            <Header titulo="CV"/>
            <BaseBody>
                <BaseSection>
                    Contenido
                </BaseSection>
            </BaseBody>
        </BaseContainer>
    );
};