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

    const estilos = {
        display: 'flex'
    }

    let postulaciones = null;
    if(dataBase){
        postulaciones = dataBase.map((postulacion, index) => {
            return <div key={index}>
                        <TarjetaEmpleo
                            width={"80%"}
                            titulo={postulacion.tituloOferta}
                            link={"/detalleoferta/"+postulacion.id}
                            descripcion={postulacion.descOferta}></TarjetaEmpleo>
                    </div>
            
        })
    }
    return (
        <BaseContainer>
            <Header titulo="Postulaciones" />
            <BaseBody>
                <BaseSectionData>
                    <SectionTitle>Postulaciones realizadas</SectionTitle>
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
                            dataBase && (
                                <PostulacionesSection>
                                    {postulaciones}
                                </PostulacionesSection>
                            )
                        }
                </BaseSectionData>
            </BaseBody>
        </BaseContainer>
    );
};