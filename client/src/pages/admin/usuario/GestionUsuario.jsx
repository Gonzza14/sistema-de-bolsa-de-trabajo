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
import Message from "../../../components/Message";
import { useEffect } from "react";

export const GestionUsuario = () => {

    const url = 
    process.env.NODE_ENV === "production"
    ? "/api/usuarios"
    : "http://localhost:3000/api/usuarios"

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
        handleClick,
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
                        {response && (
                            <Message msg="La operacion se realizo con exito" bgColor="#0F2651" />
                        )}
                        <ButtonSection>
                            {pathname === "/GestionUsuario" && <><Buscador placeHolder="Buscar usuario" className="gestion" search={search} searcher={searcher} setSearch={setSearch} /><ButtonCreate to={`agregar`} onClick={handleClick}><StyledFontAwesomeIcon icon={faPlus} size="xl"></StyledFontAwesomeIcon><SpanButton>Agregar usuario</SpanButton></ButtonCreate></>}
                        </ButtonSection>
                        <Routes>
                            <Route path={``} element={<ListarUsuario
                                error={error}
                                loading={loading}
                                setDataToEdit={setDataToEdit}
                                dataBase={results}
                                deleteData={deleteData}
                                setResponse={setResponse}
                            />} />
                            <Route path={`agregar`} element={<FormularioUsuario
                                createData={createData}
                                setDataToEdit={setDataToEdit}
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