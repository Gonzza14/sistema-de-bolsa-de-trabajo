import { Header } from "../components/Header";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {
  BaseContainer,
  BaseBody,
  BaseSectionData,
  BaseSection,
  BaseSectionHeader,
  SectionContainer,
} from "../styles/base";
import {
  ButtonCreate,
  ButtonNextPrev,
  SmallButton,
  StyledFontAwesomeIconBoton,
} from "../styles/elements/botones";
import { useNavigate } from "react-router-dom";
import { TarjetaEmpleo } from "../components/empleo";
import { useCustomFetch } from "../hooks/useCustomFetch";
import Loader from "../components/Loader";
import { BuscadorOfertas } from "../components/BuscadorOfertas";
import "../styles/elements/buscador-ofertas.css";
import { useSearch } from "../hooks/useSearch";
import { useState } from "react";
import { StyledSelect } from "../styles/elements/buscador-ofertas";

export const Buscar = () => {
  // Verificar si se ha iniciado sesion
  let haySesion = null;
  haySesion =
    localStorage.getItem("rol") == null
      ? (haySesion = false)
      : (haySesion = true);
  const [locationSearch, setLocationSearch] = useState("");
  const [modalitySearch, setModalitySearch] = useState("");
  const [idOfertaTipoSearch, setIdOfertaTipoSearch] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [sortOrder, setSortOrder] = useState("asc");

  const sortResults = (results) => {
    if (sortOrder === "asc") {
      return results.sort((a, b) =>
        a.tituloOferta.localeCompare(b.tituloOferta)
      );
    } else {
      return results.sort((a, b) =>
        b.tituloOferta.localeCompare(a.tituloOferta)
      );
    }
  };

  // Obtener datos de oferta
  let url =
    process.env.NODE_ENV === "production"
      ? "/api/ofertas"
      : "http://localhost:3000/api/ofertas";

  let { dataBase, error, loading } = useCustomFetch(url);
  let ofertas = null;

  let { search, searcher, setSearch } = useSearch();
  let totalResults = null;
  let totalPages = null;

  if (dataBase) {
    console.log(dataBase);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const filteredResults = dataBase.filter(
      (postulacion) =>
        (search === "" ||
          postulacion.tituloOferta
            .toLowerCase()
            .includes(search.toLowerCase())) &&
        (locationSearch === "" ||
          postulacion.ubicacion
            .toLowerCase()
            .includes(locationSearch.toLowerCase())) &&
        (modalitySearch === "" ||
          postulacion.modalidad.toLowerCase() ===
            modalitySearch.toLowerCase()) &&
        (idOfertaTipoSearch == 0 ||
          postulacion.idCategoriaOfer == idOfertaTipoSearch)
    );
    totalResults = filteredResults.length;
    totalPages = Math.ceil(filteredResults.length / itemsPerPage);
    if (filteredResults.length === 0) {
      ofertas = <p>No se encontraron resultados</p>;
    } else {
      ofertas = (
        <div className="cards-container">
          {sortResults(filteredResults)
            .slice(indexOfFirstItem, indexOfLastItem)
            .map((postulacion, index) => {
              return (
                <div key={index}>
                  <TarjetaEmpleo
                    titulo={postulacion.tituloOferta}
                    descripcion={
                      postulacion.idCategoriaOfer 
                    }
										salario = {postulacion.rangoSalar}
										direccion = {postulacion.ubicacion}
										modalidad = {postulacion.modalidad}
										categoria = {postulacion.idCategoriaOfer}
                    idOferta={postulacion.id}
                    link={"/detalleoferta/" + postulacion.id}
                    width={"90%"}
                  ></TarjetaEmpleo>
                </div>
              );
            })}
        </div>
      );
    }
  }

  return (
    <BaseContainer>
      <Header titulo="Buscar" />
      {/* <p>
        Puedes hacer uso de filtros como ubicación, categoría, nivel de
        experiencia, tipo de contrato, etc.
      </p> */}

      <BaseBody>
        <BaseSectionData className="center">
          <h3>!Aqui puedes realizar tus busquedas!</h3>
          <div className="card-buscador">
            <div>
              <b>Nombre del cargo: </b>
              <br />
              <BuscadorOfertas
                placeHolder="Nombre del cargo"
                className="home"
                search={search}
                searcher={searcher}
                setSearch={setSearch}
                setLocationSearch={setLocationSearch}
                setModalitySearch={setModalitySearch}
                setIdOfertaTipoSearch={setIdOfertaTipoSearch}
              />{" "}
              <br />
              <b>Ubicacion: </b>
              <br />
              <BuscadorOfertas
                placeHolder="Ubicación"
                className="home"
                search={locationSearch}
                searcher={(e) => setLocationSearch(e.target.value)}
                setSearch={setSearch}
                setLocationSearch={setLocationSearch}
                setModalitySearch={setModalitySearch}
                setIdOfertaTipoSearch={setIdOfertaTipoSearch}
              />
            </div>
            <div>
              <b>Modalidad trabajo: </b>
              <br />
              <StyledSelect
                value={modalitySearch}
                onChange={(e) => setModalitySearch(e.target.value)}
              >
                <option value="">--Seleccione una opción modalidad--</option>
                <option value="Presencial">Presencial</option>
                <option value="Semi-Presencial">Semi-Presencial</option>
              </StyledSelect>
              <br />
              <b>Categoria de trabajo: </b>
              <br />
              <StyledSelect
                value={idOfertaTipoSearch}
                onChange={(e) => setIdOfertaTipoSearch(e.target.value)}
              >
                <option value="">--Seleccione una opción categoria--</option>
                <option value="1">Informática</option>
                <option value="2">Recursos Humanos</option>
                <option value="3">Mercadeo</option>
                <option value="4">Finanzas</option>
              </StyledSelect>
            </div>
          </div>
          <hr />
          <p>Total Resultados: {totalResults}</p>

          <ButtonNextPrev
            onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
          >
            Ordenar: {sortOrder === "asc" ? "Asc" : "Desc"}
          </ButtonNextPrev>

          {dataBase && <SectionContainer>{ofertas}</SectionContainer>}
          <hr />
					<hr />
					<hr />
					<hr />
					<hr />
					<hr />
					<hr />
					<hr />
					<hr />
					<hr />
					<p>Total Paginas: {totalPages}</p>

          <div style={{ display: "flex" }}>
            <ButtonNextPrev onClick={() => setCurrentPage(currentPage - 1)}>
              Previous
            </ButtonNextPrev>
            <ButtonNextPrev onClick={() => setCurrentPage(currentPage + 1)}>
              Next
            </ButtonNextPrev>
          </div>
          {loading && <Loader />}
        </BaseSectionData>
				
      </BaseBody>
    </BaseContainer>
  );
};
