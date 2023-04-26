import { Header } from "../../../components/Header";
import { BaseContainer, BaseBody, BaseSectionData } from "../../../styles/base";
import { ButtonCreate, SpanButton } from "../../../styles/elements/botones";
import { Route, Routes, useLocation } from "react-router-dom";
import { ButtonSection, GestionSection } from "../../../styles/pages/admin/gestion";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { StyledFontAwesomeIcon } from "../../../styles/elements/navBar";
import { useCustomFetch } from "../../../hooks/useCustomFetch";
import { Buscador } from "../../../components/Buscador";
import { useSearch } from "../../../hooks/useSearch";
import { ListarUsuario } from "./ListarUsuario";
import { FormularioUsuario } from "./FormularioUsuario";
import { EditarUsuario } from "./EditarUsuario";

export const GestionUsuario = () => {

    let url = "http://localhost:3000/api/usuarios"

    const { pathname } = useLocation()

    let {
        dataBase,
        dataToEdit,
        setDataToEdit,
        createData,
        updateData,
        deleteData,
        error,
        loading
    } = useCustomFetch(url);

    let {
        search, searcher, setSearch
    } = useSearch()

    const results = !search ? dataBase : dataBase.filter(data => data.correoUsuario.toLowerCase().includes(search.toLowerCase()))

    return (
        <BaseContainer>
            <Header titulo="Gestion de usuario" />
            <BaseBody>
                <BaseSectionData>
                <GestionSection>
                        <ButtonSection>
                            {pathname === "/GestionUsuario" && <><Buscador placeHolder="Buscar usuario" className="gestion" search={search} searcher={searcher} setSearch={setSearch} /><ButtonCreate to={`agregar`}><StyledFontAwesomeIcon icon={faPlus} size="xl"></StyledFontAwesomeIcon><SpanButton>Agregar usuario</SpanButton></ButtonCreate></>}
                        </ButtonSection>
                        <Routes>
                            <Route path={``} element={<ListarUsuario
                                error={error}
                                loading={loading}
                                setDataToEdit={setDataToEdit}
                                dataBase={results}
                                deleteData={deleteData}
                            />} />
                             <Route path={`agregar`} element={<FormularioUsuario
                                createData={createData}
                            />} />
                            <Route path={`editar/:id/*`} element={<EditarUsuario
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
}