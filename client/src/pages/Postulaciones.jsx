import { Header } from "../components/Header";
import { TarjetaEmpleo } from "../components/empleo";
import { useCustomFetch } from "../hooks/useCustomFetch";
import { BaseContainer, BaseBody, BaseSectionData, SectionTitle } from "../styles/base";
import { PostulacionesSection } from "../styles/pages/postulaciones";
import { Route, Routes, useLocation } from "react-router-dom";


export const Postulaciones = () => {

    let url = "http://localhost:3000/api/postulaciones/1"
    const { pathname } = useLocation()

    let {
        dataBase,
        error,
        loading,
    } = useCustomFetch(url);
    return (
        <BaseContainer>
            <Header titulo="Postulaciones" />
            <BaseBody>
                <BaseSectionData>
                    <SectionTitle>Postulaciones realizadas</SectionTitle>
                    <PostulacionesSection>
                        <TarjetaEmpleo
                            dataBase={dataBase}
                            error={error}
                            loading={loading}
                            > 
                            
                        </TarjetaEmpleo>
                    </PostulacionesSection>
                </BaseSectionData>
            </BaseBody>
        </BaseContainer>
    );
};