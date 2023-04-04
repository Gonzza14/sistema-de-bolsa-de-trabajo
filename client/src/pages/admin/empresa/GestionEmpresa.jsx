import { Header } from "../../../components/Header";
import { BaseContainer, BaseBody, BaseSection } from "../../../styles/base";
import { ButtonCreate, SpanButton } from "../../../styles/elements/botones";
import { FormularioEmpresa } from "./FormularioEmpresa";
import { Route, Routes, useLocation } from "react-router-dom";
import { helpHttp } from "../../../helpers/helpHttp"
import { useState, useEffect } from "react";
import { ListarEmpresa } from "./ListarEmpresa";
import { ButtonSection, GestionSection } from "../../../styles/pages/admin/gestion";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { StyledFontAwesomeIcon } from "../../../styles/elements/navBar";


export const GestionEmpresa = () => {

    const [dataBase, setDatabase] = useState(null);
    const [dataToEdit, setDataToEdit] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    let url = "http://localhost:3000/api/empresas"

    const { pathname } = useLocation()


    useEffect(() => {
        helpHttp().get(url).then(res => {
            setLoading(true);
            if (!res.err) {
                setDatabase(res.empresas)
                setError(null);
            } else {
                setDatabase(null);
                setError(res);
            }
            setLoading(false);
        })
    }, [url])

    const createData = (data) => {
        data.id = Date.now();
        //console.log(data);

        let options = {
            body: data,
            headers: { "content-type": "application/json" },
        };

        helpHttp().post(url, options).then((res) => {
            //console.log(res);
            if (!res.err) {
                setDatabase([...dataBase, res]);
            } else {
                setError(res);
            }
        });
    };

    const updateData = (data) => {
        let endpoint = `${url}/${data.id}`;
        //console.log(endpoint);

        let options = {
            body: data,
            headers: { "content-type": "application/json" },
        };

        helpHttp().put(endpoint, options).then((res) => {
            //console.log(res);
            if (!res.err) {
                let newData = dataBase.map((el) => (el.id === data.id ? data : el));
                setDatabase(newData);
            } else {
                setError(res);
            }
        });
    };

    const deleteData = (id) => {
        let isDelete = window.confirm(
            `¿Estás seguro de eliminar el registro con el id '${id}'?`
        );

        if (isDelete) {
            let endpoint = `${url}/${id}`;
            let options = {
                headers: { "content-type": "application/json" },
            };

            helpHttp().del(endpoint, options).then((res) => {
                //console.log(res);
                if (!res.err) {
                    let newData = dataBase.filter((el) => el.id !== id);
                    setDatabase(newData);
                } else {
                    setError(res);
                }
            });
        } else {
            return;
        }
    };

    return (
        <BaseContainer>
            <Header titulo="Gestion de empresa" />
            <BaseBody>
                <BaseSection>
                    <GestionSection>
                        <ButtonSection>
                            {pathname === "/GestionEmpresa" && <ButtonCreate to={`agregar`}><StyledFontAwesomeIcon icon={faPlus} size="xl"></StyledFontAwesomeIcon><SpanButton>Agregar empresa</SpanButton></ButtonCreate>}
                        </ButtonSection>
                        <Routes>
                            <Route path={``} element={<ListarEmpresa
                                error={error}
                                loading={loading}
                                setDataToEdit={setDataToEdit}
                                dataBase={dataBase}
                                deleteData={deleteData}
                            />} />
                            <Route path={`agregar`} element={<FormularioEmpresa
                                createData={createData}
                                updateData={updateData}
                                dataToEdit={dataToEdit}
                                setDataToEdit={setDataToEdit}
                            />} />
                            <Route path={`editar/:id`} element={<FormularioEmpresa
                                createData={createData}
                                updateData={updateData}
                                dataToEdit={dataToEdit}
                                setDataToEdit={setDataToEdit}
                            />} />
                        </Routes>
                    </GestionSection>
                </BaseSection>
            </BaseBody>
        </BaseContainer>
    );
};