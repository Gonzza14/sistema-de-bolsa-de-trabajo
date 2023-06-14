import { Header } from "../components/Header";
import { TarjetaEmpleo } from "../components/empleo";
import { useCustomFetch } from "../hooks/useCustomFetch";
import { BaseContainer, BaseBody, BaseSectionData, SectionTitle } from "../styles/base";
import { PostulacionesSection } from "../styles/pages/postulaciones";
import { Route, Routes, useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import Message from "../components/Message"

export const Postulaciones = () => {

    let url = "http://localhost:3000/api/postulaciones/1"
    const { pathname } = useLocation()

    let {
        dataBase,
        error,
        loading,
    } = useCustomFetch(url);
    console.log(dataBase)
    return (
        <BaseContainer>
            <Header titulo="Postulaciones" />
            <BaseBody>
                <BaseSectionData>
                    <SectionTitle>Postulaciones realizadas</SectionTitle>
                    <PostulacionesSection>
                        {loading && <Loader />}
                        {
                            error && (
                                <Message
                                    msg={`Error ${error.status}: ${error.statusText}`}
                                    bgColor="#E84616"
                                />
                            )
                        }
                        {
                            dataBase && dataBase.map((postulacion) => (
                                <div key={postulacion.idOferta}>
                                    <TarjetaEmpleo
                                        titulo={postulacion.tituloOferta}
                                        link={"/detalleoferta/"+postulacion.id}
                                        descripcion={postulacion.descOferta}></TarjetaEmpleo>
                                </div>
                                
                            ))
                        }
                    </PostulacionesSection>
                </BaseSectionData>
            </BaseBody>
        </BaseContainer>
    );
};