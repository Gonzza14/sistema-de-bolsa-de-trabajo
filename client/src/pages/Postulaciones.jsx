import { Header } from "../components/Header";
import { TarjetaEmpleo } from "../components/empleo";
import { useCustomFetch } from "../hooks/useCustomFetch";
import { BaseContainer, BaseBody, BaseSectionData, SectionTitle, SectionContainer } from "../styles/base";
import { PostulacionesSection } from "../styles/pages/postulaciones";
import { Route, Routes, useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import Message from "../components/Message"
import "../styles/elements/card-empleo.css"

export const Postulaciones = () => {
    let id_usuario = localStorage.getItem("id_usuario");
    let url = 
    process.env.NODE_ENV === "production"
    ? `/api/postulaciones/${id_usuario}`
    :`http://localhost:3000/api/postulaciones/${id_usuario}`
    const { pathname } = useLocation()

    let {
        dataBase,
        error,
        loading,
    } = useCustomFetch(url);

    const estilos = {
        display: 'flex'
    }
    console.log(dataBase)
    let postulaciones = null;
    if(dataBase){
        postulaciones = dataBase.map((postulacion, index) => {
            return <div key={index}>
                        <TarjetaEmpleo
                            width={"90%"}
                            titulo={postulacion.tituloOferta}
                            link={"/detalleoferta/"+postulacion.idOferta}
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
                                <SectionContainer>
                                    {postulaciones}
                                </SectionContainer>
                            )
                        }
                </BaseSectionData>
            </BaseBody>
        </BaseContainer>
    );
};