import { Header } from "../../../components/Header";
import { BaseContainer, BaseBody, BaseSectionData } from "../../../styles/base";
import { ButtonCreate, SpanButton } from "../../../styles/elements/botones";
import { Route, Routes, useLocation } from "react-router-dom";
import { ListarOfertaEmpleo } from "./ListarOfertaEmpleo";
import { ButtonSection, GestionSection } from "../../../styles/pages/admin/gestion";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { StyledFontAwesomeIcon } from "../../../styles/elements/navBar";
import { useCustomFetch } from "../../../hooks/useCustomFetch";
import { Buscador } from "../../../components/Buscador";
import { useSearch } from "../../../hooks/useSearch";
import Message from "../../../components/Message";
import { FormularioOfertaEmpleo } from "./FormularioOfertaEmpleo";
import { DetalleOfertaEmpleo } from "./DetalleOfertaEmpleo";



export const GestionOfertaEmpleo = () => {
    let id_usuario = localStorage.getItem("id_usuario"),
    url =
    process.env.NODE_ENV === "production"
      ? `/api/ofertaEmpleos/${id_usuario}`
      : `http://localhost:3000/api/ofertaEmpleos/${id_usuario}`;

    const { pathname } = useLocation()

    let {
        dataBase,
        dataToEdit,
        setDataToEdit,
        createData,
        updateData,
        deleteData,
        error,
        loading,
        response,
        setResponse,
        handleClick
    } = useCustomFetch(url);

    let {
        search, searcher, setSearch
    } = useSearch()

  const results = !search ? dataBase: dataBase.filter(data => {
      const fechaMatch = data.createdAt.includes(search);
      const tituloMatch = data.tituloOferta.toLowerCase().includes(search.toLowerCase());
      const estadoMatch = (data.estado && search.toLowerCase() === 'activo') || (!data.estado && search.toLowerCase() === 'inactivo');
      return fechaMatch || tituloMatch || estadoMatch;
    })

    return (
        <BaseContainer>
            <Header titulo="Gestion de Anuncios de ofertas de empleo" />
            <BaseBody>
                <BaseSectionData>
                    <GestionSection>
                        {response && (
                            <Message msg="La operacion se realizo con exito" bgColor="#0F2651"/>
                        )}
                        <ButtonSection>
                            {pathname === "/GestionOfertaEmpleo" && <><Buscador placeHolder="Buscar anuncio de empleo" className="gestion" search={search} searcher={searcher} setSearch={setSearch} /><ButtonCreate to={`agregar`} onClick={handleClick}><StyledFontAwesomeIcon icon={faPlus} size="xl"></StyledFontAwesomeIcon><SpanButton>Agregar anuncio</SpanButton></ButtonCreate></>}
                        </ButtonSection>
                        <Routes>
                            <Route path={``} element={<ListarOfertaEmpleo
                                error={error}
                                loading={loading}
                                setDataToEdit={setDataToEdit}
                                dataBase={results}
                                deleteData={deleteData}
                                setResponse={setResponse}
                            />} />
                            <Route path={`agregar`} element={<FormularioOfertaEmpleo
                                createData={createData}
                                updateData={updateData}
                                dataToEdit={null}
                                setDataToEdit={setDataToEdit}
                            />} />
                            <Route path={`editar/:id`} element={<FormularioOfertaEmpleo
                                createData={createData}
                                updateData={updateData}
                                dataToEdit={dataToEdit}
                                setDataToEdit={setDataToEdit}
                            />} />
                            <Route path={`detalle/:id`} element={<DetalleOfertaEmpleo
                                createData={createData}
                                updateData={updateData}
                                dataToEdit={dataToEdit}
                                setDataToEdit={setDataToEdit}
                            />} />
                        </Routes>
                    </GestionSection>
                </BaseSectionData>
            </BaseBody>
        </BaseContainer>
    );
};