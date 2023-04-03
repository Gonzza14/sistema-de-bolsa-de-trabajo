import { Header } from "../components/Header";
import { BaseContainer, BaseBody, BaseSection } from "../styles/base";
export const Usuario = () => {
    return (
        <BaseContainer>
            <Header titulo="Usuario"/>
            <BaseBody>
                <BaseSection>
                    Contenido
                </BaseSection>
            </BaseBody>
        </BaseContainer>
    );
};