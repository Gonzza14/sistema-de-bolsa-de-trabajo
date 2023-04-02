import { Header } from "../../../components/Header";
import { BaseContainer, BaseBody, BaseSection, SectionContainer } from "../../../styles/base";
import { ButtonCreate } from "../../../styles/elements/botones";
import { FormularioEmpresa } from "./FormularioEmpresa";
import { Route, Routes } from "react-router-dom";
import { TablaEmpresa } from "./TablaEmpresa";
import { helpHttp } from "../../../helpers/helpHttp"
import { useState, useEffect } from "react";

export const GestionEmpresa = () => {

    const [dataBase, setDatabase] = useState([]);
    const [dataToEdit, setDataToEdit] = useState(null);

    let api = helpHttp();
    let url = "http://localhost:3000/api/empresas"

    useEffect(() => {
        const controller = new AbortController();
        api.get(url, { signal: controller.signal }).then(res => console.log(res))
        return () => {
            controller.abort();
        };
    }, [url])

    return (
        <BaseContainer>
            <Header titulo="Gestion de empresa" />
            <BaseBody>
                <BaseSection>
                    <SectionContainer>
                        <TablaEmpresa data={dataBase} />
                        <FormularioEmpresa />
                    </SectionContainer>
                </BaseSection>
            </BaseBody>
        </BaseContainer>
    );
};