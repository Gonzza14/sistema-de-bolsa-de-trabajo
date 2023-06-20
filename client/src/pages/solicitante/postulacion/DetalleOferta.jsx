import { Header } from "../../../components/Header";
import {
  BaseContainer,
  BaseBody,
  BaseSection,
  BaseSectionData,
} from "../../../styles/base";
import "../../../styles/elements/card-empleo.css";
import "../../../styles/pages/detalleOferta.css";
import { useCustomFetch } from "../../../hooks/useCustomFetchAndres";
import { GestionSection } from "../../../styles/pages/admin/gestion";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const DetalleOferta = () => {
  const { idOfert } = useParams();
  let idOfertAux = null;
  let idEmpresa = "";
  let idCategoriaOferta = "";
  let idUsuario = "";
  let idSolicitante = "";
  let idSolicitanteAux = null;
  let ids = "";
  let urlPostula = "";
  let rol = localStorage.getItem("rol");
  let rolAux = null;

  const urlOferta =
    process.env.NODE_ENV === "production"
      ? "/api/ofertas/" + idOfert
      : "http://localhost:3000/api/ofertas/" + idOfert;
  let [dataBase] = useCustomFetch(urlOferta);
  if (dataBase) {
    idEmpresa = dataBase.idEmpresa.toString();
    idCategoriaOferta = dataBase.idCategoriaOfer.toString();
  }

  const urlEmpresa =
    process.env.NODE_ENV === "production"
      ? "/api/empresas/" + idEmpresa
      : "http://localhost:3000/api/empresas/" + idEmpresa;

  const urlCategoria =
    process.env.NODE_ENV === "production"
      ? "/api/categorias/" + idCategoriaOferta
      : "http://localhost:3000/api/categorias/" + idCategoriaOferta;
  let [empresa] = useCustomFetch(urlEmpresa);
  let [categoria] = useCustomFetch(urlCategoria);
  const [isLoading, setIsLoading] = useState(true);

  idUsuario = localStorage.getItem("id_usuario");

  if(rol == 'solicitante'){
    console.log('Pase el primer if')
    rolAux = 'solicitante'
    if(idUsuario){
      console.log('pase el segundo if')
      const urlSolic =
        process.env.NODE_ENV === "production"
          ? "/api/solicitantes/us/" + idUsuario.toString()
          : "http://localhost:3000/api/solicitantes/us/" + idUsuario.toString();
      let [solicitante] = useCustomFetch(urlSolic);

      if (solicitante) {
        idSolicitante = solicitante.id;
        ids = idOfert.toString() + "/" + idSolicitante.toString();
        urlPostula =
          process.env.NODE_ENV === "production"
            ? "/api/postula/" + ids
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

      useEffect(() => {
        if (dataBase && empresa && categoria && solicitante && postula) {
          setIsLoading(false);
        }
      }, [dataBase, empresa, categoria, solicitante, postula]);
    }

  }else{
    rolAux = null
  }
  

  function registrarPostula(idOfertAux, idSolicitante) {
    console.log("Botón clickeado");

    const Http = new XMLHttpRequest();
    const urlRegistrarPostulacion =
      process.env.NODE_ENV === "production"
        ? "/api/postula/ins/" + idOfertAux + "/" + idSolicitante
        : "http://localhost:3000/api/postula/ins/" + idOfertAux + "/" + idSolicitante;
    Http.open("GET", urlRegistrarPostulacion);
    Http.send();

    Http.onreadystatechange = (e) => {
      console.log(Http.responseText);
    };

    window.location.reload();
  }
  

  return (
    <BaseContainer>
      <Header titulo="Detalle de la oferta" />
      <BaseBody>
        
          <div className="card-ofertaDe">
            <div
              className="card-headerDetalle"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div>
                <h2>{empresa && empresa.nombreEmpresa}</h2>
              </div>
              <div>
                {categoria && (
                  <>
                    <b>Categoria:</b> {categoria.categoriaOfer}
                  </>
                )}
                <br></br>
                <br></br>
                {dataBase && (
                  <>
                    <b>Direccion:</b> {dataBase.ubicacion}
                  </>
                )}
                <br></br>
                <br></br>
                {dataBase && (
                  <>
                    <b>Modalidad:</b> {dataBase.modalidad}
                  </>
                )}
                <br></br>
                <br></br>
              </div>
            </div>

            <div className="card-bodyDeta">
              <div>
                <h2 className="titulos">{dataBase && dataBase.tituloOferta}</h2>
                <p className="">{dataBase && dataBase.descOferta}</p>

                <h3 className="titulos">Experiencia requerida</h3>
                <span className="">{dataBase && dataBase.expLaboral}</span>
              </div>
              <div>
                <h3 className="titulos">Requerimientos academicos</h3>
                <p className="">{dataBase && dataBase.perfilAcademico}</p>

                <h3 className="titulos">Habilidades deseadas</h3>
                <p className="">{dataBase && dataBase.habilidades}</p>

                <h3 className="titulos">Rango salarial</h3>
                <p className="">
                  {dataBase && <span>($) {dataBase.rangoSalar}</span>}
                </p>
              </div>
            </div>

            <div className="card-footerDe">
              {rolAux == 'solicitante' ? (
                idSolicitanteAux && idOfertAux ? (
                  <p>
                    <span className="postulando">Ya está postulando a esta oferta</span>
                  </p>
              
                ) : (
                  <button
                    className="button-cardDeta"
                    onClick={() => registrarPostula(idOfertAux, idSolicitante)}>
                    {" "}
                    Postularse para este empleo{" "}
                  </button>
                )

                ) : (

                <p></p>
              )}
            </div>
          </div>
        
      </BaseBody>
    </BaseContainer>
  );
};
