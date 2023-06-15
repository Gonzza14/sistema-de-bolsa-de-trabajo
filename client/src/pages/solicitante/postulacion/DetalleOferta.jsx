import { Header } from "../../../components/Header";
import { BaseContainer, BaseBody, BaseSection, BaseSectionData } from "../../../styles/base";
import "../../../styles/elements/card-empleo.css";
import "../../../styles/pages/detalleOferta.css";
import { useCustomFetch } from "../../../hooks/useCustomFetchAndres";
import { GestionSection } from "../../../styles/pages/admin/gestion";
import { useParams } from "react-router-dom";

export const DetalleOferta = () => {
    const {idOfert} = useParams(); 
    console.log(idOfert)
    let idOfertAux = ""
    let idEmpresa = ""
    let idCategoriaOferta = ""
    let idUsuario = ""
    let idSolicitante = ""
    let idSolicitanteAux = ""
    let ids = ""
    let urlPostula = ""

    const urlOferta = 
        process.env.NODE_ENV === "production"
        ? "api/ofertas/" + idOfert
        : "http://localhost:3000/api/ofertas/" + idOfert;
    let [dataBase] = useCustomFetch(urlOferta);
    if (dataBase) {
        idEmpresa = (dataBase.idEmpresa).toString()
        idCategoriaOferta = (dataBase.idCategoriaOfer).toString()
    }

    const urlEmpresa = 
        process.env.NODE_ENV === "production"
        ? "api/empresas/" + idEmpresa
        : "http://localhost:3000/api/empresas/" + idEmpresa;
    
    const urlCategoria = 
        process.env.NODE_ENV === "production"
        ? "api/categorias/" + idCategoriaOferta
        : "http://localhost:3000/api/categorias/" + idCategoriaOferta;
    let [empresa] = useCustomFetch(urlEmpresa);
    let [categoria] = useCustomFetch(urlCategoria);

    idUsuario = localStorage.getItem("id_usuario")
    //idUsuario = 1
    const urlSolic = 
        process.env.NODE_ENV === "production"
        ? "api/solicitantes/us/" + (idUsuario).toString()
        : "http://localhost:3000/api/solicitantes/us/" + (idUsuario).toString();
    let [solicitante] = useCustomFetch(urlSolic);

    if (solicitante) {
        idSolicitante = solicitante.id;
        ids = (idOfert).toString() + "/" + (idSolicitante).toString()
        urlPostula = 
            process.env.NODE_ENV === "production"
            ? "api/postula/" + ids
            : "http://localhost:3000/api/postula/" + ids;
    }

    let [postula] = useCustomFetch(urlPostula);
    if (postula) {
        if (postula.length > 0) {
            idOfertAux = postula[0].idOferta;
            idSolicitanteAux = postula[0].idSolic;
        } else {
            idOfertAux = idOfert;
            idSolicitanteAux = null;
        }
    }


    function registrarPostula(idOfertAux, idSolicitante) {
        console.log('Botón clickeado');

        const Http = new XMLHttpRequest();
        const urlRegistrarPostulacion = 
            process.env.NODE_ENV === "production"
            ? "api/postula/ins/" + idOfertAux + "/" + idSolicitante
            : "http://localhost:3000/api/postula/ins/" + idOfertAux + "/" + idSolicitante;
        Http.open("GET", urlRegistrarPostulacion);
        Http.send();

        Http.onreadystatechange = (e) => {
            console.log(Http.responseText)
        }

        window.location.reload()
    }

    return (
        <BaseContainer>
            <Header titulo="Detalle de la oferta" />
            <BaseBody>
                <BaseSection>
                    <BaseSectionData>
                        <GestionSection>
                            <div className="card-oferta">
                                <div className="card-header">
                                    <h1 className="">{empresa &&
                                        empresa.nombreEmpresa
                                    }</h1>
                                    <p className="">{categoria &&
                                        <span>Categoria: {categoria.categoriaOfer}</span>
                                    }</p>
                                    <p className="">{dataBase &&
                                        dataBase.ubicacion
                                    }</p>
                                    <p className="">{dataBase &&
                                        dataBase.modalidad
                                    }</p>
                                </div>

                                <div className="card-body">
                                    <h2 className="titulos">{dataBase &&
                                        dataBase.tituloOferta
                                    }</h2>
                                    <p className="">{dataBase &&
                                        dataBase.descOferta
                                    }</p>

                                    <h3 className="titulos">Requerimientos academicos</h3>
                                    <p className="">{dataBase &&
                                        dataBase.perfilAcademico
                                    }</p>

                                    <h3 className="titulos">Habilidades deseadas</h3>
                                    <p className="">{dataBase &&
                                        dataBase.habilidades
                                    }</p>

                                    <h3 className="titulos">Experiencia requerida</h3>
                                    <span className="">{dataBase &&
                                        dataBase.expLaboral
                                    }</span>

                                    <h3 className="titulos">Rango salarial</h3>
                                    <p className="">{dataBase &&
                                        <span>($) {dataBase.rangoSalar}</span>
                                    }</p>

                                    {idSolicitanteAux && idOfertAux ? <p>Ya est&aacute; postulando por esta oferta</p> : <button className="button-card" onClick={() => registrarPostula(idOfertAux, idSolicitante)}> Postularse para este empleo </button>}
                                </div>
                            </div>
                        </GestionSection>
                    </BaseSectionData>
                </BaseSection>
            </BaseBody>
        </BaseContainer>
    );
};
