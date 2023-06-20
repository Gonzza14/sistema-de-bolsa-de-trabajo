import { Header } from "../components/Header";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { BaseContainer, BaseBody, BaseSectionData, BaseSection, BaseSectionHeader, SectionContainer } from "../styles/base";
import {
  SmallButton,
  StyledFontAwesomeIconBoton,
} from "../styles/elements/botones";
import { useNavigate } from "react-router-dom";
import { TarjetaEmpleo } from "../components/empleo";
import { useCustomFetch } from "../hooks/useCustomFetch";
import Loader from "../components/Loader";
import { Buscador } from "../components/Buscador";
import "../styles/elements/card-empleo.css"
import { useSearch } from "../hooks/useSearch";

export const Buscar = () => {
  // Verificar si se ha iniciado sesion
    let haySesion = null;
    haySesion = localStorage.getItem("rol") == null ? haySesion = false: haySesion = true;
    
  // Obtener datos de oferta
    let url = 
        process.env.NODE_ENV === "production"
        ? "api/ofertas"
        :"http://localhost:3000/api/ofertas"

    let {
        dataBase,
        error,
        loading,
    } = useCustomFetch(url);
    let ofertas = null;
  
    let {
      search, searcher, setSearch
    } = useSearch()


    if(dataBase) {
        ofertas = dataBase.map((postulacion, index) => {
            return <div className="row" key={index}>
                    <TarjetaEmpleo 
                        titulo={postulacion.tituloOferta}
                        descripcion={postulacion.descOferta}
                        idOferta={postulacion.id}
                        link={"/detalleoferta/"+postulacion.id}
                        width={"90%"}>
                    </TarjetaEmpleo>
                </div>
        })
    }

  const navigate = useNavigate();
  return (
    <BaseContainer>
      <Header titulo="Buscar" />
      <SmallButton onClick={() => navigate(-1)}>
        <StyledFontAwesomeIconBoton icon={faArrowLeft} size="xl" />
        Regresar
      </SmallButton>
      <BaseBody>
        <BaseSectionData className="center">
          <Buscador placeHolder="Buscar empleo" className="home" search={search} searcher={searcher} setSearch={setSearch}/>

          <hr/><hr/><hr/>
          {
            dataBase && (
                <SectionContainer>
                    {ofertas}
                </SectionContainer>
            )
          }
          {loading && <Loader />}
        </BaseSectionData>
      </BaseBody>
    </BaseContainer>
  );
};
