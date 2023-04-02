import { Header } from "../components/Header";
import { BaseContainer, BaseBody, BaseSection } from "../styles/base";
export const Empresa = () => {
    return (
        <BaseContainer>
            <Header titulo="Empresa"/>
            <BaseBody>
                <BaseSection>
                    Contenido
                </BaseSection>
            </BaseBody>
        </BaseContainer>
    );
};