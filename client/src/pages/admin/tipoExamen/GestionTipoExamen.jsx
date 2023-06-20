import { Header } from "../../../components/Header";
import { BaseContainer, BaseBody, BaseSectionData } from "../../../styles/base";
import { ButtonCreate, SpanButton } from "../../../styles/elements/botones";
import { FormularioTipoExamen } from "./FormularioTipoExamen";
import { Route, Routes, useLocation } from "react-router-dom";
import { ListarTipoExamen } from "./ListarTipoExamen";
import { ButtonSection, GestionSection } from "../../../styles/pages/admin/gestion";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { StyledFontAwesomeIcon } from "../../../styles/elements/navBar";
import { useCustomFetch } from "../../../hooks/useCustomFetch";
import { Buscador } from "../../../components/Buscador";
import { useSearch } from "../../../hooks/useSearch";

export const GestionTipoExamen = () => {

		let url = 
    process.env.NODE_ENV === "production"
    ? "/api/tipoExamenes"
    :"http://localhost:3000/api/tipoExamenes";


    const { pathname } = useLocation();

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
    
    const results = !search ? dataBase : dataBase.filter(
        data => 
        data.nombreTipoExamen.toLowerCase().includes(search.toLowerCase()))
        return (
            <BaseContainer>
                <Header titulo="Gestion de Tipo de Habilidad"/>
                <BaseBody>
                    <BaseSectionData>
                        <GestionSection>
                            <ButtonSection>
                                {pathname === "/GestionTipoExamen" && <> <Buscador placeHolder="Buscar tipo de examen" className="gestion" search={search} searcher={searcher} setSearch={setSearch}/><ButtonCreate to={`agregar`}><StyledFontAwesomeIcon icon={faPlus} size="xl"></StyledFontAwesomeIcon><SpanButton>Agregar tipo de examen</SpanButton></ButtonCreate>
                                </>}
                            </ButtonSection>
                            <Routes>
                                <Route path={``} element={<ListarTipoExamen 
                                    error={error}
                                    loading={loading}
                                    setDataToEdit={setDataToEdit}
                                    dataBase={results}
                                    deleteData={deleteData}
                                />}/>
                                <Route path={`agregar`} element={<FormularioTipoExamen
                                    createData={createData}
                                    updateData={updateData}
                                    dataToEdit={null}
                                    setDataToEdit={setDataToEdit}
                                />}/>
                                <Route path={`editar/:id`} element={<FormularioTipoExamen
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
        )
}