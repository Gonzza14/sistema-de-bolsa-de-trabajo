import { Header } from "../../../components/Header";
import { BaseContainer, BaseBody, BaseSectionData } from "../../../styles/base";
import { ButtonCreate, SpanButton } from "../../../styles/elements/botones";
import { FormularioPermiso } from "./FormularioPermiso";
import { Route, Routes, useLocation } from "react-router-dom";
import { ListarPermiso } from "./ListarPermiso";
import { ButtonSection, GestionSection } from "../../../styles/pages/admin/gestion";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { StyledFontAwesomeIcon } from "../../../styles/elements/navBar";
import { useCustomFetch } from "../../../hooks/useCustomFetch";
import { Buscador } from "../../../components/Buscador";
import { useSearch } from "../../../hooks/useSearch";
import Message from "../../../components/Message";



export const GestionPermiso = () => {

    let url = "http://localhost:3000/api/permisos"

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

    const results = !search ? dataBase : dataBase.filter(data => data.nombrePermiso.toLowerCase().includes(search.toLowerCase()))

    return (
        <BaseContainer>
            <Header titulo="Gestion de permisos" />
            <BaseBody>
                <BaseSectionData>
                    <GestionSection>
                        {response && (
                            <Message msg="La operacion se realizo con exito" bgColor="#0F2651"/>
                        )}
                        <ButtonSection>
                            {pathname === "/GestionPermiso" && <><Buscador placeHolder="Buscar permiso" className="gestion" search={search} searcher={searcher} setSearch={setSearch} /><ButtonCreate to={`agregar`} onClick={handleClick}><StyledFontAwesomeIcon icon={faPlus} size="xl"></StyledFontAwesomeIcon><SpanButton>Agregar permiso</SpanButton></ButtonCreate></>}
                        </ButtonSection>
                        <Routes>
                            <Route path={``} element={<ListarPermiso
                                error={error}
                                loading={loading}
                                setDataToEdit={setDataToEdit}
                                dataBase={results}
                                deleteData={deleteData}
                                setResponse={setResponse}
                            />} />
                            <Route path={`agregar`} element={<FormularioPermiso
                                createData={createData}
                                updateData={updateData}
                                dataToEdit={null}
                                setDataToEdit={setDataToEdit}
                            />} />
                            <Route path={`editar/:id`} element={<FormularioPermiso
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