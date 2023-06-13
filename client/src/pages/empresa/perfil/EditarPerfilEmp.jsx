import { VerUsuarioEmp } from "./VerUsuarioEmp";
import {
    BioPerfil,
    FooterPerfil,
    FormContainer,
    FormGroup,
    FormLabelUser,
    FormInputUser,
    FormSelectUser,
    InputButtonUser,
    NamePerfil

} from "../../../styles/pages/usuario";
import { faMapSigns, faCalendarAlt, faPersonHalfDress, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useCustomFetch } from "../../../hooks/useCustomFetch";
import { useForm } from "../../../hooks/useForm";
import moment from 'moment';

const initialForm = {
    nombresEmpresa: "",
    direcEmpresa: "",
    telefonoEmpresa: "",
    id: null
}

const validateForm = (form) => {
    let errors = {};
    return errors;
}


export const EditarPerfilEmp = ({
    updateDataSolicitante,
    error,
    loading,
    setDataToEdit,
    dataToEdit,
    dataBase,
    setResponse,
}) => {
    let path = "/UsuarioEmp"

    let {
        form,
        errors,
        handleChange,
        handleBlur,
        handleSubmit
    } = useForm(
        initialForm,
        validateForm,
        path,
        null,
        updateDataSolicitante,
        dataToEdit,
        setDataToEdit
    )

    return (
        <>
            {dataBase && <VerUsuarioEmp
                error={error}
                loading={loading} dui
                dataToEdit={dataToEdit}
                dataBase={dataBase}
                setResponse={setResponse}>
                <BioPerfil>
                    <NamePerfil>Editar perfil de usuario</NamePerfil>
                </BioPerfil>
                <FormContainer onSubmit={handleSubmit}>
                    <FooterPerfil>
                        <FormGroup>
                            <FormLabelUser htmlFor="nombreEmpresa">Nombre Empresa</FormLabelUser>
                            <FormInputUser
                                type="text"
                                id="nombreEmpresa"
                                name="nombreEmpresa"
                                placeholder="Nombre de la empresa"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={form.nombreEmpresa}
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormLabelUser htmlFor="direcEmpresa">Direccion de la empresa:</FormLabelUser>
                            <FormInputUser
                                type="text"
                                id="direcEmpresa"
                                name="direcEmpresa"
                                placeholder="Direccion de empresa"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={form.direcEmpresa}
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormLabelUser htmlFor="telefonoEmpresa">Telefono:</FormLabelUser>
                            <FormInputUser
                                type="tel"
                                id="telefonoEmpresa"
                                name="telefonoEmpresa"
                                placeholder="Numero telefonico de la empresa"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={form.telefonoEmpresa}
                            />
                        </FormGroup>
                        
                        <InputButtonUser type="submit" value="Enviar" />
                    </FooterPerfil>
                </FormContainer>
            </VerUsuarioEmp>}
        </>
    )
}